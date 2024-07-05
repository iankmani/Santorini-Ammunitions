import React from "react";
import "./Contact.css";
// import Form from "../../Parts/Form/Form.jsx";
import * as Yup from "yup";
import { useFormik } from "formik";

const Contact = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string("This Should consist of String Characters only")
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
      .required("This Field is Required")
      .min(10, "This Field Should be at least 10 Characters long")
      .required("This Field is Required"),
    // Licence: Yup.boolean()
    // .oneOf([true], 'We only accept Licencend users')
    // .required("This Field is Required")
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      company: "",
      tel: "",
      role: "",
      Licence: "",
      enquiry: "",
      message: "",
    },
    onSubmit: (formSubmission) => {
      console.log("Here is what the user has submitted");
      console.log(formSubmission);
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
              placeholder="Full Name *"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p>{formik.errors.fullName}</p>
            )}

            <input
              type="text"
              placeholder="Company (if applicable)"
              name="company"
              value={formik.values.company}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.company && formik.errors.company && (
              <p>{formik.errors.company}</p>
            )}

            <input
              type="text"
              placeholder=" Your Email *"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p>{formik.errors.email}</p>
            )}

            <input
              type="text"
              placeholder="Tel *"
              name="tel"
              value={formik.values.tel}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.tel && formik.errors.tel && (
              <p>{formik.errors.tel}</p>
            )}

            {/* <label htmlFor="user-type">User Type"</label> */}
            <select
              name="role"
              id="user-type"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="User Type">User</option>
              <option value="corporate">corporate</option>
              <option value="Individual">Individual</option>
            </select>
            {formik.touched.role && formik.errors.role && (
              <p>{formik.errors.role}</p>
            )}

            {/* <label htmlFor="Licence-Status">Licence Status *</label> */}
            <select
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
            )}

            {/* <label htmlFor="user-type">Enquiry Type *</label> */}
            <select
              name="enquiry"
              id="enquiry-type"
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
            {formik.touched.enquiry && formik.errors.enquiry && (
              <p>{formik.errors.enquiry}</p>
            )}

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
