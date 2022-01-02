
import { Navigate, useRoutes } from "react-router-dom";

import Register_login from "./components/login-register";
import Home from './components/home';
import Verify from './components/login-register/activated';
import routes from "./config/routes";

const App: React.FC = (): JSX.Element => {

  const mainRoute = {
    path: '/',
    element: <Register_login />,
    /* children: [
      { patch: 'notes', element: <Navigate to='/notes' /> }
    ] */
  }

  const activatedRoute = {
    path: 'confirmMail/:token',
    element: <Verify/>
  }

  const homeRoute = {
    path: 'notes',
    element: <Home/>,
    
  }

  const routing = useRoutes([mainRoute, activatedRoute, homeRoute])
  return <>{routing}</>;
}

export default App;
