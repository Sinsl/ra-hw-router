import { useState, useContext, useEffect } from "react";
import { AuthContext } from "./StartPage";
import PropTypes from 'prop-types';
import { funcFetch } from './funcFetch';


export const Header = ({onLogin, onLogout}) => {
  const { auth } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    (async() => {
      if (auth) {
        const token = JSON.parse(localStorage.getItem('token'));
        const res = await funcFetch('/private/me',{
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const result = await res.json();
          setUser(result);
        }
      }
    })()
  }, [auth])


  const nameHandlet = (e) => {
    setUsername(e.target.value);
  }

  const passHandler = (e) => {
    setPass(e.target.value);
  }

  const loginHandler = (e) => {
    e.preventDefault();
    onLogin({username, pass});
  }
  const logoutHandler = (e) => {
    e.preventDefault();
    onLogout();
  }

  return (
    <div className="header">
      <div className="logo">Neto Social</div>
      {!auth && 
        <form>
          <input type="text" name="username" value={username} onChange={nameHandlet}/>
          <input type="password" name="password" value={pass} onChange={passHandler}/>
          <button className="btn-auth btn-auth-green" onClick={loginHandler}>Login</button>
        </form>
      }
      {auth &&
        <div className="hello-box">
          <div className="hello">Hello, <span>{user.name}</span></div>
          <div className="avatar">
            <img src={user.avatar} alt="avatar" />
          </div>
          <button className="btn-auth btn-auth-red" onClick={logoutHandler}>Logout</button>
        </div>        
      }
    </div>
  )
}
Header.propTypes = {
  onLogin: PropTypes.func,
  onLogout: PropTypes.func
}