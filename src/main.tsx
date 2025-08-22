import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import emailjs from '@emailjs/browser';

emailjs.init('dbwJdfDaZ0YLyOXy1');

createRoot(document.getElementById("root")!).render(<App />);
