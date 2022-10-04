import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router';

// import Button from './componant/Button';
import Launches from './pages/launches';
import Home from './pages/home';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const App = () => {

    return <Router>
      <Routes>
        <Route path="/capsules/" element={<api/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/launches/" element={<Launches/>}></Route>
      </Routes>
    </Router>
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
