import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

/**
 * Application Entry Point
 * 
 * Initializes React and renders the root App component.
 */
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(<App />);
