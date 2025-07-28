import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Body from './Components/Body.jsx';
import { Link,RouterProvider } from 'react-router';
import { Outlet } from 'react-router';








function App() {



  

  return (
    <div className="text-3xl font-bold underline text-center mt-10">
      app
      <Outlet></Outlet>
      mahika

      <div>
        <Link to="/navbar"><button>Navbar</button></Link>

      </div>
      
    
    </div>
  )
}

export default App
