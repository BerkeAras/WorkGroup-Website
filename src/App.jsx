import React, {useEffect} from 'react';
import './styles/global.scss';
import Header from './components/header';
import Footer from './components/footer';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import ReactGA from "react-ga4";

// Views
import Home from './views/Home';

function App() {

	useEffect(() => {
		ReactGA.initialize("G-D7E5P3TKS7");
		ReactGA.send("pageview");
	})

	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;