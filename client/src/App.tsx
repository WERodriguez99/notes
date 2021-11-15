
import { Navigate, useRoutes } from "react-router-dom";

import Register_login from "./components/login-register";
import Home from './components/home';
import routes from "./config/routes";

const App: React.FC = (): JSX.Element => {

  const mainRoute = {
    path: '/',
    element: <Register_login />,
    /* children: [
      { patch: 'notes', element: <Navigate to='/notes' /> }
    ] */
  }

  const homeRoute = {
    path: 'notes',
    element: <Home/>,
    
  }

  const routing = useRoutes([mainRoute, homeRoute])
  return <>{routing}</>;
}

export default App;
