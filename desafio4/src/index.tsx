import ReactDOM from 'react-dom';
import Routes from './Routes';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
