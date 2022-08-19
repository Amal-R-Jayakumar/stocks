import Sequelize from "sequelize";
import sequelize from "../../config/database.js";

export const Stock = sequelize.define("stock_data", {
	name: {type: Sequelize.STRING(100), allowNull: false, unique: true},
	current_mkt_price: {type: Sequelize.FLOAT, allowNull: false},
	mkt_cap: {type: Sequelize.FLOAT, allowNull: false},
	stock_p_e: {type: Sequelize.FLOAT, allowNull: false},
	divident_yield: {type: Sequelize.FLOAT, allowNull: false},
	roce: {type: Sequelize.FLOAT, allowNull: false},
	previous_annum_roce: {type: Sequelize.FLOAT, allowNull: false},
	debt_to_equity: {type: Sequelize.FLOAT, allowNull: false},
	earnings_per_share: {type: Sequelize.FLOAT, allowNull: false},
	reserve: {type: Sequelize.FLOAT, allowNull: false},
	debt: {type: Sequelize.FLOAT, allowNull: false},
});
