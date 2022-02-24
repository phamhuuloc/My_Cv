import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skill/Skill";
import Service from "./components/Service/Service";
import Modal from "./components/Modal/Modal";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
