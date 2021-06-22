import {Container, LoginButton, LogoT2} from './Styles';
import {Link} from 'react-router-dom';
import logo from '../../../src/logoT2.svg';

function NavBar() {
 return (
    <Container>
       <div>
       <Link to={"/login"}>
          <LoginButton title="login">Login</LoginButton>
       </Link>
       </div>
       <div>
       <Link to="/">
          <LogoT2 src={logo} alt="logoT2"/>
       </Link>
       </div>
    </Container>
 );
 }

 export default NavBar;