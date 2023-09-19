import React, { useState } from "react";
import FormInput from "../forms-input/form-input.component";
import './sign-in.styles.scss'
import CustomButton from "../custom-component/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Access the form data from the formData state
    const { email, password } = formData;

    // You can reset the form by clearing the state
    setFormData({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update the state based on the input name
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          name="email"
          type="email"
          value={formData.email}
          required
          handleChange={handleChange}
          label='email'
        />
        <FormInput
          name="password"
          type="password"
          value={formData.password}
          required
          handleChange={handleChange}
          label='password'
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{``}Sign in with google{``}</CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
