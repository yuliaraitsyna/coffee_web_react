// AuthContext.js
import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD16XjF3aln0rNL8MVP7ibCnYmRCeCnrBg",
    authDomain: "coffee-generator-auth.firebaseapp.com",
    projectId: "coffee-generator-auth",
    storageBucket: "coffee-generator-auth.appspot.com",
    messagingSenderId: "1030366226948",
    appId: "1:1030366226948:web:4277384c3870a84dc8a351"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    return (
        <AuthContext.Provider value={{ email, setEmail, password, setPassword, signUp }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};