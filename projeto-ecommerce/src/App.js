import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./navbar/pageNavBar/NavBar";
import GLobalStyle from "./styles/global"
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
      </Switch>
      <GLobalStyle/>
    </BrowserRouter>
  );
}

export default App;
