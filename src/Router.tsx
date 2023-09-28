import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/screens/Home/Home';
import Battleground from './components/screens/battleground/Battleground';
import WorldMap from './components/screens/world-map/WorldMap';

const Router: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<WorldMap />} path='/worldMap' />
				<Route element={<Battleground />} path='/battleground' />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
