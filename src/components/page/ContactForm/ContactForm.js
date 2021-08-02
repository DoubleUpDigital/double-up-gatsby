import React from 'react'
import * as styles from "./contactForm.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
import Squiggle from "../../abstracts/Squiggle"
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
                  initialValues={{ interests: '', firstName: '', lastName: '', phoneNumber: '', emailAddress: '', companyName: '', message: '', budget: '' }}
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
                  onSubmit={async (values) => {
                    try {
                      await fetch(process.env.PIPEDRIVE_ENDPOINT, {
                        method: `POST`,
                        headers: {
                          "content-type": "application/json; charset=UTF-8",
                        },
                        body: JSON.stringify(values),
                      }).then((res) => {
                        res.json();
                        if (res.status === 200) {
                          // do something good
                        } else {
                          console.log(res.status);
                        }
                      });
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form className="formikForm">
                      <p className="formikForm__heading">I'm interested in...</p>
                      <div className="formikForm__checkBoxes">
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="webDesign"
                            value="Web Design"
                          />
                          <label for="webDesign"><span>Web Design</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="webDevelopment"
                            value="Web Development"
                          />
                          <label for="webDevelopment"><span>Web Development</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="webOptimization"
                            value="Web Optimization"
                          />
                          <label for="siteOptimization"><span>Web Optimization</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="graphicDesign"
                            value="Graphic Design"
                          />
                          <label for="graphicDesign"><span>Graphic Design</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="illustration"
                            value="Illustration"
                          />
                          <label for="illustration"><span>Illustration</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="motionGraphics"
                            value="Motion Graphics"
                          />
                          <label for="motionGraphics"><span>Motion Graphics</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="branding"
                            value="Branding"
                          />
                          <label for="branding"><span>Branding</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="paidAdvertising"
                            value="Paid Advertising"
                          />
                          <label for="paidAdvertising"><span>Paid Advertising</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="seo"
                            value="SEO"
                          />
                          <label for="seo"><span>SEO</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="linkBuilding"
                            value="Link Building"
                          />
                          <label for="linkBuilding"><span>Link Building</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="copywriting"
                            value="Copywriting"
                          />
                          <label for="copywriting"><span>Copywriting</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="other"
                            value="Other"
                          />
                          <label for="other"><span>Other</span></label>
                        </div>
                        <div>
                          <Field
                            type="checkbox"
                            name="interests"
                            id="notSure"
                            value="I'm not sure"
                          />
                          <label for="notSure"><span>I'm not sure</span></label>
                        </div>
                      </div>
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
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                      />
                      <Field
                        type="email"
                        name="emailAddress"
                        placeholder="Email Address"
                      />
                      <ErrorMessage name="emailAddress" component="div" />
                      <Field
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                      />
                      <Field
                        type="textarea"
                        name="message"
                        placeholder="Tell us more about your needs..."
                      />
                      <p className="formikForm__heading">Project budget</p>
                      <div className="formikForm__checkBoxes">
                        <div>
                          <Field
                            type="radio"
                            name="budget"
                            id="under5000"
                            value="under $5,000"
                          />
                          <label for="under5000"><span>under $5,000</span></label>
                        </div>
                        <div>
                          <Field
                            type="radio"
                            name="budget"
                            id="5000to10000"
                            value="$5,000 - $10,000"
                          />
                          <label for="5000to10000"><span>$5,000 - $10,000</span></label>
                        </div>
                        <div>
                          <Field
                            type="radio"
                            name="budget"
                            id="10000to20000"
                            value="$10,000 - $20,000"
                          />
                          <label for="10000to20000"><span>$10,000 - $20,000</span></label>
                        </div>
                        <div>
                          <Field
                            type="radio"
                            name="budget"
                            id="20000to50000"
                            value="$20,000 - $50,000"
                          />
                          <label for="20000to50000"><span>$20,000 - $50,000</span></label>
                        </div>
                        <div>
                          <Field
                            type="radio"
                            name="budget"
                            id="50000plus"
                            value="$50,000 +"
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
                    </Form>
                  )}
                </Formik>

            </div>
        </section>
        {(data.background.squiggleBottom && data.background.hasBackground) && <Squiggle type={data.background.squiggleBottom} />}
      </>

    )
}

export default ContactForm
