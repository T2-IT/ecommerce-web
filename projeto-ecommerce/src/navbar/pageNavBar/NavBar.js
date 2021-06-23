import {Nav,LoginButton,LogoT2,MenuButton,HomeButton} from './Styles';
import {Link} from 'react-router-dom';
import logo from '../../../src/logoT2.svg';
import menuIcon from '../../../src/menuIcon.svg'

function NavBar() {
 return (
    <Nav>
       <Link to={"/login"}>
          <LoginButton title="login">Login</LoginButton>
       </Link>
       <Link to="/">
          <HomeButton title="Home">
          <LogoT2 src={logo} alt="logoT2"/>
          </HomeButton>
       </Link>
       <MenuButton><img src={menuIcon} alt="menu"/></MenuButton>
    </Nav>
 );
 }

 export default NavBar;