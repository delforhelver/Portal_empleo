import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <UserContext.Provider value={{ isLogged, setIsLogged }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;