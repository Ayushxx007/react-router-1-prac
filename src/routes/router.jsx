import { createBrowserRouter } from 'react-router';
import Body from "../Components/Body.jsx"
import Navbar from "../Components/Navbar.jsx"
import Footer from "../Components/Footer.jsx"
import App from "../App.jsx";

const router=createBrowserRouter([

    {
        path:'/',
        element:<App></App>,
        children:[   

            {
                path:'/',
                  element:<Body></Body>,


            },
            
            {
          path:'/navbar',
        element:<Navbar></Navbar>



    },
    {
          path:'/footer',
        element:<Footer></Footer>



    }
]


    },




])
export default router;