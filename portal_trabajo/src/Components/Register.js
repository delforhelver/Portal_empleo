import React from 'react'
import './Register.css';

const Register = () => {
  return (
    <div className='div-global flex h-screen bg-base-200 my-5 justify-center items-center'>
    <div className="card flex-shrink-0 w-1/4 shadow-2xl bg-base-100 mx-auto">
      <div className="card-body">
      <h1 className='mx-auto' style={{ fontSize: 30 }}>Registrarse</h1>
        <div className="form-control">
          <label className="label place-content-start mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
           </svg>

            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered input-accent w-full max-w-xs text-center" />
        </div>
        <div className="form-control">
          <label className="label place-content-start mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
         <span className="label-text">Usuario</span>
          </label>
          <input type="text" placeholder="usuario" className="input input-bordered input-accent w-full max-w-xs text-center" />
        </div>
        <div className="form-control">
          <label className="label place-content-start mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>

            <span className="label-text">Contraseña</span>
          </label>
          <input type="text" placeholder="contraseña" className="input input-bordered input-accent w-full max-w-xs text-center" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registrarse</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register