import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    // Google Sign In
    const googleSinIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // Github Sign in
    const githubSignIN = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // Facebook Sign in
    const facebookSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider);
    }

    // user registration 
    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user sign in 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user sign out
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // user Email Verification
    const emailVerification = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    // user profile update
    const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    // manage user 
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])


    const AuthIno = {
        user, 
        loading, 
        userRegister, 
        signIn, 
        googleSinIn, 
        logOut, 
        githubSignIN,
        facebookSignIn,
        emailVerification,
        setLoading,
        profileUpdate,
    }

    return (
        <AuthContext.Provider value={AuthIno}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;