
import React from 'react';
import './signup.css';

function Signup() {
  return (
    <form className="form">
      <p className="title">Register </p>
      <p className="message">Signup now and get full access to our app. </p>
      <div className="flex">
        <label>
          <input required="" placeholder="" type="text" className="input" />
          <span>Firstname</span>
        </label>

        <label>
          <input required="" placeholder="" type="text" className="input" />
          <span>Lastname</span>
        </label>
      </div>

      <label>
        <input required="" placeholder="" type="email" className="input" />
        <span>Email</span>
      </label>

      <label>
        <input required="" placeholder="" type="password" className="input" />
        <span>Password</span>
      </label>
      <label>
        <input required="" placeholder="" type="password" className="input" />
        <span>Confirm password</span>
      </label>
      <button className="submit">Submit</button>
      <p className="signin">
        Already have an account? <a href="#">Sign in</a>
      </p>
    </form>
  );
}

export default Signup;

import React from "react"
import IMG from "../assets/Registration Page.png"

function Signup() {
  return (
    <div className="md:flex max-w-6xl py-10 mx-auto">
      <div className="w-[50%] mx-auto">
        <img src={IMG} alt="registration logo" />
      </div>

      <div className="w-[50%] mx-auto">
        <div className="signup_title mx-auto">Registration form</div>

        <div className="mt-5">
          <div className="signup_label">Name</div>

          <input type="text" className="signup_input" />
        </div>

        <div className="mt-5">
          <div className="signup_label">Date Of Birth</div>

          <input type="text" className="signup_input" />
        </div>

        <div className="mt-5">
          <div className="signup_label">Father's/Mother's Name</div>

          <input type="text" className="signup_input" />
        </div>

        <div className="mt-5">
          <div className="signup_label">Email</div>

          <input type="text" className="signup_input" />
        </div>

        <div className="mt-5">
          <div className="signup_label">Mobile No.</div>

          <input type="text" className="signup_input" />
        </div>

        <div className="mt-5">
          <div className="signup_label">Password</div>

          <input type="text" className="signup_input" />
        </div>

        <div className="mt-5">
          <div className="signup_label">Re-enter Password</div>

          <input type="text" className="signup_input" />
        </div>

        <div className="mt-5">
          <div className="signup_label">Re-enter Password</div>

          <input type="text" className="signup_input" />
        </div>

        <div className="mt-5">
          <div className="signup_label">Aadhar Number</div>

          <input type="text" className="signup_input" />
        </div>

        <div className="mx-auto mt-5">
          <button className="signup_button">SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

export default Signup

