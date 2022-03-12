import styled from "styled-components"
import { Link } from "react-router-dom"
import { Container } from '../../GlobalStyles'


export const Nav = styled.nav`
font-size: 18px;
position: sticky;
top: 0;
z-index: 999;
height: 55px;
background-color: #EF5350;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 40px;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-around;
align-items: center;
height: 80px;
${Container};
@media (max-width: 1000px) {
    justify-content: space-between;
}
`;

export const NavLogo = styled(Link)`
cursor: pointer;
display: flex;
transition: all .5s ease;
&:hover {
    color: #3761A8;
    transform: translateY(-0.3rem);
}
`;

export const NavIcon = styled.img`
width: 100px;
height: 40px;
margin-right: .8rem;
transition: all .5s ease;
`;

export const MenuIcon = styled.div`
display: none;

@media (max-width: 1000px) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size:4rem;
    cursor: pointer;
}
`;

export const Menu = styled.ul`
display: flex;
align-items: center;
text-align: center;

@media only screen and (max-width:1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 50.45px;
    left: ${({click}) => click ? '0' : '-100%'};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all .5s ease;
}
`;


export const MenuItem = styled.li`
list-style: none;
height: 80px;

@media only screen and (max-width: 1000px) {
    width: 100%;
    &:hover {
        border: none;
    }
}
`;

export const MenuLink = styled(Link)`
text-decoration: none;
font-size: 1.7rem;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
height: 100%;
transition: all .5s ease;

&:hover {
    color: #3761A8;
    transform: translateY(-0.3rem);
}

@media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all .5s ease;
}
`;

