import React from 'react'
import ReactDOM from 'react-dom/client'
import PortfolioApp from './portfolioApp'
import { BrowserRouter } from "react-router-dom";
import './assets/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PortfolioApp />
    </BrowserRouter>
  </React.StrictMode>
)
