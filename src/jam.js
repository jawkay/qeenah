
import App from './App.js';
import About from './About.js';
import Contact from './Contact.js';
import Home from './Home.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Rootlayout from './Root.js';
import ErrorPage from './Error.js';
const james = createBrowserRouter([
{
    path: '/', element: <Rootlayout />,
    errorElement: <ErrorPage />,
 children :[

  {path:'/', element: <Home /> },
  {path:'/App', element: <App /> },
  {path:'/About', element: <About /> },
  {path:'/Contact', element: <Contact /> }
 ]
 }
])
 function Jam(){
    return(
        <div>
            <RouterProvider router={james} />
        </div>
    )
}
export default Jam;