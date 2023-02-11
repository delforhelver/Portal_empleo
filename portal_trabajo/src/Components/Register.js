import React,{ useState } from 'react'
import axios from "axios";
import './css/Register.css';
import { useNavigate } from "react-router-dom";

function Register ({ onLogin }) {
  const [formData, setFormData] = useState({
    usuario: "",
    contrasena: "",
    email: "",
    tipo_usuario: "1"
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .post("http://localhost:8080/usuario", formData)
    .then((res) => {
      console.log(res.data);
      let response = axios.post("http://localhost:8080/login", formData);
        console.log(response.data);
        localStorage.setItem('usuario', JSON.stringify(response.data))
        onLogin();
        console.log(onLogin);
      navigate('/welcome');
    })
    .catch((err) => {
      console.error(err);
    });
    console.log(formData);
  };


  return (
    <div className='div-global flex h-screen bg-base-200 my-5 justify-center items-center'>
      <div className='w-1/2 p-4'>
      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png" alt=""></img>
    </div>
    <div className="card flex-shrink-0 w-1/4 shadow-2xl bg-base-100 mx-auto">
    <form className="" onSubmit={handleSubmit}>
      <div className="card-body">
      <h1 className='mx-auto' style={{ fontSize: 30 }}>Registrarse</h1>
        <div className="form-control">
          <label className="label place-content-start mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
           </svg>
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered input-accent w-full max-w-xs text-center" value={formData.email} onChange={handleInputChange} name="email"/>
        </div>   
        <div className="form-control">
          <label className="label place-content-start mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
         <span className="label-text">Usuario</span>
          </label>
          <input type="text" placeholder="usuario" className="input input-bordered input-accent w-full max-w-xs text-center" value={formData.usuario} onChange={handleInputChange} name="usuario"/>
        </div>
        <div className="form-control">
          <label className="label place-content-start mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>

            <span className="label-text">Contraseña</span>
          </label>
          <input type="text" placeholder="contraseña" className="input input-bordered input-accent w-full max-w-xs text-center" value={formData.contrasena} onChange={handleInputChange} name="contrasena"/>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registrarse</button>
        </div>
      </div>
      </form>
    </div>
    </div>
    
  )
}

export default Register