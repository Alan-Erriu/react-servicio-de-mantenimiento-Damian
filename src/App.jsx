import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Contact from "./components/Contac";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import ScrollToTop from "./components/helper/ScrollTop";

function App() {
  return (
    <div>
      <Nav />
        <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sobremi" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
