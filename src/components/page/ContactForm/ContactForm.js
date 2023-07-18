import React, { useState } from 'react'
import "./contactForm.scss"
import Squiggle from "../../abstracts/Squiggle"
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight, faSpinner } from '@fortawesome/pro-regular-svg-icons'

const ContactForm = data => {

    const [submitted, setSubmitted] = useState(false);

    return (
      <>
      {(data.background.squiggleTop && data.background.hasBackground) && <Squiggle type={data.background.squiggleTop} />}
        <section className={`ContactForm component
          ${data.background.hasBackground ? 'component--with-background'  : ""}
          ${(data.background.squiggleTop && data.background.hasBackground) ? 'component--squiggleTop'  : ""}
          ${(data.background.squiggleBottom && data.background.hasBackground) ? 'component--squiggleBottom'  : ""}
          ${(data.background.lastComponent && data.background.hasBackground) ? 'component--last'  : ""}`}>
            <div className="container container--medium-2">
                <h2 className="ContactForm__heading">{data.heading}</h2>

                <Formik
                  initialValues={{ interests: '', firstName: '', lastName: '', phoneNumber: '', emailAddress: '', companyName: '', message: '', budget: '' }}
                  validate={values => {
                    const errors = {};
                    if (!values.emailAddress) {
                      errors.emailAddress = <span className="required-text tag tag--red">Required field</span>;
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailAddress)
                    ) {
                      errors.emailAddress = <span className="required-text tag tag--red">Invalid email address</span>;
                    }

                    if (!values.firstName) {
                      errors.firstName = <span className="required-text tag tag--red">Required field</span>;
                    }

                    if (!values.lastName) {
                      errors.lastName = <span className="required-text tag tag--red">Required field</span>;
                    }

                    if (!values.phoneNumber) {
                      errors.phoneNumber = <span className="required-text tag tag--red">Required field</span>;
                    }

                    if (!values.companyName) {
                      errors.companyName = <span className="required-text tag tag--red">Required field</span>;
                    }

                    if (!values.message) {
                      errors.message = <span className="required-text tag tag--red">Required field</span>;
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
                  {({ isSubmitting }) => (
                    <Form className="formikForm" id="contactForm">
                      <p className="formikForm__heading">I'm interested in...</p>
                      <div className="formikForm__checkBoxes">
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="webDesign"
                            value="Web Design"
                          />
                          <label htmlFor="webDesign"><span>Web Design</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="webDevelopment"
                            value="Web Development"
                          />
                          <label htmlFor="webDevelopment"><span>Web Development</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="websiteOptimization"
                            value="Web Optimization"
                          />
                          <label htmlFor="websiteOptimization"><span>Website Optimization</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="graphicDesign"
                            value="Graphic Design"
                          />
                          <label htmlFor="graphicDesign"><span>Graphic Design</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="illustration"
                            value="Illustration"
                          />
                          <label htmlFor="illustration"><span>Illustration</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="motionGraphics"
                            value="Motion Graphics"
                          />
                          <label htmlFor="motionGraphics"><span>Motion Graphics</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="branding"
                            value="Branding"
                          />
                          <label htmlFor="branding"><span>Branding</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="paidAdvertising"
                            value="Paid Advertising"
                          />
                          <label htmlFor="paidAdvertising"><span>Paid Advertising</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="seo"
                            value="SEO"
                          />
                          <label htmlFor="seo"><span>SEO</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="linkBuilding"
                            value="Link Building"
                          />
                          <label htmlFor="linkBuilding"><span>Link Building</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="copywriting"
                            value="Copywriting"
                          />
                          <label htmlFor="copywriting"><span>Copywriting</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="other"
                            value="Other"
                          />
                          <label htmlFor="other"><span>Other</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="notSure"
                            value="I'm not sure"
                          />
                          <label htmlFor="notSure"><span>I'm not sure</span></label>
                        </div>
                      </div>
                      <div className="formikForm__field-wrap">
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                      />
                      <ErrorMessage name="firstName" component="div" className="formikForm__error" />
                      </div>
                      <div className="formikForm__field-wrap">
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                      />
                      <ErrorMessage name="lastName" component="div" className="formikForm__error" />
                      </div>
                      <div className="formikForm__field-wrap">
                      <Field
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                      />
                      <ErrorMessage name="phoneNumber" component="div" className="formikForm__error" />
                      </div>
                      <div className="formikForm__field-wrap">
                      <Field
                        type="email"
                        name="emailAddress"
                        placeholder="Email Address"
                      />
                      <ErrorMessage name="emailAddress" component="div" className="formikForm__error" />
                      </div>
                      <div className="formikForm__field-wrap">
                      <Field
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                      />
                      <ErrorMessage name="companyName" component="div" className="formikForm__error" />
                      </div>
                      <div className="formikForm__field-wrap">
                      <Field
                        type="textarea"
                        as="textarea"
                        name="message"
                        placeholder="Tell us more about your needs..."
                      />
                      <ErrorMessage name="message" component="div" className="formikForm__error formikForm__error--top" />
                      </div>
                      <p className="formikForm__heading">Project budget (optional)</p>
                      <div className="formikForm__checkBoxes">
                        <div>
                          <Field
                            type="radio"
                            name="budget"
                            id="under5000"
                            value="under $5,000"
                          />
                          <label htmlFor="under5000"><span>under $5,000</span></label>
                        </div>
                        <div>
                          <Field
                            type="radio"
                            name="budget"
                            id="5000to10000"
                            value="$5,000 - $10,000"
                          />
                          <label htmlFor="5000to10000"><span>$5,000 - $10,000</span></label>
                        </div>
                        <div>
                          <Field
                            type="radio"
                            name="budget"
                            id="10000to20000"
                            value="$10,000 - $20,000"
                          />
                          <label htmlFor="10000to20000"><span>$10,000 - $20,000</span></label>
                        </div>
                        <div>
                          <Field
                            type="radio"
                            name="budget"
                            id="20000to50000"
                            value="$20,000 - $50,000"
                          />
                          <label htmlFor="20000to50000"><span>$20,000 - $50,000</span></label>
                        </div>
                        <div>
                          <Field
                            type="radio"
                            name="budget"
                            id="50000plus"
                            value="$50,000 +"
                          />
                          <label htmlFor="50000plus"><span>$50,000 +</span></label>
                        </div>
                      </div>
                      <button type="submit" disabled={isSubmitting} className="button">
                        <span className="button__text">
                          Let's Talk
                        </span>
                        <span className="button__orb">
                          {isSubmitting
                            ? <i><FontAwesomeIcon icon={faSpinner} spin /></i>
                            : <FontAwesomeIcon icon={faLongArrowRight} />
                          }
                        </span>
                      </button>

                    </Form>
                  )}
                </Formik>

                {submitted && (
                  <div className="contactForm__success">
                    <h2 className="contactForm__success-heading">Thanks for your interest!</h2>
                    <div className="contactForm__success-content margin-fix">
                      <p>We have received your request and are passing your information along to the right person. Once we have reviewed your information, someone will reach out to put a time on the calendar to learn more about your project. Talk soon!</p>
                    </div>
                  </div>
                )}

            </div>
        </section>
        {(data.background.squiggleBottom && data.background.hasBackground) && <Squiggle type={data.background.squiggleBottom} />}
      </>

    )
}

export default ContactForm
