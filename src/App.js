import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import "./App.css";

function App() {
	const [usersList, setUsersList] = useState([]);
	const userAddedHandler = (uName, uAge) => {
		console.log("hello from app");
		setUsersList((prevUsersList) => {
			return [...prevUsersList, { name: uName, age: uAge }];
		});
	};

	return (
		<div className="App">
			<AddUser onUserAdded={userAddedHandler} />
			<UsersList users={usersList}/>
		</div>
	);
}

export default App;
