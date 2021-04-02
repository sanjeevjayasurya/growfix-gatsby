import * as Yup from 'yup'

const FormOneSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, 'Too Short!')
        .max(50, 'Too Long!')
        .required(),
    company: Yup.string()
        .min(1, 'Too Short!')
        .max(50, 'Too Long!')
        .required(),
    email: Yup.string().email('Invalid email').required('Required'),
    budget: Yup.string()
        .min(1, 'Too Short!')
        .max(50, 'Too Long!')
        .required(),
    project: Yup.string()
        .min(1, 'Too Short!')
        .max(50, 'Too Long!')
        .required(),
})

export default FormOneSchema