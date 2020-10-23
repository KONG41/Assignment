import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Login extends React.Component {
	render() {
    	return (
        <div className="container">
           <h1 className="header-title">Login</h1>
            <form className="form-con">
                <div className="user-name">
                    <label>UserName</label>
                    <input type="text"/>
                </div>
                <div className="password">
                   <label >Password</label>
                   <input type="password"/>
                </div>
                <div className="button">
                    
                    <Link to="/home">
                        <input type="submit" value="Login" />
                    </Link>
                </div>
                
            </form>
        </div>
        
    
    
        )
    }
}
export default Login;