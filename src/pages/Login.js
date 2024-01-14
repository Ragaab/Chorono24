import "../Css/Login.css";
import Logo from "../images/logo-positive-reduced.svg";
import googleLogo from "../images/google-logo.svg";
import appleLogo from "../images/apple-logo.svg";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    let [check, setCheck] = useState(false);

    return (
        <div className="login">
            <div className="my-container">
                <div className="image">
                    <Link to={"/"}>
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="login-box col-lg-6 col-md-8 col-sm-12">
                    <h1>Login</h1>
                    <div className="form">
                        <label for="email">Email address</label>
                        <input type="text" id="email" />
                    </div>
                    <div className="form">
                        <label for="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="login-status">
                        <div className="check-box">
                            <IoMdCheckmark className={`${check === true ? "d-block" : "d-none"}`} />
                            <span>
                                <div
                                    className="box"
                                    onClick={() => {
                                        setCheck(!check);
                                    }}
                                ></div>
                                Stay logged in
                            </span>
                        </div>
                        <a href="#/">Forgot your password?</a>
                    </div>
                    <button className="login-submit" type="submit">
                        Login
                    </button>
                    <div className="or">
                        <span>OR</span>
                    </div>
                    <div className="options">
                        <button type="submit">
                            <img src={googleLogo} alt="" /> Continue With Google
                        </button>
                        <button type="submit">
                            <img src={appleLogo} alt="" /> Continue With Apple
                        </button>
                    </div>
                    <div className="register">
                        <span>New to Chrono24?</span>
                        <a href="#/">Create a free account now</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
