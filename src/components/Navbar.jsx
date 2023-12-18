import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className="header" >
    <NavLink to='/' className='px-4 py-3 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
      <p className="blue-gradient_text">VIJAY</p>
    </NavLink>

    <nav className="flex text-lg gap-7 font-medium">
    
     <NavLink to="/projects" className={({isActive})=>isActive ? 'text-blue-500':'text-black'}>
      Projects
     </NavLink>

     <NavLink to="/contact" className={({isActive})=>isActive ? 'text-blue-500':'text-black'}>
      Contact Me
     </NavLink>

    </nav>

    </header>
  )
}

export default Navbar
