import { createContext, useContext } from "react";

const AppContext = createContext();

export default function useAppContext() {
    const [context, setContext] = useContext(AppContext);
    return { 
        value, 
        setValue: obj => setContext({...context, ...obj})
    };
}