import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/styles/index.css';
import App from './App';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import About from './pages/About/About';
import Error from './components/Error/Error';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
