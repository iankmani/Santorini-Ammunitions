import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { apiUrl } from "../../Utils/congig";


const Login = () => {
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters"),
      });
    
      const handleSubmit = async (values) => {
        try {
          const response = await fetch(`${apiUrl}/api/users/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
          const data = await response.json();
          console.log(data);
          if (data.message === "Login successful"){
            navigate("/Home")
          }
        } catch (error) {
          console.error(error);
        }
      };
    
      const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: validationSchema,

        onSubmit: handleSubmit,
    });
  return (
    <div className="signup-form">
          <h1>Log in</h1>
          <form onSubmit={formik.handleSubmit}>
           
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
  
}

export default Login;