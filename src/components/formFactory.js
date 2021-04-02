import * as React from 'react'
import FormOne from './formOne'

const FormFactory = ({ choice }) => {
    let pickedChoice = choice.choice
    if(pickedChoice === 'Your Great Project'){
        return <FormOne></FormOne>
    }
    return null
}

export default FormFactory