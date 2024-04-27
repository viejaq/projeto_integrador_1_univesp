import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './AppRouter';

import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">


      <AppRouter />

      <Footer />
    </div>
  );
}

export default App;