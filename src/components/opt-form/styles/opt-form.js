import styled from "styled-components/macro";


export const Container=styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 20px;
    flex-wrap: wrap;
    @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    }

`
export const Inner=styled.div`
    max-width:900px;
    width:100%;
`
export const Input=styled.input`
    max-width: 450px;
    width: 100%;
    border: 0;
    padding: 10px;
    outline:none;
    height: 70px;
    box-sizing: border-box;
    @media (max-width: 1000px) {
        height: 50px;
        margin-top:20px;
    }
    &:invalid{
        color:red;
        width:500px;
    }
`
export const Form=styled.form`
    max-height:87px;
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    max-width:900px;
    margin:auto;
    @media (max-width: 600px) {
       flex-direction:column;
       align-items:center;
    }
`
export const Button=styled.button`
    display: flex;
    align-items: center;
    height: 71px;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 25px;
    font-size: 23px;
    border: 0;
    cursor: pointer;
    img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 1000px) {
        width: 16px;
    }
    }
    &:hover {
    background: #f40612;
    }
    @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
    }
    @media (max-width: 600px) {
        height: 50px;
        padding-top:10px;
        padding-bottom:10px;
    }
`
export const Title=styled.h2`
    font-size: 19.2px;
    color: white;
    text-align: center;
    @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
    }
`