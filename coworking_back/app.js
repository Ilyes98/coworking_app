const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Schema = mongoose.Schema;

const coworkingSchema = new Schema({
	NomCoworking: {
		type: String,
	},
	Photo: {
		type: String,
	},
	Description: {
		type: String,
	},
	Localisation: {
		type: String,
	},
	PrixHeureHT: {
		type: String,
	},
	PrixDemiJourneeHT: {
		type: String,
	},
	PrixJourneeHT: {
		type: String,
	},
});

const Coworking = mongoose.model("Coworking", coworkingSchema);

const dbURI =
	"mongodb+srv://test_user:test_user@offeaze.vupwb.mongodb.net/my_db?retryWrites=true&w=majority";

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => app.listen(4949))
	.catch((err) => console.log(err));

app.use(
	cors({
		origin: "*",
	})
);

app.get("/search", (req, res) => {
	if (req.query.search) {
		var regex = new RegExp(req.query.search, "gi");

		Coworking.find()
			.where("Localisation", regex)
			.then((result) => {
				res.status(200).send({ result: result });
			})
			.catch((err) => {
				console.log(err);
			});
	}
});
