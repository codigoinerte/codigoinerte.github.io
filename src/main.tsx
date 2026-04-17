import ReactDOM from 'react-dom/client'
import PortfolioApp from './PortfolioApp'
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from './context/LanguageContext';
import './assets/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  </BrowserRouter>
)
