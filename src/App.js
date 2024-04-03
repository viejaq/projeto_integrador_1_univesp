import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { QuemSomos } from "./components/QuemSomos";
import { Ambientes } from "./components/Ambientes";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { TrabalheConosco } from "./components/TrabalheConosco";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <TrabalheConosco/>
      <QuemSomos />
      <Ambientes />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;