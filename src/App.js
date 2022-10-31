import { CssBaseline, Icon, ThemeProvider } from "@mui/material";
import brandDark from "assets/images/logo-ct-dark.png";
import brandWhite from "assets/images/logo-ct.png";
import theme from "assets/theme";
import themeDark from "assets/theme-dark";
import MDBox from "components/MDBox";
import { setOpenConfigurator } from "context";
import { setMiniSidenav } from "context";
import { useMaterialUIController } from "context";
import Configurator from "examples/Configurator";
import Sidenav from "examples/Sidenav";
import { useState } from "react";
import routes from "routes";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();

  const {
    miniSidenav,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;

  const [mouseEnteredSidenav, setMouseEnteredSidenav] = useState(false);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnterSidenav = () => {
    if (miniSidenav && !mouseEnteredSidenav) {
      setMiniSidenav(dispatch, false);
      setMouseEnteredSidenav(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeaveSidenav = () => {
    if (mouseEnteredSidenav) {
      setMiniSidenav(dispatch, true);
      setMouseEnteredSidenav(false);
    }
  };

  // Change the openConfigurator state
  const onConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Material Dashboard 2"
            routes={routes}
            onMouseEnter={handleOnMouseEnterSidenav}
            onMouseLeave={handleOnMouseLeaveSidenav}
          />
          <Configurator />
          <MDBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="3.25rem"
            height="3.25rem"
            bgColor="white"
            shadow="sm"
            borderRadius="50%"
            position="fixed"
            right="2rem"
            bottom="2rem"
            zIndex={99}
            color="dark"
            sx={{ cursor: "pointer" }}
            onClick={onConfiguratorOpen}
          >
            <Icon fontSize="small" color="inherit">
              settings
            </Icon>
          </MDBox>
        </>
      )}
    </ThemeProvider>
  );
}