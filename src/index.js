import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import { BrowserRouter } from 'react-router-dom'; 

const App = React.lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={
        <div className='flex flex-col h-screen items-center justify-center gap-3'>
          <div className='loader'></div>     
          <div className='text-[#FF3D00] text-[25px] font-semibold'>Loading...</div>  
        </div>
      }>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
