import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPost from './components/BlogPost';
import About from './pages/About';
import './App.css';

function App() {
	return (
		<div className="App bg-[#0E0C09] text-white min-h-screen">
			<HashRouter>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/post/:slug"
						element={<BlogPost />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
