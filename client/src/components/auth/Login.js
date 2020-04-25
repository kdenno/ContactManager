import React, {useState, useContext} from 'react';
import AuthContext from "../../context/auth/authContext";

function Login() {
    const [user, setLogin] = useState({
        email: '',
        password: ''
    });
    const authcontext = useContext(AuthContext);
    const {email, password} = user;
    
    const onChange = (e) => {
        setLogin({...user, [e.target.name] : e.target.value});
    }
    const onSubmit = (e) => {
        e.preventDefault();
        authcontext.Login(user);

    }
    return (
        <div className="form-container">
        <form onSubmit={onSubmit}>
            <div className="form-group">
            <label htmlFor="email">Email</label>
                <input name="email" type="email" value={email} onChange={onChange} />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" value={password} onChange={onChange} />
            </div>
            <input type="submit" className="btn btn-primary btn-block" value="Login" />
            
        </form>
        </div>
    )
}

export default Login
