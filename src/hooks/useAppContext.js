import { useContext } from "react";
import AppContext from "../components/AppContext";

export default function useAppContext() {
    const [context, setContext] = useContext(AppContext);
    return [context, obj => setContext({ ...context, ...obj })];
}