import React from 'react'
import * as styles from "./contactForm.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
import Squiggle from "../../abstracts/Squiggle"
import { Formik } from 'formik';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'



const ContactForm = data => {




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
                  initialValues={{ interests: '', firstName: '', lastName: '', phoneNumner: '', emailAddress: '', companyName: '', message: '', budget: '' }}
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
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                    }) => (
                    <form onSubmit={handleSubmit} className="formikForm">
                      <p className="formikForm__heading">I'm interested in...</p>
                      <div className="formikForm__checkBoxes">
                        <div>
                          <input
                            type="checkbox"
                            name="interests"
                            id="webDesign"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="webDesign"><span>Web Design</span></label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="interests"
                            id="webDevelopment"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="webDevelopment"><span>Web Development</span></label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="interests"
                            id="webOptimization"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="siteOptimization"><span>Web Optimization</span></label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="interests"
                            id="graphicDesign"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="graphicDesign"><span>Graphic Design</span></label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="interests"
                            id="illustration"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="illustration"><span>Illustration</span></label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="interests"
                            id="motionGraphics"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="motionGraphics"><span>Motion Graphics</span></label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="interests"
                            id="branding"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="branding"><span>Branding</span></label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="interests"
                            id="paidAdvertising"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="paidAdvertising"><span>Paid Advertising</span></label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="interests"
                            id="seo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="seo"><span>SEO</span></label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="interests"
                            id="linkBuilding"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="linkBuilding"><span>Link Building</span></label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="interests"
                            id="copywriting"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="copywriting"><span>Copywriting</span></label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="interests"
                            id="other"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="other"><span>Other</span></label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="interests"
                            id="notSure"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="notSure"><span>I'm not sure</span></label>
                        </div>
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                      />
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                      />
                      <input
                        type="email"
                        name="emailAddress"
                        placeholder="Email Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.emailAddress}
                      />
                      {errors.emailAddress && touched.emailAddress && errors.emailAddress}
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.companyName}
                      />
                      <input
                        type="textarea"
                        name="message"
                        placeholder="Tell us more about your needs..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                      />
                      <p className="formikForm__heading">Project budget</p>
                      <div className="formikForm__checkBoxes">
                        <div>
                          <input
                            type="radio"
                            name="interests"
                            id="under5000"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="under5000"><span>under $5,000</span></label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="interests"
                            id="5000to10000"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="5000to10000"><span>$5,000 - $10,000</span></label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="interests"
                            id="10000to20000"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="10000to20000"><span>$10,000 - $20,000</span></label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="interests"
                            id="20000to50000"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="20000to50000"><span>$20,000 - $50,000</span></label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="interests"
                            id="50000plus"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.interests}
                          />
                          <label for="50000plus"><span>$50,000 +</span></label>
                        </div>
                      </div>
                      <button type="submit" disabled={isSubmitting} className="button">
                        <span className="button__text">
                          Let's Talk
                        </span>
                        <span className="button__orb">
                          <FontAwesomeIcon icon={faLongArrowRight} />
                        </span>
                      </button>
                    </form>
                  )}
                </Formik>

            </div>
        </section>
        {(data.background.squiggleBottom && data.background.hasBackground) && <Squiggle type={data.background.squiggleBottom} />}
      </>

    )
}

export default ContactForm
