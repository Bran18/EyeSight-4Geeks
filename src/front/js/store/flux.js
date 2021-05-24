const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {
				username: "",
				email: "",
				userId: "",
				firstname: "",
				lastname: "",
				token: ""
			},
			registered: false,
			logged: false,
			apiResults: [],
			googleResults: [],
			url: [],
			favorite: []
		},

		actions: {
			setLogout: () => {
				setStore({ logged: false }), localStorage.removeItem("token");
			},

			setUrl2: url => {
				setStore(url);
			},

			getToken: () => {
				const tokenLocal = localStorage.getItem("token");
				const userLocal = JSON.parse(localStorage.getItem("user"));
				setStore({
					user: {
						token: tokenLocal,
						user: userLocal
					}
				});
				console.log("Token local -->", tokenLocal);
				console.log("User local-->", JSON.stringify(userLocal));
			},

			//URL action begins
			setUrl: (url, language, transLan) => {
				fetch(process.env.BACKEND_URL + "/api/external", {
					method: "POST",
					body: JSON.stringify(url, language, transLan),
					headers: { "Content-type": "application/json;" }
				})
					.then(res => res.json())
					.then(data => {
						setStore({ apiResults: data[0]["en"], googleResults: data[0]["es"] });
					})
					.catch(err => console.log(err));
			},

			setFavorite: word => {
				fetch(process.env.BACKEND_URL + "/api/favorite", {
					method: "POST",
					body: JSON.stringify(word),
					headers: { "Content-type": "application/json;" }
				})
					.then(res => res.json())
					.then(data => {
						console.log("Registered user comes with these inf:", data);
						setStore({ Favorite: data });
					})
					.catch(err => console.log(err));
			},

			getUser: user => {
				fetch(process.env.BACKEND_URL + "/api/user", {
					method: "GET",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json;" }
				})
					.then(res => res.json())
					.then(data => {
						console.log("User data comes with these inf:", data);
						setStore({ user: data });
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
						console.log("Registered user comes with these inf:", data);
						setStore({ user: data }, { registered: true });
					})
					.catch(err => console.log(err));
			},

			setUpdate: user => {
				fetch(process.env.BACKEND_URL + "/user/id", {
					method: "PUT",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json;" }
				})
					.then(res => res.json())
					.then(data => {
						console.log("Updated user data goes with these inf:", data);
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
						setStore({ logged: true });

						if (typeof Storage !== "undefined") {
							localStorage.setItem("token", data.token);
							localStorage.setItem("user", JSON.stringify(data.user));
						} else {
							//localstorage error
						}
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			getMessage: () => {
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			async forgotPassword(email) {
				let url = process.env.BACKEND_URL + "/api/forgotPassword/";
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				return await fetch(url + email, requestOptions)
					.then(res => {
						return res.json();
					})
					.then(result => {
						return result;
					})
					.catch(error => console.log("error:", error));
			}
		}
	};
};

export default getState;
