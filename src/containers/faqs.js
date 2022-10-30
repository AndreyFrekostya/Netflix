import React, { useState, useMemo} from 'react'
import Accordion from '../components/accordion'
import faqsData from '../fixtures/faqs.json'
import {Link} from 'react-router-dom';
import OptForm from '../components/opt-form'
const Faqscontainer = () => {
  const [Item1, setItem1]=useState(false)
  const [Item2, setItem2]=useState(false)
  const [Item3, setItem3]=useState(false)
  const [Item4, setItem4]=useState(false)
  const [Item5, setItem5]=useState(false)
  let Itemarr=[Item1, Item2,Item3,Item4,Item5]
  let setItemarr=[setItem1,setItem2,setItem3,setItem4,setItem5]
  const checkToggle=(index)=>{
    setItem1(false)
    setItem2(false)
    setItem3(false)
    setItem4(false)
    setItem5(false)
    if(index===1){
      setItem1(!Item1)
    }
    if(index===2){
      setItem2(!Item2)
    }
    if(index===3){
      setItem3(!Item3)
    }
    if(index===4){
      setItem4(!Item4)
    }
    if(index===5){
      setItem5(!Item5)
    }

  }
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item, index) =>{
          let State='Item'+index
          let setState='setItem'+index
          return(
            <Accordion.Item key={item.id} state={Itemarr[index]} setState={setItemarr[index]} index={index+1} checkToggle={checkToggle}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion.Frame>
      <OptForm>
        <OptForm.Title>Ready to watch? Enter your email to create or restart your membership.</OptForm.Title>
        <OptForm.Form>
            <OptForm.Input></OptForm.Input>
            <Link to='./signin' style={{textDecoration: 'none'}}>
              <OptForm.Button>
                Get started
              </OptForm.Button>
            </Link>
        </OptForm.Form>
      </OptForm>
    </Accordion>
  )
}

export default Faqscontainer