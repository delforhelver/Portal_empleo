import React, { useState, useEffect }  from 'react'

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);


  
  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch("http://localhost:8080/perfil");
      const data = await response.json();
      setProfiles(data);
    };
  
    fetchProfiles();
  
    const intervalId = setInterval(fetchProfiles, 10000); // actualiza los datos cada 10 segundos
  
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="overflow-x-auto my-10 mx-auto w-5/6">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Tecnologías</th>
        <th>Ciudad</th>
        <th>Telefono</th>
        <th>Linked In</th>
      </tr>
    </thead>
    <tbody>
           {profiles.map((profile, index) => (
              <tr key={index}>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{profile.nombre} {profile.apellido}</div>
              <div className="text-sm opacity-50">{profile.pais}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>{profile.ciudad}</td>
        <td>{profile.telefono}</td>
        <td>{profile.li_link}</td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default Profiles