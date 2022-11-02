import { Outlet } from "react-router-dom"
import LeftBar from "../components/leftbar/LeftBar"
import Navbar from "../components/navbar/Navbar"
import Rightbar from "../components/rightbar/Rightbar"

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }} >
        <LeftBar />
        <div style={{flex: '6'}} >
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  )
}

export default Layout