
import { Navigate, useRoutes } from "react-router-dom";

import Register_login from "./components/login-register";
import routes from "./config/routes";

const App: React.FC = (): JSX.Element => {

  const mainRoute = {
    path: '/',
    element: <Register_login />,
  }

  const routing = useRoutes([mainRoute])
  return <>{routing}</>;
}

export default App;
