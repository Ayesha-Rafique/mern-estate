import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "c:/Users/Night Agent/Desktop/Ayesha/mern-estate/client/src/pages/signin"
import About from "c:/Users/Night Agent/Desktop/Ayesha/mern-estate/client/src/pages/about"
import Profile from "c:/Users/Night Agent/Desktop/Ayesha/mern-estate/client/src/pages/profile"
import Signup from "c:/Users/Night Agent/Desktop/Ayesha/mern-estate/client/src/pages/SignUp"
import Header from "./component/Header"

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}