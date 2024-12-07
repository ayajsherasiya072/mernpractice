import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Parts/Layout"
import Login from "./Components/Login"
import Signup from "./Components/SIgnup"
import Studenthome from "./Components/Studenthome"





function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/student/login" element={<Login type={"student"}/>} />
            <Route path="/admin/login" element={<Login type={"admin"}/>} />
            <Route path="/student/signup" element={<Signup type={"student"}/>} />
            <Route path="/admin/signup" element={<Signup type={"admin"}/>} />
            <Route path="/student/signup/home" element={<Studenthome/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
