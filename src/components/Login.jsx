import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div class="login">
            <div class="login-card">
                <form>
                    <h1>Login</h1>
                    <div class="enter-columns">
                        <div class="input">
                            <input type="text" placeholder="Enter Username" required />
                            <i class='bx bxs-user'></i>
                        </div>
                        <div class="input">
                            <input type="password" placeholder="Enter Password" required />
                            <i class='bx bxs-lock-alt'></i>
                        </div>
                    </div>
                    <div class="r-f boot">
                        <div><input type="checkbox" />
                            <label>Remember me</label></div>
                        <a href="#">Forgot password?</a>
                    </div>
                    <div class="sub">
                        <button type="submit"><Link to='/body'>Login</Link></button>
                    </div>
                    <div class="sign-up">
                        <p>Don't have an account
                            <a href="#"><Link to='/signup'>Sign Up</Link></a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;