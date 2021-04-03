import * as Yup from 'yup'

const OtherFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, 'Too Short!')
        .max(50, 'Too Long!')
        .required(),
    email: Yup.string().email('Invalid email').required('Required'),
    topic: Yup.string()
        .min(1, 'Too Short!')
        .max(50, 'Too Long!')
        .required(),
})

export default OtherFormSchema