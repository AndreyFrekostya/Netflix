import React from 'react'
import {Link} from 'react-router-dom';
import JumbotronContainer from '../containers/jumbotron'
import FooterContainer from '../containers/footer'
import Faqscontainer from '../containers/faqs'
import HeaderContainer from '../containers/header'
import Feature from '../components/feature'
import OptForm from '../components/opt-form'
const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
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
        </Feature>
      </HeaderContainer>
      <JumbotronContainer/>
      <Faqscontainer/>
      <FooterContainer/>
    </>
  )
}

export default Home