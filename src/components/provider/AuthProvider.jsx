import React, { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);


  const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const signIn = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }


  const updateUser = (updatedData) =>{
    return updateProfile(auth.currentUser,updatedData)
  }

  const resetPassword = (email) =>{
    return sendPasswordResetEmail(auth,email);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
         setUser(currentUser);
         setLoading(false);
    })


    return () => {
        unsubscribe();
    } 


  },[])


  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
    resetPassword,
  }

 return <AuthContext value={authData}>{children}</AuthContext>

};

export default AuthProvider;