
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

// Performance monitoring: Log initial mount
if (process.env.NODE_ENV === 'development') {
  console.log('App mounted - Performance monitoring active');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
