
import { Route } from 'react-router-dom';
import './App.css';

import landing from './components/login_singup';

function App() {
  return (
    <div className="App">
      <Route
        exact path='/' 
        component={landing}
      />
    </div>
  );
}

export default App;
