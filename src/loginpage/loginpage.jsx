import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function LoginPage () {
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

    const submitHandler = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    return (
        <>
            <h1>Sign In</h1>
            <form>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <button type="submit" onSubmit={submitHandler}>Sign in</button>
            </form>
        </>
    )
}