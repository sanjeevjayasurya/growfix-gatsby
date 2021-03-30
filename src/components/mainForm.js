import React from 'react'
import { Formik, Field, Form } from 'formik'
import './mainForm.css'

const MainForm = () => {
    const choices = ['Your Great Project', 'Meeting for a coffee', 'Birds and Bees', 'Plan a video call']
    return (
        <Formik
            initialValues={{
                choice: choices[0]
            }}
            onSubmit={() => console.log('Submit')}
        >
            <Form>
                <div id="my-radio-group">
                    {
                        choices.map((choice, index) =>
                            <label key={choice} className="radio-label">
                                <Field type="radio" name="choice" value={choice}></Field>
                                {choice}
                            </label>
                        )
                    }
                </div>
            </Form>
        </Formik >
    )
}

export default MainForm