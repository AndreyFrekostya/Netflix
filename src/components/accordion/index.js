import React, { useState, createContext, useContext, useEffect } from 'react'
import {Container, Inner, Title, Item, Header, Frame, Body } from './styles/accordion'
const ToggleContext = createContext();
const Accordion = ({children, ...restProps}) => {
  return (
    <Container>
        <Inner>{children}</Inner>
    </Container>
  )
}
Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};
Accordion.Title=function AccordionTitle({children, restProps}) {
    return(
        <Title {...restProps}>{children}</Title>
    )
}
Accordion.Item=function AccordionItem({children,state,setState,checkToggle, index, ...restProps}) {
    const [toggleShow, setToggleShow]=useState(state)
    const setToggle=()=>{
        checkToggle(index)
    }
    useEffect(() => {
        setToggleShow(state)
    }, [state])
    
    return(
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item onClick={setToggle} {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header=function AccordionHeader({children,  ...restProps}) {
    const {toggleShow} = useContext(ToggleContext);
    return(
        <Header {...restProps}>
            {children}
            {toggleShow ? (
                <img src='../images/icons/close-slim.png'></img>
            ) : (
                <img src='../images/icons/add.png'></img>
            ) }
        </Header>
    )
}
Accordion.Body= function AccordionBody({children, ...restProps}){
    const {toggleShow}=useContext(ToggleContext)
    return (
        <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
          <span>{children}</span>
        </Body>
      );
}

export default Accordion