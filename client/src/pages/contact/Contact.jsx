import React from "react";
import "./Contact.css";
// import { useNavigate } from "react-router-dom";
// import Form from "../../Parts/Form/Form.jsx";


import * as Yup from "yup";
import { useFormik } from "formik";

const Contact = () => {
  // const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstname: Yup.string("This Should consist of String Characters only")
      .required("This Field is Required")
      .min(3, "This Field Should be at least 3 Characters long")
      .max(15, "This Field Should be at most 15 Characters long"),
    lastname: Yup.string("This Should consist of String Characters only")
      .required("This Field is Required")
      .min(3, "This Field Should be at least 3 Characters long")
      .max(15, "This Field Should be at most 15 Characters long"),
    email: Yup.string("This Should consist of String Characters only")
      .required("This Field is Required")
      .email("This Field Should be a Valid Email Address"),
    message: Yup.string("This Should consist of String Characters only")
      .min(10, "This Field Should be at least 10 Characters long")
      .max(100, "This Field Should be at most 100 Characters long"),

    tel: Yup.number("Enter your Phone Number")
      .min(10, "This Field Should be at least 10 Characters long")
      .required("This Field is Required"),
      password: Yup.string("this Should consist of String Characters only")
      .required("This Field is Required")
      .min(8, "This Field Should be at least 8 Characters long")
      .max(15, "This Field Should be at most 15 Characters long"),
      

    // Licence: Yup.boolean()
    // .oneOf([true], 'We only accept Licencend users')
    // .required("This Field is Required"),


  });
  const handleSubmit = async (formValues) => {
    try {
      const response = await fetch("http://localhost:3000/api/forms/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      const data = await response.json();
      console.log(data);
      if(data.message === "You have successfully booked an appointment, please check your email for further information"){
        alert("You have successfully booked an appointment, please check your email for further information. You can exit the Website. ")
      }

    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  }
  
 
  

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      licence: "",
      tel: "",
      role: "",
      // Licence: "",
      enquiry: "",
      message: "",
      // password: ""
      
    },
    onSubmit: (formSubmission) => {
      // console.log("Here is what the user has submitted");
      // console.log(formSubmission);
      handleSubmit(formSubmission);
    },
    validationSchema: validationSchema,
  
  });

  return (
    <div className="contact-fullpage">
      <div className="contact-title">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-form">
        <div className="get-in-touch">
          <h2>Get in Touch</h2>
        </div>
        <div className="contact-form-container">
          <form onSubmit={formik.handleSubmit}>
          <input
              type="text"
              placeholder="First Name *"
              name="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstname && formik.errors.firstname && 
              <p>{formik.errors.firstname}</p>}
            <input
              type="text"
              placeholder="Last Name *"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastname && formik.errors.lastname && 
              <p>{formik.errors.lastname}</p>
            }

            <input
              type="text"
              placeholder="Gun Licence (if applicable)"
              name="licence"
              value={formik.values.licence}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.licence && formik.errors.licence && 
              <p>{formik.errors.licence}</p>
            }

            <input
              type="text"
              placeholder=" Your Email *"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && 
              <p>{formik.errors.email}</p>
            }

            <input
              type="text"
              placeholder="Tel *"
              name="tel"
              value={formik.values.tel}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.tel && formik.errors.tel && 
              <p>{formik.errors.tel}</p>
            }

            {/* <label htmlFor="user-type">User Type"</label> */}
            <select
              name="role"
              id="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="User Type">User</option>
              <option value="corporate">corporate</option>
              <option value="Individual">Individual</option>
            </select>
            {formik.touched.role && formik.errors.role && 
              <p>{formik.errors.role}</p>
            }

            {/* <label htmlFor="Licence-Status">Licence Status *</label> */}
            {/* <select
              name="Licence"
              id="Licence"
              value={formik.values.Licence}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="Licenced">Licenced</option>
              <option value="No Licence">No Licence</option>
            </select>
            {formik.touched.Licence && formik.errors.Licence && (
              <p>{formik.errors.Licence}</p>
            )} */}

            {/* <label htmlFor="user-type">Enquiry Type *</label> */}
            <select
              name="enquiry"
              id="enquiry"
              value={formik.values.enquiry}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="Buy-Firearms">Buy Firearms</option>
              <option value="Buy-Ammunitions">Buy Ammunitions</option>
              <option value="Buy-Accessories">Buy Accessories</option>
              <option value="Training-services">Training Services</option>
              <option value="General-enquiry">General Enquiry</option>
            </select>
            {formik.touched.enquiry && formik.errors.enquiry && 
              <p>{formik.errors.enquiry}</p>
            }

            <textarea
              placeholder="Message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message && (
              <p>{formik.errors.message}</p>
            )}
            {/* <input
              type="password"
              placeholder="password *"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && 
              <p>{formik.errors.password}</p>
            } */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      {/* <div className="formik">
        <Form />
      </div> */}
      
      
    </div>
  );
};

export default Contact;
{
  /* <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" />
          <button>Send</button>
          </form>*/
}
