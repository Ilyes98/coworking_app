import React, { useEffect, useState } from "react";
import Listing from "./Listing";

export default function Result() {
	const [state, setstate] = useState([]);

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const search = urlParams.get("search");

		fetch("http://localhost:4949/search?search=" + search)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setstate(data.result);
			});
	}, []);

	return (
		<div
			className="content"
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					flexWrap: "wrap",
					marginTop: "50px",
				}}
			>
				{state.map((e) => (
					<Listing state={e} />
				))}
			</div>
		</div>
	);
}
