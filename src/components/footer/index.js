import React from 'react'
import {Container, Header, Break, Column,Link,Row, Text} from './styles/footer'
const Footer = ({children, ...restProps}) => {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

Footer.Header=function FooterHeader({children, ...restProps}){
  return(
    <Header {...restProps}>{children}</Header>
  )
}
Footer.Break=function FooterBreak({children, ...restProps}){
  return(
    <Break {...restProps}/>
  )
}
Footer.Column=function FooterColumn({children, ...restProps}){
  return(
    <Column {...restProps}>{children}</Column>
  )
}
Footer.Link=function FooterLink({children, ...restProps}){
  return(
    <Link {...restProps} onClick={e=>e.preventDefault()}>{children}</Link>
  )
}
Footer.Row=function FooterRow({children, ...restProps}){
  return(
    <Row {...restProps}>{children}</Row>
  )
}
Footer.Text=function FooterText({children, ...restProps}){
  return(
    <Text {...restProps}>{children}</Text>
  )
}
export default Footer