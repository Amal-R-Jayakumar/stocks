import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import sequelize from "./config/database.js";

import stockRouter from "./src/routers/stockRouter.js";

const app = express();

app.use(cors({origin: ["http://localhost", "http://localhost:3000"], optionsSuccessStatus: 200}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/stock", stockRouter);

sequelize
	.sync()
	.then((_response) => {
		const port = process.env.PORT || 5000;
		app.listen(port, "localhost", () => console.log(`DB Connected and Server Started at port ${port}`));
	})
	.catch((error) => console.error(error));
