import React from "react";
// import "./NavBar.css";

function NavBar({ handlePageChange, currentPage }) {
	return (
		<nav className="nav-bar">
			<ul>
				<li>
					<button onClick={() => handlePageChange("Home")}>
						Home
					</button>
				</li>
				<li>
					<button onClick={() => handlePageChange("About Us")}>
						About Us
					</button>
				</li>
				<li>
					<button onClick={() => handlePageChange("Contact Us")}>
						Contact Us
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
