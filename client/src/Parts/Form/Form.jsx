import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Form() {
  const validationSchema = Yup.object({
    firstName: Yup.string("this should be a string")
      .min(4, "the characters should be more than 4")
      .max(10, "the characyters should be less than 10"),
    lastName: Yup.string("this should be a string")
      .min(4, "the characters should be more than 4")
      .max(10, "the characyters should be less than 10"),
    email: Yup.string("this should be a string")
      .email("this should be a valid email")
      .required("this field is required"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (formSubmission) => {
      console.log("WHAT THE USER HAS SUBMMITED");
      console.log(formik.values);
    },
    validationSchema: validationSchema,
    // validate: (values) => {
    //   let errors = {};
    //   if (values.firstName === "") {
    //     errors.firstName = "First Name is Required";
    //   }
    //   if (values.lastName === "") {
    //     errors.lastName = " Last name is Required";
    // }
    // if (values.email === "") {
    //     errors.email = "Email is Required";
    //     }
    //     return errors;

    //  },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name"> First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && <p> {formik.errors.firstName} </p>}
        </div>
        <div>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          {formik.errors.lastName && <p>{formik.errors.lastName}</p>}
        </div>
        <div>
          <label htmlFor="name">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && <p>{formik.errors.email}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
