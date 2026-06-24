import React, { createContext, useState, useEffect, useContext } from 'react';

const AdContext = createContext();

export const useAdContext = () => {
  return useContext(AdContext);
};

export const AdProvider = ({ children }) => {
  const [isFamilyMode, setIsFamilyMode] = useState(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem('familyMode');
    if (storedPreference === 'true') {
      setIsFamilyMode(true);
    }
  }, []);

  const toggleFamilyMode = () => {
    setIsFamilyMode((prev) => {
      const newValue = !prev;
      localStorage.setItem('familyMode', newValue.toString());
      return newValue;
    });
  };

  return (
    <AdContext.Provider value={{ isFamilyMode, toggleFamilyMode }}>
      {children}
    </AdContext.Provider>
  );
};
