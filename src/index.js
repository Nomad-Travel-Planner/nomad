import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Explore from "./Explore";
import Profile from "./Profile";
import LoginButton from "./Login";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENTID}
    authorizationParams={{
      redirect_uri: process.env.REACT_APP_AUTH_REDIRECTURI
    }}
  >
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/login" element={<LoginButton />} />
      </Routes>
    </Router>
  </Auth0Provider>
  </React.StrictMode>
);

