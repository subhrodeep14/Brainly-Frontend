
import Dashboard from "./components/Dashboard"
import Hero from "./components/Hero"
import Sidebar from "./components/Sidebar"
import { SignIn } from "./components/Signin"

import { BrowserRouter,Route,Routes } from "react-router-dom"
import { SignUp } from "./components/SignUpMain"




function App() {

  return<BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    
    
  </Routes>
  </BrowserRouter>
  
   

 
}

export default App
