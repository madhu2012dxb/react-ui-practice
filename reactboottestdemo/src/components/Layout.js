import React from 'react'
//import {Container} from 'react-bootstrap'
//better wayt to import
//import Container from 'react-bootstrap/Container'
import Container from 'react-bootstrap/Container'
export const Layout=(props)=>(
    <Container>
    {props.children}
    </Container>
)

//it center the childrenc compoents nad handles flow direction