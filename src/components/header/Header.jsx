import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX, HiOutlineMoon, HiSun } from "react-icons/hi";
import {
  Wrapper,
  HeaderContainer,
  Navbar,
  NavbarItems,
  NavbarItem,
  MobileMenu
} from "./Header-styled";
import { lightTheme, darkTheme } from "../../styles/Theme";

const Header = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => {theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)};
  return (
    <Wrapper>
      <HeaderContainer>
        <Navbar>
          <NavbarItems>
            <NavbarItem>
              <button onClick={toggleMenu}>{isOpen ? <HiX /> : <HiMenu />}</button>
            </NavbarItem>
            <NavbarItem>
              <Link to="/">PomoDev</Link>
            </NavbarItem>
          </NavbarItems>
          {isOpen ? <MobileMenu>
            <button onClick={toggleTheme}>{theme === lightTheme ? <HiOutlineMoon /> : <HiSun />}</button>
          </MobileMenu> : null}
        </Navbar>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
