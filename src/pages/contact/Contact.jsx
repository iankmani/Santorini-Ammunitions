import React from "react";
import "./Contact.css";
import Form from "../../Parts/Form/Form.jsx";

const Contact = () => {
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
          <input type="text" placeholder="Full Name *" />

          <input type="text" placeholder="Company (if applicable)" />

          <input type="text" placeholder=" Your Email *" />

          <input type="text" placeholder="Tel *" />

          {/* <label htmlFor="user-type">User Type"</label> */}
          <select name="user-type" id="user-type">
            <option value="User Type">User</option>
            <option value="corporate">corporate</option>
            <option value="Individual">Individual</option>
          </select>

          {/* <label htmlFor="Licence-Status">Licence Status *</label> */}
          <select name="Licence" id="Licence">
            <option value="Licenced">Licenced</option>
            <option value="No Licence">No Licence</option>
          </select>

          {/* <label htmlFor="user-type">Enquiry Type *</label> */}
          <select name="enquiry-type" id="enquiry-type">
            <option value="Buy-Firearms">Buy Firearms</option>
            <option value="Buy-Ammunitions">Buy Ammunitions</option>
            <option value="Buy-Accessories">Buy Accessories</option>
            <option value="Training-services">Training Services</option>
            <option value="General-enquiry">General Enquiry</option>
          </select>

          <textarea placeholder="Message" />
          <button>Submit</button>
        </div>
      </div>
      <div className="formik">
        <Form />
      </div>
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
