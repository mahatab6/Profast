import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser =>{
            setUser(currentuser);
            console.log(currentuser)
            setLoading(false);
        });
        return (()=>{
            unsubscribe();
        })
    })

    const userProfile = (name, image) => {
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL:image
        })
    }

    const authInfo  = {
        createUser,
        signInUser,
        LogOut,
        user,
        loading,
        userProfile

    }


    return (
      <AuthContext value={authInfo}>
            {children}
      </AuthContext>
    );
};

export default AuthProvider;