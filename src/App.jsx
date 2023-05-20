import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sobremi" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
