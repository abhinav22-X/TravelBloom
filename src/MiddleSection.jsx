import React from "react";
import "./App.css";

function MiddleSection({
	currentPage,
	name,
	email,
	message,
	handleFormSubmit,
	setName,
	setEmail,
	setMessage,
}) {
	return (
		<div>
			{currentPage === "Home" && (
				<div className="home-page">
					<p>
						Welcome to TravelBloom, your one-stop destination for
						all your travel needs. We offer customized tour
						packages, hotel bookings, and flight reservations.
					</p>
				</div>
			)}

			{currentPage === "About Us" && (
				<div className="about-us-page">
					<h2>About Us</h2>
					<p>
						TravelBloom is a leading travel company that specializes
						in creating unforgettable travel experiences. With over
						10 years of expertise, we offer personalized services to
						cater to your unique travel needs. Our team of travel
						enthusiasts strives to provide exceptional customer
						service and ensure a hassle-free journey.
					</p>
				</div>
			)}

			{currentPage === "Contact Us" && (
				<div className="contact-us-page">
					<h2>Contact Us</h2>
					<form onSubmit={handleFormSubmit}>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Name"
						/>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
						/>
						<textarea
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="Message"
						/>
						<button type="submit">Submit</button>
					</form>
				</div>
			)}
		</div>
	);
}

export default MiddleSection;
