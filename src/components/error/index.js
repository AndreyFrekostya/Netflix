import React from 'react'
import { Container, Title } from './styles/error'
const Error = ({children, ...restProps}) => {
  return (
    <Container>
        {children}
    </Container>
  )
}
Error.Title=function ErrorTitle({children, ...restProsp}){
    return <Title>{children}</Title>
}

export default Error