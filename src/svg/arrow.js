import * as React from 'react'

const Arrow = ({ color }) => (
    <svg xmlns="https://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12">
        <path className="arrow-vector" fill={color ? color : "#fff"} fillRule="evenodd" d="M120.828427,16.6568542 L111,16.6568542 L111,18.6568542 L120.828427,18.6568542 L117.585786,21.8994949 L119,23.3137085 L124.656854,17.6568542 L123.949747,16.9497475 L119,12 L117.585786,13.4142136 L120.828427,16.6568542 Z" transform="translate(-111 -12)"></path>
    </svg>
)

export default Arrow