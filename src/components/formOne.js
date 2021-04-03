import * as React from 'react'
import './formOne.css'
import Heading from './heading'
import { Formik, Field, Form } from 'formik'
import { StyledInputField, StyledTextArea } from './textComponents'
import Button from './button'
import FormOneSchema from '../validators/formOneValidator'

const choices = ['1 month', '2-3 months', '4+ months']
const checkboxes = ['Desktop', 'Web', 'Mobile', 'Others']


const onSubmit = e => {
    document.location.href = "/submit"
}

const FormOne = () => (
    <div className="inner">
        <div className="top margin">
            <Heading primary light style={{ marginBottom: '100px' }}>Let's craft your product</Heading>
        </div>
        <Formik
            validateOnBlur
            initialValues={{
                radio: choices[0],
                checkbox: '',
                name: '',
                company: '',
                email: '',
                budget: '',
                project: ''
            }}
            onSubmit={onSubmit}
            validationSchema={FormOneSchema}
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
                                <StyledInputField error={errors.name && touched.name ? 'error' : null} id="name" name="name" placeholder="Name" />
                                <StyledInputField error={errors.company && touched.company ? 'error' : null} id="company" name="company" placeholder="Company" />
                                <StyledInputField error={errors.email && touched.email ? 'error' : null} id="email" name="email" placeholder="Email" type="email" />
                                <StyledInputField error={errors.budget && touched.budget ? 'error' : null} id="budget" name="budget" placeholder="Budget" />
                            </div>
                            <div style={{ width: "100%" }}>
                                <Field error={errors.project && touched.project ? 'error' : null} id="project" name="project" placeholder="Project" component={StyledTextArea} />
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