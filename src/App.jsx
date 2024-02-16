import { GiRaiseZombie } from "react-icons/gi";
import { FaBone } from "react-icons/fa";
import './styles/App.sass'
import { Route, Routes } from "react-router-dom";
import Factorial from "./components/Factorial";
import Fibonacci from "./components/Fibonacci";

function App() {

  return (
    <>
      <div className="App">
        <div className="title-container">
          <div className="zombie">
          </div>
          <span className="title-app">Math Zomb</span>
          <div className="zombie" id="bone">
            <GiRaiseZombie />
            <FaBone />
          </div>
          <span className="title-app">e</span>
          </div>

          <h2>Menu</h2>
          <div className="menu-container">
            <a href="/factorial">Factorial</a>
            <a href="/fibonacci">Fibonacci</a>
          </div>
          <Routes>
            <Route path="/factorial" element={<Factorial />} />
            <Route path="/fibonacci" element={<Fibonacci />} />
          </Routes>
      </div>
    </>
  )
}

export default App
