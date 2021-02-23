import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./signin.scss";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      email: "",
      password: "",
    });
  };

  const { email, password } = user;

  return (
    <div className="sign-in">
      <h2>I already have an avccount</h2>
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
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton type="submit">Sign In With Google</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
