import Card from "../UI/Card";
import { useState } from "react";
import "./AddUser.css";
import Button from "../UI/Button";
import React from "react";

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState(``);
	const [enteredAge, setEnteredAge] = useState(``);

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const addUserHandler = (event) => {
		event.preventDefault();
		console.log(enteredUsername, enteredAge);
	};

	return (
		<Card>
			<form className="add-user-form" onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input
					required
					type="text"
					id="username"
					onChange={usernameChangeHandler}
				/>
				<label htmlFor="age">Age</label>
				<input required type="number" id="age" onChange={ageChangeHandler} />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
