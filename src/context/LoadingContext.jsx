import React, { createContext, useState, useContext } from 'react';

// Create the context
const LoadingContext = createContext();

// Context provider
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Optional custom hook for easy use
export const useLoading = () => useContext(LoadingContext);
