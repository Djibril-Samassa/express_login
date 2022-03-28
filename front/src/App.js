import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import './App.css';
import {BrowserRouter, Switch, Link, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="navbar">
          <Link className="link" to="/">Acceuil</Link>
          <Link className="link" to="/signup">S'inscrire</Link>
          <Link className="link" to="login">Se Connecter</Link>
          <Link className="link" to="monprofil">Profil</Link>
        </nav>
      </header>

      <Switch>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/monprofil" component={Admin}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
