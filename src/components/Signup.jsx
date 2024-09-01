import React from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';
function Signup() {
    return (
        <div>
            <div class="login">
                <div class="login-card">
                    <form  method="post" action="Signup.php">
                        <h1>Sign Up</h1>
                        <div class="enter-columns">
                            <div class="input">
                                <input type="text" placeholder="Enter Username" required />
                                <i class='bx bxs-user'></i>
                            </div>
                            <div class="input">
                                <input type="email" placeholder="Enter Email" required />
                                <i class='bx bx-envelope'></i>
                            </div>
                            <div class="input">
                                <input type="password" placeholder="Enter Password" required />
                                <i class='bx bxs-lock'></i>
                            </div>
                            <div class="input">
                                <input type="tel" placeholder="Enter Mobile number" required />
                                <i class='bx bxs-phone'></i>
                            </div>
                            <div class="boot">
                                <div><input type="radio" name="gender" />
                                    <label>Male <i class='bx bx-male'></i></label>
                                </div>
                                <div><input type="radio" name="gender" />
                                    <label>Female <i class='bx bx-female'></i></label>
                                </div>
                            </div>
                            <div class="input">
                                <input type="text" placeholder="Enter Address" required />
                                <i class='bx bxs-home'></i>
                            </div>

                            <div class="sub">
                                <button type="submit">Sign Up</button>
                            </div>

                            <div class="sign-up">
                                <p>Already had an account
                                    <a href="#"><Link to='/login'>Login</Link></a>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup
