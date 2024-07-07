import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Signup.css";
import { apiUrl } from '../../Utils/congig.js';

// const apiUrl = import.meta.env.VITE_API_URL_ROOT;

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] =useState(false);
 
    const validationSchema = Yup.object({
        firstname: Yup.string()
          .required("First Name is required")
          .min(2, "First Name should be at least 2 characters")
          .max(50, "First Name should be at most 50 characters"),
        lastname: Yup.string()
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
      
      
      const handleSubmit =async (values) => {
        console.log(values);
        try {
          setLoading(true)
          setError(false)

          const response = await fetch(`${apiUrl}/api/users/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
          const data = await response.json();
          console.log(data);
          if  (data.message === "Signup successful") {
            navigate("/login");
            } else {
              alert(data.message || "sign up failed");
              }
        } catch (error) {
          console.error("Error during sign-up:", error);
          alert("An error occurred during sign-up");
        }
        finally{
          setLoading(false)

        }

      }



    
      const formik = useFormik({
        initialValues: {
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: "",
          phoneNumber: ""
        },
        validationSchema: validationSchema,

        onSubmit: handleSubmit
        
      });

    
      return (
        <div className="signup-form">
          <h1>Sign Up</h1>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formik.values.firstname || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstname && formik.errors.firstname ? (
                <div className="error">{formik.errors.firstname}</div>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formik.values.lastname || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <div className="error">{formik.errors.lastname}</div>
              ) : null}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email || ""}
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
                value={formik.values.password || ""}
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
                value={formik.values.phoneNumber || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="error">{formik.errors.phoneNumber}</div>
              ) : null}
            </div>
            <button type="submit" >Sign Up</button>
            <p>{loading} </p>
          </form>
        </div>
      );
    };


    
    export default Signup;
  


