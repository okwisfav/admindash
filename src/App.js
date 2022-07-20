import { BrowserRouter, Route, Routes, Links } from "react-router-dom";
import './App.css';
import Navbar from './component/Navbar';
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
       <header>Header</header>
      <Navbar />
      <div className='main'>
        <BrowserRouter>
         <Routes>
           <Route path = "/" element = {<Home />}></Route>
             <Route path = "/About" element = {<About />}></Route>
         </Routes>
         </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
