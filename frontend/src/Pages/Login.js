import React from "react"
import IMG from "../assets/Login Page.png"

function Login() {
  return (
    <div className="md:flex py-10 mx-auto">
      <div className="w-[50%] mx-auto">
        <img src={IMG} alt="registration logo" />
      </div>

      <div className="w-[50%] mx-auto my-auto">
        <div className="signup_title mx-auto">Login</div>

        <div className="mt-5">
          <div className="signup_label">Email</div>

          <input type="text" className="signup_input" />
        </div>

        <div className="mt-5">
          <div className="signup_label">Password</div>

          <input type="text" className="signup_input" />
        </div>

        <div className="login_forgot_password">Forgot Password</div>
        <div>
          Not a user?{" "}
          <span className="login_forgot_password">Register now</span>
        </div>

        <div className="mx-auto mt-5">
          <button className="signup_button">LOGIN</button>
        </div>
      </div>
    </div>
  )
}

export default Login
