
import "./UsersList.css";
import "../UI/Card.css"
import Card from "../UI/Card";

const UsersList = (props) => {


	return (
		<Card className="list">
			<ul >
				{props.users.map((user) => (
					<li>
						{user.name}  ({user.age})
					</li>
				))}
			</ul>
			
		</Card>
	);
};

export default UsersList;
