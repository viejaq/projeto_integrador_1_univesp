import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TrabalheConosco } from "../components/TrabalheConosco";
import { NavBarTrabalheConosco } from "../components/NavBarTrabalheConosco";


function AppTrabalheConosco() {
  return (
    <div className="App">
      <NavBarTrabalheConosco/>
      <TrabalheConosco />
    </div>
  );
}

export default AppTrabalheConosco;