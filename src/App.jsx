import {BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Policy from "./pages/Policy/Policy";
import Commands from "./pages/Commands/Commands";
import { Support, Invite, Vote } from "./pages/Links/Links";
function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="*" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/commands" element={<Commands/>}></Route>
        <Route path="/policy" element={<Policy/>}></Route>
        {/* ------------- Links Routes ------------------ */}
        <Route path="/invite" element={<Invite/>} ></Route>
        <Route path="/support" element={<Support/>} ></Route>
        <Route path="/vote" element={<Vote/>} ></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
