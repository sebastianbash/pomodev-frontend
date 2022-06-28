import styled from "styled-components";

export const Wrapper = styled.div`
    height: 80px;
    width: 100%;
    position: relative;
`;
export const HeaderContainer = styled.header`
    height: 100%;
    width: 100%;
`;
export const Navbar = styled.nav`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const NavbarItems = styled.ul`
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
`;
export const NavbarItem = styled.li`
    display: block;
    
    a {
        text-decoration: none;
    }
`;

// FIRST MOBILE NAVBAR
export const MobileMenu = styled.div`
    background-color: black;
    position: absolute;
    top: 80px;
    left: 0;
    height: calc(100vh - 80px);
    width: 100%;
    opacity: 0.5;
    z-index: 999;
`;

