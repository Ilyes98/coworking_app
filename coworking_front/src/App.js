import React from "react";
import "./App.css";
import Header from "./Header";
import HomeContent from "./HomeContent";
import Result from "./Result";

function App() {
	if (window.location.pathname.includes("search")) {
		return (
			<div className="App">
				<Header />
				<Result />
			</div>
		);
	} else {
		return (
			<div className="App">
				<Header />
				<HomeContent />
			</div>
		);
	}
}

export default App;
