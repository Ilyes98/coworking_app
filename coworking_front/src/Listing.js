import React from "react";
import "./listing.css";
import Popup from "./Popup";

export default function Listing({ state }) {
	return (
		<div className="coworking-card">
			<aside>
				<img src={state.Photo} alt="Chai Oatmeal" />
				<a className="button" href={"#open-modal" + state._id}>
					<span
						style={{
							paddingLeft: "20px",
							paddingRight: "20px",
						}}
					>
						Plus d'infos
					</span>
				</a>
			</aside>
			<article>
				<h2>{state.NomCoworking}</h2>
				<ul>
					<li>
						<span>Heure</span>
						<span>{state.PrixHeureHT} €</span>
					</li>
					<li>
						<span>Demi Journée</span>
						<span>{state.PrixDemiJourneeHT} €</span>
					</li>
					<li>
						<span>Journée</span>
						<span>{state.PrixJourneeHT} €</span>
					</li>
				</ul>
				<p>{state.Localisation} </p>
				<p>{state.Description} </p>
			</article>
			<Popup state={state} />
		</div>
	);
}
