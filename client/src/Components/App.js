import React, { Component } from "react";
import { auth, provider } from "../firebase/firebase";
import Sidebar from "./Layouts/Sidebar";
import Login from "./Pages/login";

export default class extends Component {
	constructor(props) {
		super();
		this.state = {
			user: JSON.parse(localStorage.getItem("user")),
		};
	}

	componentDidMount() {
		auth.onAuthStateChanged(user => {
			if (user) {
				this.setState({ user });
			}
		});
	}

	logout = async () => {
		await auth.signOut()
		this.setState({ user: null })
		localStorage.removeItem("user");
	}

	login = async () => {
		const result = await auth.signInWithPopup(provider);
		const user = result.user;
		this.setState({ user });
		localStorage.setItem("user", JSON.stringify(user));
	}

	render() {
		const user = this.state.user;
		const page = user
			? <Sidebar logout={this.logout} user={this.state.user} />
			: <Login login={this.login} user={this.user} />

		return <div>{page}</div>;
	}
}