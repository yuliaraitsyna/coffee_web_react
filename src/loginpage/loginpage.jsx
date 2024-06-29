import { useAuth } from "./login-module";

export default function LoginPage () {
    const { email, setEmail, password, setPassword, signUp } = useAuth();

    const submitHandler = (event) => {
        event.preventDefault();
        signUp(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User created:', user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error:', errorCode, errorMessage);
            });

    }

    return (
        <>
            <h1>Sign In</h1>
            <form onSubmit={submitHandler}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign in</button>
            </form>
        </>
    )
}