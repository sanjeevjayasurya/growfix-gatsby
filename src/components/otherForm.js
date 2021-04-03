import { Field, Form, Formik } from 'formik'
import * as React from 'react'
import OtherFormSchema from '../validators/otherFormValidator'
import Button from './button'
import Heading from './heading'
import './otherForm.css'
import { StyledInputField, StyledTextArea } from './textComponents'

const OtherForm = ({ heading, subheading, onSubmit }) => {
    return (
        <div className="inner">
            <Heading primary light style={{ marginBottom: '100px' }}>{heading}</Heading>
            <Formik
                validateOnBlur
                initialValues={{
                    name: '',
                    email: '',
                    topic: ''
                }}
                validationSchema={OtherFormSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Heading secondary light>{subheading}</Heading>
                        <div className="contact-info">
                            <div className="margin-right">
                                <StyledInputField error={errors.name && touched.name ? 'error' : null} id="name" name="name" placeholder="Name" />
                                <StyledInputField error={errors.email && touched.email ? 'error' : null} id="email" name="email" placeholder="Email" type="email" />
                            </div>
                            <div className="textarea-container">
                                <Field error={errors.topic && touched.topic ? 'error' : null} id="topic" name="topic" placeholder="Topic" component={StyledTextArea} />
                            </div>
                        </div>
                        <Button style={{ alignSelf: 'flex-end', position: 'absolute', right: 0 }} type="submit">Send enquiry</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}


export default OtherForm