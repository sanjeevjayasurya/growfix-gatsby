import styled from 'styled-components'

const Button = styled.button`
    color: rgba(255,255,255,.75);
    background-color: transparent;
    display: inline-block;
    padding: 12px 32px;
    font-size: 18px;
    line-height: 1!important;
    text-align: center;
    text-decoration: none;
    border: 2px solid #fff;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover{
        color: #2eaff0;
        background-color: #fff;
        border-color: #fff;
    }
`

export default Button