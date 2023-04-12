import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Contact from "./components/Contac";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Articles />
      <Contact />
    <Footer/>
    </div>
  );
}

export default App;
