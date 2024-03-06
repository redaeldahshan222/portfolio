import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About'
import Portfolio from "./Components/Portfolio/Portfolio"
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"

const myRouter = createHashRouter([
  {path:'/',element:<Layout />,children:[
  {index:true,element: <Home />},
  {path:'/home',element: <Home />},
  {path:'/about',element: <About />},
  {path:'/portfolio',element:<Portfolio/>},
  {path:'/contact',element:<Contact/>},
  ]}
]);

function App() {
  return <>
  <RouterProvider router={myRouter} />
  </>
}

export default App;
