import * as React from 'react'
import './formOne.css'
import Heading from './heading'
import { Formik, Field, Form } from 'formik'
import { StyledInputField, StyledTextArea } from './textComponents'
import Button from './button'

const choices = ['1 month', '2-3 months', '4+ months']
const checkboxes = ['Desktop', 'Web', 'Mobile', 'Others']


const FormOne = () => (
    <div className="inner">
        <div className="top margin">
            <Heading primary light style={{ marginBottom: '100px' }}>Let's craft your product</Heading>
        </div>
        <Formik
            validateOnBlur
            initialValues={{
                radio: '',
                checkbox: '',
                name: '',
                company: '',
                email: '',
                budget: '',
                project: ''
            }}
            onSubmit={values => console.log(values)}
        // validationSchema={ }
        >
            {({ errors, touched }) => (
                <Form className="info flex">
                    <div className="left">
                        <Heading secondary light>Timeframe</Heading>
                        <div id="my-radio-group">
                            {choices.map(choice =>
                                <label key={choice} className="radio-btn">
                                    <Field type="radio" name="radio" value={choice} />
                                    {choice}
                                </label>
                            )}
                        </div>
                        <Heading secondary light>Project type</Heading>
                        <div id="checkbox-group"></div>
                        <div role="group" aria-labelledby="checkbox-group">
                            {checkboxes.map(checkbox =>
                                <label key={checkbox} className="radio-btn">
                                    <Field type="checkbox" name="checkbox" value={checkbox} />
                                    {checkbox}
                                </label>
                            )}
                        </div>
                    </div>
                    <div className="right">
                        <Heading secondary light>Personal Details</Heading>
                        <div className="contact-info">
                            <div className="mr">
                                <StyledInputField error={errors.Name && touched.Name ? 'error' : null} id="Name" name="Name" placeholder="Name" />
                                <StyledInputField error={errors.Company && touched.Company ? 'error' : null} id="Company" name="Company" placeholder="Company" />
                                <StyledInputField error={errors.Email && touched.Email ? 'error' : null} id="Email" name="Email" placeholder="Email" type="email" />
                                <StyledInputField error={errors.Budget && touched.Budget ? 'error' : null} id="Budget" name="Budget" placeholder="Budget" />
                            </div>
                            <div className="yz" style={{ width: "100%" }}>
                                <Field error={errors.Project && touched.Project ? 'error' : null} id="Project" name="Project" placeholder="Project" component={StyledTextArea} />
                            </div>
                        </div>
                    </div>
                    <Button style={{ alignSelf: 'flex-end', position: 'absolute', right: '0' }} type="submit">Send enquiry</Button>
                </Form>
            )}
        </Formik>
    </div>
)

export default FormOne