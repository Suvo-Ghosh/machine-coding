import { Outlet } from "react-router"
import Navbar from "./components_jug/Navbar"


function App() {

  return (

    <div className="">
      <Navbar />
      <Outlet />
    </div>

  )
}

export default App
