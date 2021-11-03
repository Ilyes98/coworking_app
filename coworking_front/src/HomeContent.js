import React, { useState } from "react";

export default function HomeContent() {
	const [state, setstate] = useState("Paris");

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
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h1
					style={{
						color: "white",
					}}
				>
					Plateforme de réservation d'espaces de travail
				</h1>
				<h2
					style={{
						color: "white",
					}}
				>
					Trouvez et réservez l'espace de travail qui vous inspire
				</h2>

				<div style={{ display: "flex" }}>
					<input
						type="text"
						placeholder="Paris, France"
						style={{ height: "50px", width: "100%" }}
						className="search-workspace-input"
						onChange={(e) => setstate(e.target.value)}
					/>
					<button
						className="search-workspace-button"
						onClick={() => {
							window.location = "/search?search=" + state;
						}}
					>
						Rechercher
					</button>
				</div>
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					flexWrap: "wrap",
					backgroundColor: "white",
					borderRadius: 20,
					padding: 10,
				}}
			>
				<div style={{ maxWidth: "200px" }}>
					<h3>Etape 1 - CHERCHEZ</h3>
					<p>
						Accédez à un vaste réseau d'espaces de coworking, de bureaux et de
						salles de réunion
					</p>
				</div>
				<div style={{ maxWidth: "200px" }}>
					<h3>Etape 2 - RESERVEZ</h3>
					<p>
						Réservez directement sur notre plateforme et recevez une
						confirmation par mail
					</p>
				</div>
				<div style={{ maxWidth: "200px" }}>
					<h3>Etape 3 - PROFITEZ</h3>
					<p>Bénéficiez d'une expérience simple et agréable</p>
				</div>
			</div>

			<div
				style={{
					color: "white",
				}}
			>
				<p>
					Une demande à plus long terme ? Nos équipes sont là pour vous assister
					!
				</p>
			</div>
			<div
				style={{
					color: "white",
				}}
			>
				<p>Contactez-nous</p>
			</div>
		</div>
	);
}
