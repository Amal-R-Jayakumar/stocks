import {Stock} from "../models/stock.js";
import {stockData} from "../sampleData.js";

export const getStockList = async function (_request, response) {
	try {
		const result = await Stock.findAll({attributes: ["id", "name"]});
		return response.status(200).json(result);
	} catch (error) {
		console.trace(error);
		return response.status(400).send(error);
	}
};

export const viewStockData = async function (request, response) {
	const {id} = request.params;
	try {
		const result = await Stock.findOne({where: {id}});
		return response.status(200).json(result);
	} catch (error) {
		console.trace(error);
		return response.status(400).send(error);
	}
};

export const addData = async function (_requset, response) {
	try {
		await Stock.bulkCreate(stockData);
		return response.sendStatus(201);
	} catch (error) {
		console.trace(error);
		return response.status(400).send(error);
	}
};
