import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import "../../styles/global/_forms.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight, faSpinner } from '@fortawesome/pro-regular-svg-icons'
import { set } from 'lodash';

const LetsTalkForm = data => {

    const [submitted, setSubmitted] = useState(false);
    const [utmSource, setUtmSource] = useState('Unknown');

    useEffect(() => {
      // check for locally stored utm_source
      const storedUtmSource = localStorage.getItem('utm_source');

      // get utm_source from URL
      const urlParams = new URLSearchParams(window.location.search);
      if(urlParams.has('utm_source')) {
      const utmSourceParam = urlParams.get('utm_source');
      setUtmSource(utmSourceParam);

      // save utm_source to local storage
      localStorage.setItem('utm_source', utmSourceParam);
      } else if(storedUtmSource) {
        setUtmSource(storedUtmSource);
      }
    }, []);

    return (
      <div>
        <Formik
          initialValues={{ firstName: '', lastName: '', emailAddress: '', companyName: '', phoneNumber: '', interests: '', message: '', utmSource: utmSource}}
          enableReinitialize={true}
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
            const dataLayer = window.dataLayer || [];
            try {
              await fetch(process.env.GATSBY_LEADS_ENDPOINT, {
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
                  dataLayer.push({'event': 'form_submit_success'})
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
          {({ isSubmitting, setFieldValue }) => (
            <Form className="formikForm formikForm__letsTalk" id="footerForm" netlify>
              <Field
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />
              <Field
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
              <Field
                type="email"
                name="emailAddress"
                placeholder="Email Address"
                required
              />
              <Field
                type="text"
                name="companyName"
                placeholder="Company Name"
                required
              />
              <Field
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                required
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
              <Field
                type="hidden"
                name="utmSource"
                value={utmSource}
              />
              <button type="submit" disabled={isSubmitting} className="button" aria-label="Submit">
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
