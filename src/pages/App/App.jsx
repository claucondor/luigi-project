import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "../../components/nav-bar";
import "./App.css";
import CenteredImage from '../../components/centeredImage';

export function App() {
  const rectangles = [
    { x: 94, y: 28, width: 5, height: 2.5, info: { 'Numero': 'XXXX', 'Ref': 'Este es un link' } },
    { x: 128, y: 13, width: 5, height: 2.5, info: { 'Numero': 'XXXX', 'Ref': 'Este es un Link' } },
    { x: 162, y: 29, width: 5, height: 2.5, info: { 'Numero': 'XXXX', 'Ref': 'Este es un Link' } },
    { x: 68, y: 81, width: 5, height: 2.5, info: { 'Numero': 'XXXX', 'Ref': 'Este es un Link' } },
    { x: 46, y: 100, width: 5, height: 2.5, info: { 'Numero': 'XXXX', 'Ref': 'Este es un Link' } },
    { x: 52, y: 152, width: 5, height: 2.5, info: { 'Numero': 'XXXX', 'Ref': 'Este es un Link' } },
    { x: 79, y: 129, width: 5, height: 2.5, info: { 'Numero': 'XXXX', 'Ref': 'Este es un Link' } },

  ];
  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Acerca de', path: '/acerca' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <Router>
    <div>
      <NavBar links={links} />
    </div>
    <div>
      <CenteredImage src='https://arweave.net/AbP6LX4_hltCW1zBIYocjBCK00sn0Wu10J9mmha7n-8' rectangles={rectangles} showRectangles={true}/>
    </div>
    </Router>

  );
}
