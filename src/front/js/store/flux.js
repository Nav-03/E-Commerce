const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],



			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCurrentSession: () => {
				const session = JSON.parse(localStorage.getItem("session"));
				setStore({ session });
				return session;
			},
			createNewSession: async (email, password) => {
				const options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password }),
				};
				const response = await fetch(
					process.env.BACKEND_URL + `/api/token`,
					options
				);
				if (!response.ok)
					throw Error("There was a problem in the login request");
				if (response.status === 401) {
					throw "Invalid credentials";
				} else if (response.status === 400) {
					throw "Invalid email or password format";
				}
				if (response.status === 200) {
					const payload = await response.json();
					localStorage.setItem("session", JSON.stringify(payload));
					setStore({ session: payload });
					return payload; //this is gonna make the promise resolve
					// return jsonify({ "token": access_token, "user_id": user.id })
				} else {
					return await response.json();
				}
			},
			addUser: async (name, email, id, password) => {
				const options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: name,
						email: email,
						id: id,
						password: password
					}),
				};
				const response = await fetch(
					process.env.BACKEND_URL + `/api/user/${id}`,
					options
				);
				if (response.status === 200) {
					const payload = await response.json();
					setStore({ user: payload });
					return payload;
				}
			},
			loadUser: async (id) => {
				const response = await fetch(
					process.env.BACKEND_URL + `/api/user/${id}`
				);
				if (response.status === 200) {
					const payload = await response.json();
					// setStore({ guest: payload });
					return payload;
				}
			},

		}
	};
};

export default getState;
