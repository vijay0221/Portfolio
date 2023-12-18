import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

function AppLayout() {
  return (
    <section>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
    </section>
  )
}

export default AppLayout
