import React, {useState} from "react";
import axios from "axios";
import Select from "react-select";
import "./css/SaveProfile.css";

function SaveProfile() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    pais: "",
    ciudad: "",
    li_link: "",
  });

  const options = [
    {value: "opcion1", label: "Opción 1"},
    {value: "opcion2", label: "Opción 2"},
    {value: "opcion3", label: "Opción 3"},
    {value: "opcion4", label: "Opción 4"},
    {value: "opcion1", label: "Opción 1"},
    {value: "opcion2", label: "Opción 2"},
    {value: "opcion3", label: "Opción 3"},
    {value: "opcion4", label: "Opción 4"}
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: '#2a303c',

    })
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange = (selected) => {
    setSelectedOptions(selected);
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
    <div className="div-global flex place-content-center">
      <div className="w-2/3">
        <form
          className="bg-base-300 p-6 rounded-lg shadow-md my-5"
          onSubmit={handleSubmit}
        >
          <h2 className="text-lg font-medium mb-4 text-center">
            Datos Personales
          </h2>

          <div className="w-full mr-4 mb-4">
            <label className="block label-text mb-2">Foto</label>
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
              <label className="block label-text mb-2">Nombre</label>
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
              <label className="block label-text mb-2">Apellido</label>
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
              <label className="block label-text mb-2">País</label>
              <select
                className="select p-2 w-full"
                type="text"
                placeholder="país"
                name="pais"
                value={formData.pais}
                onChange={handleInputChange}
              >
                <option>Argentina</option>
                <option>Peru</option>
                <option>Chile</option>
                <option>Colombia</option>
              </select>
            </div>
            <div className="w-1/2 mb-4">
              <label className="block label-text mb-2">Ciudad</label>
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
              <label className="block label-text mb-2">Teléfono</label>
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
              <label className="block label-text mb-2">Linked In</label>
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
          <div>
          <label className="block label-text mb-2">Tecnologias</label>
            <Select id="multi-tech"
              styles={customStyles}
              options={options}
              isMulti
              value={selectedOptions}
              onChange={handleChange}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Modificar Datos</button>
          </div>
        </form>
        <div className="div-exp bg-base-300 p-6 rounded-lg shadow-md mb-5">
        <h2 className="text-lg font-medium mb-4 text-center">
            Experiencia Laboral
          </h2>
      </div>
      <div className="div-aca bg-base-300 p-6 rounded-lg shadow-md mb-5">
        <h2 className="text-lg font-medium mb-4 text-center">
            Formación Academica
          </h2>
      </div>
      </div>
    </div>
  );
}

export default SaveProfile;
