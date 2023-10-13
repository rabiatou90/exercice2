// 1. Importer  React et ReactDOM
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from "./App";

// 2. Récupérer l'id root de la div qui se trouve dans index.html
const el = document.getElementById("root");

// 3. Dire à React de prendre le controle de cet élément
const root = ReactDOM.createRoot(el);


// 4. Afficher ce composant
root.render(<App />);

