import React, { createContext, useContext, useState } from 'react'
import { useForm, UseForm} from 'react-hook-form'
import {Container,Inner,Input,Form,Button,Title} from './styles/opt-form'
import Error from '../error'
const ContextForm=createContext()
const OptForm  = ({children, ...restProps}) => {
  return (
    <Container {...restProps}>
        <Inner>{children}</Inner>
    </Container>
  )
}

OptForm.Input= function OptFormInput({children, ...restProps}){
    const [value, setValue]=useState('')
    const setChange=e=>{
        setValue(e.target.value)
    }
    const {register,errors, handleSubmit} = useContext(ContextForm)
    return <Input 
    {...register('email', {required: true, 
    minLength: {
        value: 5,
        message: 'Минимальное количесво символов: 5. Длина текста сейчас: ' + value.length
    }
    })} 
    {...restProps} 
    placeholder='Email adress'
    value={value}
    onChange={setChange}
    />
}
OptForm.Form= function OptFormForm({children, ...restProps}){
    const {register, formState: {errors}, handleSubmit}=useForm({mode: 'onBlur'})
    const onSubmit=(data)=>{
        console.log(data)
    }
    return ( 
        <>
            <Form {...restProps} onSubmit={handleSubmit(onSubmit)}>
                <ContextForm.Provider value={{register,errors,handleSubmit}}>
                    {children}
                </ContextForm.Provider>
            </Form>
            <div>{errors?.email && <Error><Error.Title>{errors?.email?.message || 'Email is required.'}</Error.Title></Error>}</div>
        </> 
            )
}
OptForm.Button= function OptFormButton({children, ...restProps}){
    const {register,errors, handleSubmit} = useContext(ContextForm)
    return (
    <>
        <Button type='submit' {...restProps}> 
        {children}<img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    </>)
    
}
OptForm.Title= function OptFormTitle({children, ...restProps}){
    return <Title {...restProps}> {children}</Title>
}



export default OptForm