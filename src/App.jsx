import React, { useState } from "react";
import NavBar from "./NavBar";
import MiddleSection from "./MiddleSection";

function App() {
	const [currentPage, setCurrentPage] = useState("Home");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", name, email, message);
		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<div>
			<NavBar
				handlePageChange={handlePageChange}
				currentPage={currentPage}
			/>
			<MiddleSection
				currentPage={currentPage}
				name={name}
				email={email}
				message={message}
				handleFormSubmit={handleFormSubmit}
				setName={setName}
				setEmail={setEmail}
				setMessage={setMessage}
			/>
		</div>
	);
}

export default App;
