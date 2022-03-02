import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import "./App.css";

function App() {
	const [usersList, setUsersList] = useState([]);
	let hideList = ``;

	const userAddedHandler = (uName, uAge) => {
		console.log("hello from app");
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	};

	const noUsers = () => {
		return (
			<div className="App">
				<AddUser onUserAdded={userAddedHandler} />
			</div>
		);
	};

	const hasUsers = () => {
		return (
			<div className="App">
				<AddUser onUserAdded={userAddedHandler} />
				<UsersList users={usersList} />
			</div>
		);
	};

	return usersList.length < 1 ? noUsers() : hasUsers();
}

export default App;
