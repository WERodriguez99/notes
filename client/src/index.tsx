
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import InProgress from './utils/inProgress';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';
import dotenv from 'dotenv';

import store from './redux/store';

dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001/'

const app = () => ReactDOM.render(
  
  //<React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>,
  //</React.StrictMode>,
  document.getElementById('root')
  )
  
  
  const progress = () => ReactDOM.render(<InProgress text='Mobile in progress'/>, document.getElementById('root')) 
  
  /* window.addEventListener('resize', (event) => {
    window.screen.width > 1000 ? app() : progress()
  }) 
  
  window.screen.width > 1000 ? app() : progress() */
  app()

  reportWebVitals(); 

  