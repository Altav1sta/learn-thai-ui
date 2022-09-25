import { createContext, useState } from "react"

const AppContext = createContext();
const DefaultAppContext = {
    isAuthenticated: false
};

export function AppContextProvider({ children }) {
    const context = useState(DefaultAppContext);
    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;