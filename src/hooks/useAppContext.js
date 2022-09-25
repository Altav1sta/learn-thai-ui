import { useContext } from "react";
import AppContext from "../components/AppContext";

export default function useAppContext() {
    const x = useContext(AppContext);
    console.log(x);
    const [context, setContext] = x;
    return { 
        value: context, 
        setValue: obj => setContext({...context, ...obj})
    };
}