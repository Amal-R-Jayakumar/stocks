import express from "express";
import {addData, getStockList, viewStockData} from "../controllers/stockController.js";

const router = express.Router();

router.route("/list").get(getStockList);
router.route("/stock-data/:id").get(viewStockData);

router.route("/add-data").get(addData);

export default router;
