const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {
				username: "",
				email: "",
				userId: "",
				userName: "",
				userUrl: "",
				token: "",
				registered: false
			},
			apiResults: [],
			googleResults: []
		},

		actions: {
			removeUserToken: () => localStorage.removeItem("token"),

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
						setStore({ apiResults: data[0]["en"], googleResults: data[0]["es"] });
					})
					.catch(err => console.log(err));
			},

			//Register action begins
			setRegister: user => {
				fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json;" }
				})
					.then(res => res.json())
					.then(data => {
						console.log("Data comes with these inf:", data);
						setStore({ user: data }, { registered: true });
					})
					.catch(err => console.log(err));
			},

			//Login Accition begins
			setLogin: user => {
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json;" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("Login data comes with these:", data);
						setStore({ user: data });

						if (typeof Storage !== "undefined") {
							localStorage.setItem("token", data.token);
							localStorage.setItem("user", JSON.stringify(data.user));
						} else {
							//localstorage no soportado
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
