import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Home,About,Projects,Contact } from "./pages"
import AppLayout from './components/AppLayout';


const App=()=> {
  return (
   <main className="bg-slate-300/20 h-full ">
   <BrowserRouter>
     <Routes>
     <Route element={<AppLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Route>
     </Routes>
   </BrowserRouter>
   </main>
  )
}

export default App

