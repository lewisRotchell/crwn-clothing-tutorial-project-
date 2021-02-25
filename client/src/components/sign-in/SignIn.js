import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./signin.scss";

import { auth, signInWithGoogle } from "../../firebase/firebaseUtils";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUser({
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const { email, password } = user;

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="password"
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            Sign In With Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

//isGoogleSignIn gets auto rendered to true

export default SignIn;
