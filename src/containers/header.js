import React from 'react'
import Header from '../components/header/index'
import * as ROUTES from '../constans/routes'
import logo from '../logo.svg'
const HeaderContainer = ({children, ...restProps}) => {
  return (
    <Header>
        <Header.Frame>
            <Header.Logo src={logo}  to={ROUTES.HOME}/>
            <Header.Button to={ROUTES.SIGNIN}>Sign In</Header.Button>
        </Header.Frame>
        {children}
    </Header>
  )
}

export default HeaderContainer