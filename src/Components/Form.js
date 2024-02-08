 import React, { useState, useEffect, useRef } from "react";
import "./Form.css";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

function Form() {
  const initialValues = { name: "", email: "", subject: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      sendEmail();
      showSuccessAlert();
      setFormValues(initialValues);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Form submitted:", formValues);
    }
  }, [formErrors, isSubmit, formValues]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name.trim()) {
      errors.name = "Name is Required";
    }
    if (!values.email.trim()) {
      errors.email = "Email is Required";
    } else if (!regex.test(values.email)) {
      errors.email = "Enter a VALID email-id";
    }
    if (!values.subject.trim()) {
      errors.subject = "Subject is Required";
    }
    if (!values.message.trim()) {
      errors.message = "Message is Required";
    }
    return errors;
  };

  const sendEmail = () => {
    emailjs.sendForm('service_bhwe7bw', 'template_aycehff', formRef.current, 'm9Db2XroqcjgOmGHd')
      .then((result) => {
          console.log(result.text);
      })
      .catch((error) => {
          console.log(error.text);
      });
  };

  const showSuccessAlert = () => {
    Swal.fire({
      title: "Success!",
      text: "Mail sent successfully!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="formbg">
      <img
        className="formimg"
        src={
          "https://media.istockphoto.com/id/1337668467/vector/modern-rainbow-glow-backlight-frame.jpg?s=612x612&w=0&k=20&c=xbuNlYJsMRHstRLRkJyAW_eDaYLE6sXjQoFFo1tmFSo="
        }
        alt="form"
      />
      <div className="mainform">
        <form className="form" onSubmit={handleSubmit} ref={formRef}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.name}</p>
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.email}</p>
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.subject}</p>
          <label>Message</label>
          <textarea
            rows="4"
            placeholder="Type your Message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.message}</p>
          <button type="submit" className="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
