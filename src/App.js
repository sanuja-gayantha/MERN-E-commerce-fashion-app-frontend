import './App.css';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import Register from './pages/Register';
import Login from './pages/Login'; 
import Cart from './pages/Cart';

import Navbar from './components/Navbar'
import Announcement from './components/Announcement'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'

const Layout = () => {
  return(
    <>
      <Announcement/>
      <Navbar/>
      <Outlet/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/products",
        element: <ProductList/>
      },
      {
        path: "/product",
        element: <SingleProduct/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
    ]
  }

]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

export default App;
