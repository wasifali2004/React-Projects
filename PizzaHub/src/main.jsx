import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import "./css/index.css"
import Contact from './Pages/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './Pages/Footer';
import Navbar from './Navbar/Navbar';

const getRouter = createBrowserRouter([
  {
    path: '/', 
    element: <Home />
  },
  {
    path: '/menu', 
    element: <Menu />
  },
  {
    path: '/about', 
    element: <About />
  },
  {
    path: '/contact', 
    element: <Contact />
  },
  {
    path:'/footer', element: <Footer/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={getRouter} />
   
  </StrictMode>
);
