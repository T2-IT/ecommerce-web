import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/navbar/NavBar";
import Conta from "./pages/Conta/Conta";
import GLobalStyle from "./styles/global"
import Login from "./pages/Login/Login";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/conta" component={Conta}/>
      </Switch>
      <GLobalStyle/>
    </BrowserRouter>
  );
}

export default App;
