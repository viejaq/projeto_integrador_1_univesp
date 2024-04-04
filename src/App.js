import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './AppRouter';
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />

      <AppRouter />

      <Footer />
    </div>
  );
}

export default App;