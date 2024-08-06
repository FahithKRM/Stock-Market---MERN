import Navbar from '../src/components/Navbar/Navbar'

import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
// import Coin from "./pages/Coin/Coin"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/coin/:coinId" element={<Coin />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
