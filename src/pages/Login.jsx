import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";



const Container = styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
    display:flex;
    align-items: center;
    justify-content: center; 
`
const Wrapper = styled.div`
    width:30%;
    padding: 20px;
    background-color: white;
    display:flex;
    flex-direction:column;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;
`
const Button = styled.button`
    width:40%;
    padding: 10px;
    border: 2px solid teal;
    background-color: teal;
    cursor: pointer;
    font-weight: 500;
    color:white;
    transition:all 0.5s ease;
    margin:20px 0px;
    &:hover{
        background-color: #f8f4f4;
        color:teal;
    }

`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Button>CREATE</Button>
            </Form>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Wrapper>
    </Container>
  )
}

export default Login