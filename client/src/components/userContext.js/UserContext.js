import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import app from 'src/firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    // create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // Login User
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Login with Google
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Log Out 
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            console.log(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, createUser, loginUser, loginWithGoogle, logOut, loading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext;