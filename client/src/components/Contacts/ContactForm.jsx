import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { MyTextInput } from "../Form/Form";
import { addContact } from "../../reducers/contactReducers";


const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("submit");
          console.log(values);
          dispatch(addContact(values));
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            label="Company"
            name="company"
            type="text"
            placeholder="Company"
          />
          <MyTextInput
            label="Job Title"
            name="job"
            type="text"
            placeholder="Job Title"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="Email Address"
          />
          <MyTextInput
            label="Phone"
            name="phone"
            type="phone"
            placeholder="Phone"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
