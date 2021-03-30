import styled, { css } from 'styled-components'

const Heading = styled.h1`
    margin-bottom: 16px;
    ${props => props.primary && css`
    font-size: 76px;
    line-height: 80px;
    `}
    ${props => props.secondary && css`
    font-size: 28px;
    margin-bottom: 24px;
    `}
    color: #3c424f;
    ${props => props.light && css`
        color: #fff;
    `}    
`

export default Heading
