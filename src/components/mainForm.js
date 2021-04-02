import React from 'react'
import { Formik, Field, Form } from 'formik'
import './mainForm.css'
import Button from './button'

const MainForm = ({onSubmit}) => {
    const choices = ['Your Great Project', 'Meeting for a coffee', 'Birds and Bees', 'Plan a video call']
    return (
        <Formik
            initialValues={{
                choice: choices[0]
            }}
            onSubmit={value => onSubmit(value)}
        >
            <Form>
                <div id="my-radio-group">
                    {
                        choices.map((choice) =>
                            <label key={choice} className="radio-label">
                                <Field type="radio" name="choice" value={choice}></Field>
                                {choice}
                            </label>
                        )
                    }
                </div>
                <Button type="submit">Next</Button>
            </Form>
        </Formik >
    )
}

export default MainForm