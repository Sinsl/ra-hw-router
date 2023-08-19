import { useState, useContext, useEffect } from "react";
import './auth.css';
import { Header } from "./Header";
import { PingContext } from "../App";
import { funcFetch } from "./funcFetch";
import { createContext } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export const AuthContext = createContext({auth: false});

export const StartPage = ({ content }) => {
  const [auth, setAuth] = useState(false);
  const isPing = useContext(PingContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setAuth(true);
      }
      if (location.pathname.search(/task3\/?$/) !== -1 && auth) {
        navigate('news');
      }

  }, [auth, location.pathname, navigate])
  
  const logoutHandler = async () => {
      localStorage.removeItem('token');
      setAuth(false);
      navigate('/ra-hw-router/task3');
  }

  const loginHandler = async (data) => {

    const res = await funcFetch('/login', {
      method: 'post',
      body: JSON.stringify({username: data.username, password: data.pass})
    })
    if (res.ok) {
      const result = await res.json();
      localStorage.setItem('token', JSON.stringify(result.token));
      setAuth(result.auth);      
      location.pathname.search(/task3\/?$/) > -1 ? navigate('news') : navigate('/ra-hw-router/task3');
    }
  }
  
  return (
    <AuthContext.Provider value={{auth}}>
      {!isPing && <div className="server">Сервер на Render запускается. Минуточку...</div>}
      {isPing && 
        <div className="container task3">
          <Header onLogin={loginHandler} onLogout={logoutHandler}/>
          {content}        
        </div>
      }
    </AuthContext.Provider> 
  )
}
StartPage.propTypes = {
  content: PropTypes.element
}