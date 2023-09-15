import { useState } from "react";
import "./App.css";
import * as Yup from "yup";
import { useFormik } from "formik";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <>
      <h1> Form Example1 </h1>

      <form onSubmit={submitForm}>
        <div>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit"> LogIN </button>
      </form>
    </>
  );
}

export default App;
