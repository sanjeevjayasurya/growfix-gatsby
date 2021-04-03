import * as React from 'react'
import FormOne from './formOne'
import OtherForm from './otherForm'

const onSubmit = e => {
    document.location.href = "/submit"
}


const FormFactory = ({ choice }) => {
    let pickedChoice = choice.choice
    if (pickedChoice === 'Your Great Project') {
        return <FormOne></FormOne>
    }
    else if (pickedChoice === 'Meeting for a coffee') {
        return <OtherForm onSubmit={onSubmit} heading="We like coffee too! ☕️" subheading="Personal details"></OtherForm>
    }
    else if (pickedChoice === 'Birds and Bees') {
        console.log('choice picked')
        return <OtherForm onSubmit={onSubmit} heading="What's on your mind?" subheading="Personal details"></OtherForm>
    }
    else if (pickedChoice === "Plan a video call") {
        return <OtherForm onSubmit={onSubmit} heading="Let's plan a video call! 🎥" subheading="Personal details"></OtherForm>
    }
    return null
}

export default FormFactory