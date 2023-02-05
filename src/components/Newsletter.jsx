import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

import { mobile } from "../responsive";

const Container = styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
`
const Description = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgray;
    ${mobile({ width: "80%" })}

`
const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`
const Button = styled.button`
    flex:1;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#2879fe;
    cursor:pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder="Enter your email.."/>
            <Button>
                <IconButton aria-label="send newsletter">
                    <SendIcon style={{color:"white"}} />
                </IconButton>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter