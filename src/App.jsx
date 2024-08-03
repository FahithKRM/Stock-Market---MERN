import Navbar from "./components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Coin from "./pages/Coin/Coin"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/coin/:coinId" element={<Coin />} /> {/* Coin page */}
      </Routes>
    </div>
  )
}

export default App
