import React from "react";
import logo from "../assets/img/logo.png";
import userImg from "../assets/img/usuario.png";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const NavBar = (props) => {
  const {isLogged, handleLogout} = props;
  console.log(isLogged);
  const navigate = useNavigate();

  const logout = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
        {isLogged && (
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/profiles">Perfiles</Link>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          )}
        </div>
        <div className="navbar-center w-8">
          <img src={logo} alt=""></img>
        </div>
        {isLogged && (
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 rounded-full">
                  <img src={userImg} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <Link to="/saveprofile">
                <li>
                  <a className="justify-between">
                    Profile 
                  </a>
                </li>
                </Link>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                <a onClick={logout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
        {!isLogged && (
            <div className="navbar-end">
                <Link to="/login"><button className="btn btn-sm btn-ghost">Ingresar</button></Link>
                <Link to="/register"><button className="btn btn-sm btn-primary">Registrarse</button></Link>
            </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
