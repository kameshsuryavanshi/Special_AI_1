import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element with ID 'root' not found in the document. Please ensure your public/index.html has <div id='root'></div>.");
}
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
