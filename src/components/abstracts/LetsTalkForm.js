import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "../../styles/global/_forms.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight, faSpinner } from '@fortawesome/pro-regular-svg-icons'

const LetsTalkForm = data => {

    const [submitted, setSubmitted] = useState(false);

    return (
      <div>
        <Formik
          initialValues={{ firstName: '', lastName: '', emailAddress: '', companyName: '', phoneNumber: '', interests: '', message: '' }}
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
                  setSubmitted(true)
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
              <Field
                as="select"
                name="interests">
                <option value="" disabled selected hidden>Interest</option>
                <option value="Web Design">Web Design</option>
                <option value="Search Engine Optimization">Search Engine Optimization</option>
                <option value="Paid Advertising">Paid Advertising</option>
                <option value="Other">Other</option>
              </Field>
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
        {submitted && (
          <div className="site-footer__success">
            <h3 className="site-footer__success-heading">Thanks for your interest!</h3>
            <div className="site-footer__success-content margin-fix">
              <p>We have received your request and are passing your information along to the right person. Once we have reviewed your information, someone will reach out to put a time on the calendar to learn more about your project. Talk soon!</p>
            </div>
          </div>
        )}
      </div>
    )
}

export default LetsTalkForm
