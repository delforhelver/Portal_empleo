import React, { useState } from 'react';
import axios from "axios";
import './SaveProfile.css';

function SaveProfile() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    pais: "",
    ciudad: "",
    li_link: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .post("http://localhost:8080/perfil", formData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
    console.log(formData);
  };

  return (
    <form className="bg-base-200 p-6 rounded-lg shadow-md w-1/3 mx-auto my-5" onSubmit={handleSubmit}>
      <h2 className="text-lg font-medium mb-4 text-center">Completar Perfil</h2>
    
      <div className="w-full mr-4 mb-4">
          <label className="block label-text mb-2">
            Foto
          </label>
          <input
            className="file-input w-full"
            type="file"
            name="foto"
            value={formData.foto}
            onChange={handleInputChange}
          />
        </div>
      
      <div className="flex">
        <div className="w-1/2 mr-4 mb-4">
          <label className="block label-text mb-2">
            Nombre
          </label>
          <input
            className="input input-bordered p-2 w-full"
            type="text"
            placeholder="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-1/2 mb-4">
          <label className="block label-text mb-2">
            Apellido
          </label>
          <input
            className="input input-bordered p-2 w-full"
            type="text"
            placeholder="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex">
      <div className="w-1/2 mr-4 mb-4">
          <label className="block label-text mb-2">
            País
          </label>
          <select className="select p-2 w-full"
            type="text"
            placeholder="país"
            name="pais"
            value={formData.pais}
            onChange={handleInputChange}>
          <option>Argentina</option>
          <option>Peru</option>
          <option>Chile</option>
          <option>Colombia</option>
          </select>
        </div>
        <div className="w-1/2 mb-4">
          <label className="block label-text mb-2">
            Ciudad
          </label>
          <input
            className="input input-bordered p-2 w-full"
            type="text"
            placeholder="ciudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex">
      <div className="w-1/2 mr-4 mb-4">
          <label className="block label-text mb-2">
            Teléfono
          </label>
          <input
            className="input input-bordered p-2 w-full"
            type="text"
            placeholder="teléfono"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-1/2 mb-4">
          <label className="block label-text mb-2">
            Linked In
          </label>
          <input
            className="input input-bordered p-2 w-full"
            type="text"
            placeholder="linked in"
            name="li_link"
            value={formData.li_link}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-control mt-6">
      <button className="btn btn-primary">Enviar</button>
      </div>
    </form>
  );
}

export default SaveProfile