import React from "react";

export default function Home() {
	return (
		<header>
			<a href="/">
				<h1 className="logo">Accueil</h1>
			</a>
			<input type="checkbox" id="nav-toggle" className="nav-toggle" />
			<nav>
				<ul>
					<li>
						<a href="/">POUR VOTRE ENTREPRISE</a>
					</li>
					<li>
						<a href="/">TROUVER VOTRE ESPACE</a>
					</li>
					<li>
						<a href="/">SE CONNECTER</a>
					</li>
					<li>
						<a href="/">S'INSCRIRE</a>
					</li>
				</ul>
			</nav>
			<label htmlFor="nav-toggle" className="nav-toggle-label">
				<span />
			</label>
		</header>
	);
}
