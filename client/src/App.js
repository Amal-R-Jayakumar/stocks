import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import StockSearch from "./views/StockSearch";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<StockSearch />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
