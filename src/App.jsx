import './styles/global.scss';
import Header from './components/header';
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
			</div>
		</BrowserRouter>
	);
}

export default App;