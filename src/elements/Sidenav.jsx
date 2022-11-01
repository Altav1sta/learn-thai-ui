import brandDark from "assets/images/logo-ct-dark.png";
import brandWhite from "assets/images/logo-ct.png";
import { setMiniSidenav, useMaterialUIController } from "context";
import GenericSidenav from "examples/Sidenav";
import { useState } from "react";
import routes from "routes";

export default function Sidenav() {
    const [controller, dispatch] = useMaterialUIController();
    const {
        miniSidenav,
        sidenavColor,
        transparentSidenav,
        whiteSidenav,
        darkMode,
    } = controller;

    const [mouseEnteredSidenav, setMouseEnteredSidenav] = useState(false);

    // Open sidenav when mouse enters on mini sidenav
    const onMouseEnterSidenav = () => {
        if (miniSidenav && !mouseEnteredSidenav) {
            setMiniSidenav(dispatch, false);
            setMouseEnteredSidenav(true);
        }
    };

    // Close sidenav when mouse leaves mini sidenav
    const onMouseLeaveSidenav = () => {
        if (mouseEnteredSidenav) {
            setMiniSidenav(dispatch, true);
            setMouseEnteredSidenav(false);
        }
    };

    return (
        <GenericSidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Learn Thai"
            routes={routes}
            onMouseEnter={onMouseEnterSidenav}
            onMouseLeave={onMouseLeaveSidenav}
        />
    );
}