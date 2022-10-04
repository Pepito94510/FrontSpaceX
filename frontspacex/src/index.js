import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router';

// import Button from './componant/Button';
import Launches from './pages/launches';

import './index.css';

const App = () => {

    return <Router>
      <Routes>
          <Route path="/launches/" element={<Launches/>}></Route>
      </Routes>
    </Router>
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

