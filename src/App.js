import "chart.js/auto";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "assets/theme";
import themeDark from "assets/theme-dark";
import { useMaterialUIController } from "context";
import { useEffect } from "react";
import routes from "routes";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Sidenav from "elements/Sidenav";
import useAppContext from "hooks/useAppContext";
import SignIn from "layouts/authentication/sign-in";

export default function App() {
  const navigate = useNavigate();
  const [appContext] = useAppContext();
  const [controller] = useMaterialUIController();
  const {
    direction,
    layout,
    darkMode,
  } = controller;

  const { pathname } = useLocation();

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && <Sidenav />}
      <Routes>
        {appContext.userId
          ?
          <>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
          :
          <>
            <Route exact path="/authentication/signin" element={<SignIn />} />
            <Route path="*" element={<Navigate to="/authentication/signin" />} />
          </>
        }
      </Routes>
    </ThemeProvider>
  );
}