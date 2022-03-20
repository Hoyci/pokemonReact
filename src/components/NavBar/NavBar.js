import { useState } from "react";
import { 
    Nav, 
    NavbarContainer,
    NavLogo,
    NavIcon,
    Menu,
    MenuIcon,
    MenuItem,
    MenuLink
} from './NavBar.styles'
import { BiMenu, BiX } from "react-icons/bi"
import logo from '../../assets/pokeapi.png'


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
        <Nav>
            <NavbarContainer>
                <NavLogo to="pokemonReact/">
                    <NavIcon src={logo}/>
                </NavLogo>
                <MenuIcon onClick={handleClick}>
                    {click ? <BiX/> : <BiMenu/>}
                </MenuIcon>

                <Menu onClick={handleClick} click={click}>
                    <MenuItem>
                        <MenuLink onClick={handleClick} to="/pokemonReact/">Home</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink onClick={handleClick} to="/pokedex/1">Pokédex</MenuLink>
                    </MenuItem>
                </Menu>

            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
