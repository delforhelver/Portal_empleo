import React, {useState, useContext} from "react";
import axios from "axios";
import "./css/Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [datos, setDatos] = useState({
    usuario: "",
    contrasena: "",
    email: "",
    tipo_usuario: "",
  });

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    let newDatos = {...datos, [name]: value};
    setDatos(newDatos);
  };


  const navigate = useNavigate();
  const [error, setError] = useState(null);
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      console.log("No pasa");
    } else {
      try {
        let res = await axios.post("http://localhost:8080/login", datos);
        console.log(res.data);
        localStorage.setItem('usuario', JSON.stringify(res.data))
        onLogin();
        console.log(onLogin);
        navigate('/welcome');
      } catch (error) {
        setError("Usuario o contraseña incorrectos. Intente nuevamente por favor.");
      }
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
     {error && <div className="alert alert-error shadow-lg mensaje_error">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      </div> }
      <div className="hero-content flex-col lg:flex-row-reverse">
        <form onSubmit={handleSubmit}>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  onChange={handleInputChange}
                  value={datos.email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="contrasena"
                  className="input input-bordered"
                  onChange={handleInputChange}
                  value={datos.contrasena}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    ¿Ha olvidado la contraseña?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
