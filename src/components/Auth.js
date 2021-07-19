import React, { useEffect, useState } from "react";
import firebaseConfig from "../config.js";
import CircularProgress from '@material-ui/core/CircularProgress';
import './Auth.css'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);
  
  if (loading) {
    return <CircularProgress color="secondary" className="middle" />
  }
  

  return (
    <AuthContext.Provider value={{ currentUser }} className="circle">
      {children}
    </AuthContext.Provider>
  );

};