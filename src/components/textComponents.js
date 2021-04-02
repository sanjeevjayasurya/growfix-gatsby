import * as React from 'react'
import { Field } from 'formik'
import styled, { css } from 'styled-components'

const StyledInputField = styled(Field)`
    width: 100%;
    border: none;
    outline: none;
    padding: 16px 20px;
    background-color: #f6f8fe;
    border: 2px solid transparent;
    font: inherit;
    line-height: 1.6;
    color: #fff;
    transition: all .25s ease-in-out;
    background-color: rgba(38,169,234,.5);
    border: none;
    border-radius: 2px;
    margin-bottom: 24px;
    ::placeholder{
         color: #A4DAF9;
    }
    :focus{
    transition: all .25s ease-in-out;
    background-color: #26a9ea;
    border: none;
    }

    ${props => props.error && css`
    transition: all .25s ease-in-out;
    background-color: rgba(225,57,93,.6);
    `}
`

const TextArea = ({ field, form, ...props }) => {
    return <textarea {...field} {...props} />;
};

const StyledTextArea = styled(TextArea)`
    width: 100%;
    border: none;
    outline: none;
    padding: 16px 20px;
    background-color: #f6f8fe;
    border: 2px solid transparent;
    font: inherit;
    line-height: 1.6;
    border-radius: 2px;
    transition: all .25s ease-in-out;
    background-color: rgba(38,169,234,.5);
    background-size: 20px 20px;
    background-position: calc(100% - 20px) 22px;
    background-repeat: no-repeat;
    margin-bottom: 24px;
    height: 91%;
    color: #f6f8fe;
    ::placeholder{
         color: #A4DAF9;
    }
    :focus{
    transition: all .25s ease-in-out;
    background-color: #26a9ea;
    border: none;
    }
    ${props => props.error && css`
    transition: all .25s ease-in-out;
    background-color: rgba(225,57,93,.6);
    `}
`

export {
    StyledInputField,
    StyledTextArea
}