import React, {useState} from "react";
import axios from "axios";
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
    <div className="div-global flex">
      <div className="flex-1 min-w-0 my-5 ml-10 w-1/2">
        <a href="#" class="group relative block bg-black">
          <img
            alt="Developer"
            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div class="relative p-8">
            <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
              Developer
            </p>

            <p class="text-2xl font-bold text-white">Tony Wayne</p>

            <div class="mt-64">
              <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p class="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="flex-2">
        <form
          className="bg-base-200 p-6 rounded-lg shadow-md mx-auto my-5 mr-10"
          onSubmit={handleSubmit}
        >
          <h2 className="text-lg font-medium mb-4 text-center">
            Completar Perfil
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
          <div className="form-control mt-6">
            <button className="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SaveProfile;
