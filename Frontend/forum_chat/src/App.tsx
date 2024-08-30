import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element ={<Login/>}/>
        <Route path = '/register' element ={<Register/>}/>
        <Route path = '*' element ={<h1> not found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
