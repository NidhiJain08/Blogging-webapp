import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import userContext from "../userContext";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [redirect,setRedirect]=useState(false);
    const {setUserInfo}=useContext(userContext);

    async function login(ev) {
        ev.preventDefault();
        setError(''); // Clear any previous error
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
                credentials:'include'
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Login successful:', data);
                
                setUserInfo(data);
                setRedirect(true);
            
         } else {
                setError(data.error || 'Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred while logging in');
        }
    }

    if(redirect){
        return <Navigate to={'/'}/>
    }

    return (
        <form className="login" onSubmit={login}>
            <h1>LOGIN</h1>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            />
            <button>Login</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
    );
}

export default LoginPage;
