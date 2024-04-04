import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuemSomos } from "./components/QuemSomos";
import { Ambientes } from "./components/Ambientes";
import { Contato } from "./components/Contato";

function AppHome() {
  return (
    <div className="App">
        <QuemSomos />
        <Ambientes />
        <Contato />
    </div>
  );
}

export default AppHome;