import React from 'react'
import { Container,Backgroung,Logo,Button } from './styles/header'
import { Link as  ReactRouterLink } from 'react-router-dom'
const Header = ({bg=true ,children, ...restProps}) => {
  return bg ? (
    <Backgroung {...restProps}>{children}</Backgroung>
  ) : (children)
}
Header.Frame=function HeaderFrame({children, ...restProps}){
    return <Container>{children}</Container>
}
Header.Logo=function HeaderLogo({to, ...restProps}){
    return ( 
      <ReactRouterLink to={to}>
        <Logo { ...restProps}/>
      </ReactRouterLink>
    )
}
Header.Button=function HeaderButton({children,...restProps}){
    return <Button {...restProps}>{children}</Button>
}
export default Header