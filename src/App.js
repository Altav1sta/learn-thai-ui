import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useAppContext from "./hooks/useAppContext";
import ErrorPage from "./components/ErrorPage";
import HomeScreen from './components/HomeScreen';
import SignInSide from './components/SignInSide';
import SignUp from './components/SignUp';

const getRouter = context => createBrowserRouter([
  {
    path: "/",
    element: context.IsAuthenticated ? <HomeScreen /> : <SignInSide />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <HomeScreen />
  },
  {
    path: "/signin",
    element: <SignInSide />
  },
  {
    path: "/signup",
    element: <SignUp />
  }
]);

export default function App() {
  const context = useAppContext();
  return (
    <RouterProvider router={getRouter(context.value)}>
    </RouterProvider>
  );
}