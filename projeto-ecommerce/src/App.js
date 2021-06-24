import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/navbar/NavBar";
import Produto from "./pages/Produto/Produto";
import GLobalStyle from "./styles/global";
import Login from "./pages/Login/Login";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Cadastro from "./pages/Cadastro/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" exact component={Login} />
        <Route path="/produtos" component={Produto} />
        <Route path="/cadastro" component={Cadastro} />
      </Switch>
      <Footer />
      <GLobalStyle />
    </BrowserRouter>
  );
}

export default App;
