import React from "react";
import Form from "./Form";
import "./popup.css";

export default function Popup({ state }) {
	return (
		<>
			<div
				id={"open-modal" + state._id}
				className="modal-window"
				style={{ color: "black" }}
			>
				<div style={{ color: "black" }}>
					<a href="#" title="Close" className="modal-close">
						Fermer
					</a>
					<Form state={state} />
				</div>
			</div>
		</>
	);
}