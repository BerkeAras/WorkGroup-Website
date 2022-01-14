import './styles/global.scss';
import Header from './components/header';
import Footer from './components/footer';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";

// Views
import Home from './views/Home';

function App() {
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