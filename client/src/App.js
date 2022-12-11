import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';
import AuthorDetail from './components/AuthorDetail';
import AuthorUpdate from './components/AuthorUpdate';

function App() {
	const [authors, setAuthors] = useState([]);

	return (
		<div className="App">
			<BrowserRouter>
			<NavBar />
				<Routes>
					<Route element={<AuthorList authors={authors} setAuthors={setAuthors} />} path="/home" default/>
					<Route element={<AuthorForm authors={authors} setAuthors={setAuthors} />} path="/form" />
					<Route element={<AuthorDetail />} path="/author/:id" />
					<Route element={<AuthorUpdate />} path="/author/edit/:id" />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
