
import IRoute from '../interfaces/route';

import Login_Register from '../components/login-register';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Login-Register',
        component: Login_Register,
        exact: true,
    }
];

export default routes;