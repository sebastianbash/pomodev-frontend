import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/Theme";
import { useLocalStorage } from "../../utils/useLocalStorage";
import { Wrapper } from "./Layout-styled";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
  const [theme, setTheme] = useLocalStorage("theme", lightTheme);

  useEffect(() => {
    window.localStorage.setItem("theme", theme.name);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper className="Pomodoro App by Sebastian Silva">
        <Header theme={theme} setTheme={setTheme} />
        <Outlet />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
