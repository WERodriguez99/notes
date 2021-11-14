
import { Navigate, useRoutes } from "react-router-dom";

import Register_login from "./components/login-register";
import Home from './components/home';
import routes from "./config/routes";

const App: React.FC = (): JSX.Element => {

  const mainRoute = {
    path: '/',
    element: <Home />,
  }

/*   const homeRoute = {
    path: '/notes',
    elemnt: <Home/>
  } */

  const routing = useRoutes([mainRoute])
  return <>{routing}</>;
}

export default App;
