import { createContext, useContext, useState } from "react";

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <RegistrationContext.Provider value={{ isRegistered, setIsRegistered }}>
      {children} {/* Render children components here */}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);
