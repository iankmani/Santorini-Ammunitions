import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Signup.css";

const Signup = () => {
 
    const validationSchema = Yup.object({
        firstName: Yup.string()
          .required("First Name is required")
          .min(2, "First Name should be at least 2 characters")
          .max(50, "First Name should be at most 50 characters"),
        lastName: Yup.string()
          .required("Last Name is required")
          .min(2, "Last Name should be at least 2 characters")
          .max(50, "Last Name should be at most 50 characters"),
        email: Yup.string()
          .email("Invalid email format")
          .required("Email is required"),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password should be at least 8 characters")
          .max(20, "Password should be at most 20 characters"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required("Confirm Password is required"),
        phoneNumber: Yup.string()
          .required("Phone Number is required")
          .matches(/^[0-9]{10}$/, "Phone Number should be 10 digits"),
    
      })


    
      const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          phoneNumber: ""
        },
        validationSchema: validationSchema,

        onSubmit: async (values) => {
            console.log(values);
            // try {
            //   const response = await fetch("http://localhost:3000/api/signup", {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(values),
            //   });
            //   const data = await response.json();
            //   console.log(data);
            // } catch (error) {
            //   console.error("Error during sign-up:", error);
            // }
          },
      });

    
      return (
        <div className="signup-form">
          <h1>Sign Up</h1>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="error">{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="error">{formik.errors.lastName}</div>
              ) : null}
            </div>
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
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="error">{formik.errors.confirmPassword}</div>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="error">{formik.errors.phoneNumber}</div>
              ) : null}
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
    };


    
    export default Signup;
  


