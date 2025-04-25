import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Skills_1 } from "./components/Skills_1";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Aboutme } from "./components/Aboutme";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Aboutme />
      <Skills />
      <Skills_1 />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
