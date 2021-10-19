
import { Route } from 'react-router-dom';
import './App.css';

import landing from './components/login_singup';
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <Route
        exact path='/' 
        component={landing}
      />
      <Route
        exact path='/notes' 
        component={Home}
      />
    </div>
  );
}

export default App;
