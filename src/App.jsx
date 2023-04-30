import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Contactpage from "./Pages/Contactpage";
import HamburgerMenu from "./Components/Navbar";
import Footer from "./Components/Footer";
const App = () => {
	return (
		<Router basename="/Portfolio">
			<HamburgerMenu />
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route path="/contactpage" element={<Contactpage />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
