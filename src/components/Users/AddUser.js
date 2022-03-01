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
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
			return;
		if (+enteredAge < 1) return;
		if(enteredUsername.trim().length > 24){
			setEnteredUsername("That name is too long")
			return;
		}
		props.onUserAdded(enteredUsername, enteredAge);
		console.log(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	};

	return (
		<Card className="add-user-form">
			<form className="add-user-form" onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input
					required
					type="text"
					value={enteredUsername}
					id="username"
					onChange={usernameChangeHandler}
				/>
				<label htmlFor="age">Age</label>
				<input
					required
					type="number"
					value={enteredAge}
					id="age"
					onChange={ageChangeHandler}
				/>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
