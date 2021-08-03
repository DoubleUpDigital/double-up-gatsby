import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "../../styles/global/_forms.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight, faSpinner } from '@fortawesome/pro-regular-svg-icons'

const LetsTalkForm = data => {

    return (

      <Formik
        initialValues={{ firstName: '', lastName: '', emailAddress: '', companyName: '', phoneNumner: '', interest: '', message: '' }}
        validate={values => {
          const errors = {};
          if (!values.emailAddress) {
            errors.emailAddress = <span className="required-text"><sup>*</sup>Required</span>;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailAddress)
          ) {
            errors.emailAddress = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await fetch(process.env.GATSBY_PIPEDRIVE_ENDPOINT, {
              method: `POST`,
              headers: {
                "content-type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify(values),
            }).then((res) => {
              res.json();
              if (res.status === 200) {
                resetForm();
                setSubmitting(false)
              } else {
                console.log(res);
                setSubmitting(false)
              }
            });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="formikForm formikForm__letsTalk">
            <Field
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <Field
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
            <Field
              type="email"
              name="emailAddress"
              placeholder="Email Address"
            />
            <Field
              type="text"
              name="companyName"
              placeholder="Company Name"
            />
            <Field
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
            />
            <select name="interests" id="interests">
              <option disabled>Interests</option>
              <option value="Web Design">Web Design</option>
              <option value="Search Engine Optimization">Search Engine Optimization</option>
              <option value="Paid Advertising">Paid Advertising</option>
            </select>
            <Field
              type="textarea"
              as="textarea"
              name="message"
              placeholder="Tell us more about your needs"
            />
            <button type="submit" disabled={isSubmitting} className="button">
              {isSubmitting
                ? <FontAwesomeIcon icon={faSpinner} spin />
                : <FontAwesomeIcon icon={faLongArrowRight} />
              }
            </button>
          </Form>
        )}
      </Formik>

    )
}

export default LetsTalkForm
