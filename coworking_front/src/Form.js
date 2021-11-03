import React, { useState } from "react";
import "./form.css";

export default function Form({ state }) {
	const [form, setstate] = useState(0);

	return (
		<div className="center-wrapper">
			<div className="content-form">
				<div className="bag">
					<p className="bag-head">
						<span style={{ textTransform: "uppercase" }}>
							Faire une réservation
						</span>
					</p>
				</div>
				<div
					className="bag-product"
					style={{
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div className="image">
						<img src={state.Photo} alt="" className="product-image" />
					</div>
					<div className="description">
						<p className="product-code small muted">
							Une demande au mais? Veuillez nous contacter{" "}
							<strong> contant@offeaze.co</strong>
						</p>
						<h1>{state.NomCoworking}</h1>

						<p className="description-text">{state.Description}</p>
						<p style={{ marginBottom: "0.5rem" }}>{state.Localisation}</p>
						<div
							style={{
								display: "flex",
								justifyContent: "space-around",
								textAlign: "center",
								flexWrap: "wrap",
							}}
						>
							<div>
								<h2>Heure</h2>
								<h2> {state.PrixHeureHT}€</h2>
							</div>

							<div>
								<h2>Demi Journee</h2>
								<h2> {state.PrixDemiJourneeHT}€</h2>
							</div>
							<div>
								<h2>Journee</h2>
								<h2> {state.PrixJourneeHT}€</h2>
							</div>
						</div>
						<div className="quantity-wrapper">
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexWrap: "wrap",
								}}
							>
								<h3>Type : </h3>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										flexWrap: "wrap",
									}}
								>
									<input
										type="radio"
										id="PrixHeureHT"
										name="fav_language"
										value={state.PrixHeureHT}
										onChange={(e) => setstate(e.target.value)}
									/>
									&nbsp; <label htmlFor="PrixHeureHT">Heure</label>
									<br />
									&nbsp;{" "}
									<input
										onChange={(e) => setstate(e.target.value)}
										type="radio"
										id="PrixDemiJourneeHT"
										name="fav_language"
										value={state.PrixDemiJourneeHT}
									/>
									&nbsp; <label htmlFor="PrixDemiJourneeHT">Demi Journee</label>
									<br />
									&nbsp;{" "}
									<input
										onChange={(e) => setstate(e.target.value)}
										type="radio"
										id="PrixJourneeHT"
										name="fav_language"
										value={state.PrixJourneeHT}
									/>
									&nbsp; <label htmlFor="PrixJourneeHT">Journee</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bag-total">
					<div className="subtotal">
						<p className="small">Prix (HT):</p>
						<p className="small">{form} €</p>
					</div>
					<div className="subtotal">
						<p className="small">Part TVA (20%):</p>
						<p className="small">{form * 0.2} €</p>
					</div>
					<div className="total">
						<h3>Prix Total:</h3>
						<h3>{form * 1.2} €</h3>
					</div>

					<button className="btn-go-checkout">
						<span>Valider</span>
					</button>
				</div>
				<div className="help">
					<p>Une demande spèciale?</p>
				</div>
			</div>
		</div>
	);
}
