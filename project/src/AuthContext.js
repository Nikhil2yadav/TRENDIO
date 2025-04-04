import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Error parsing stored user data', error);
      return null;
    }
  });

  const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setAuthState(user);
  };

  const logout = () => {
    console.log("Logging out...")
    localStorage.removeItem('user');
    localStorage.removeItem("AdminId");
    localStorage.removeItem("AdminName");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    setAuthState(null);
    console.log("localstorage after Logout" ,localStorage.getItem('user'))
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
