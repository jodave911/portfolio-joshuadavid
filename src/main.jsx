import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Home from './Home.jsx'
import CustomCursor from './CustomCursor.jsx';
import BackGround from './Background.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackGround />
    <CustomCursor />
    <Home />
  </StrictMode>,
)
