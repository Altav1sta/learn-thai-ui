import { useContext } from "react";
import AppContext from "../components/AppContext";

export default function useAppContext() {
    const [context, setContext] = useContext(AppContext);
    return { 
        value: context, 
        setValue: obj => setContext({...context, ...obj})
    };
}