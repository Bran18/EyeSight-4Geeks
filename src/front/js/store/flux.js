const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {
				username: "",
				email: "",
				userId: "",
				userName: "",
				userUrl: ""
			},
			apiResults: []
		},

		actions: {
			removeUserToken: () => localStorage.removeItem("token"),
			unsetUserAuth: () => setStore({ isUserAuth: false }),
			setUserAuth: () => setStore({ isUserAuth: true }),

			getToken: () => {
				const tokenLocal = localStorage.getItem("token");
				const userLocal = JSON.parse(localStorage.getItem("user"));
				setStore({
					user: {
						token: tokenLocal,
						user: userLocal
					}
				});
				console.log("-->", tokenLocal);
				console.log("-->", JSON.stringify(userLocal));
			},

			//URL action begins
			setUrl: url => {
				fetch(process.env.BACKEND_URL + "/api/external", {
					method: "POST",
					body: JSON.stringify(url),
					headers: { "Content-type": "application/json;" }
				})
					.then(res => res.json())
					.then(data => {
						console.log("Flux API", data);
						setStore({ apiResults: data });
					})
					.catch(err => console.log(err));
			},

			//Register action begins
			setRegister: user => {
				const additionalSettings = {
					method: "POST",
					header: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(user)
				};

				fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						//setUserAut();
						setStore({ user: data });
					})
					.catch(err => console.log(err));
			},
			//Login Accition begins
			setLogin: user => {
				const additionalSettings = {
					method: "POST",
					header: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(user)
				};

				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(resp => resp.json())
					.then(data => {
						getActions().setUserAuth();
						console.log("--data--", data);
						setStore({ user: data });

						if (typeof Storage !== "undefined") {
							localStorage.setItem("token", data.token);
							localStorage.setItem("user", JSON.stringify(data.user));
						} else {
						}
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			getMessage: () => {
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
