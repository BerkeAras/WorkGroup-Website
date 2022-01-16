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
import Error404 from './views/Error404';
import Features from './views/Features';
import Imprint from './views/Imprint';
import Datapolicy from './views/Datapolicy';

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
					<Route path="*" element={<Error404 />} />
					<Route path="/" element={<Home />} />
					<Route path="/features" element={<Features />} />
					<Route path="/imprint" element={<Imprint />} />
					<Route path="/data-policy" element={<Datapolicy />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;