import styled, { css } from 'styled-components'

const Text = styled.p`
    font-size: 20px;
    color: #686b77;
    ${props => props.light && css`
    color: #fff;
`   }
    line-height: 34px;
    top: 1px;
    margin: 0;
`
export default Text
