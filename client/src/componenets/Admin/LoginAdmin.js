import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
 
const LoginAdmin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [error, setError] = useState(false);

    if (Cookies.get("token") === "true") {
        return <Navigate to='/admindashboard' replace={true} />
    }
    const handleLogin = (e) => {
        e.preventDefault();

        if (username === 'admin@gmail.com' && password === 'Aplus@9000' && secretKey === "XYZ123") {
            Cookies.set('token', "true", { expires: 2 });
            setUsername("");
            setPassword("");
            setSecretKey("");
            return <Navigate to='/admindashboard' replace={true} />
        } else {
            setError(true);
            setTimeout(() => { setError(false) }, 3000)
        }
    };


    return (
        <div className='w-50 h-auto bg-info border p-5 mx-auto mb-5'>
            <h1>Admin Login</h1>
            {error ? <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Invliad Credentials </strong>  Please correct and try again ..
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setError(false)}></button>
            </div> : ""}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className='m-2'>Email address</label>
                    <input type="email" className="form-control" value={username} onChange={(e) => { setUsername(e.target.value) }} aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1" className='m-2' >Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="secretkey" className='m-2' >SecretKey</label>
                    <input type="password" className="form-control" value={secretKey} onChange={(e) => { setSecretKey(e.target.value) }} placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default LoginAdmin;