import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import sequelize from "./config/database.js";

const app = express();

app.use(cors({origin: ["http://localhost", "http://localhost:3000"], optionsSuccessStatus: 200}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

sequelize
	.sync()
	.then((_response) => {
		const port = process.env.PORT || 5000;
		app.listen(port, "localhost", () => console.log(`DB Connected and Server Started at port ${port}`));
	})
	.catch((error) => console.error(error));
