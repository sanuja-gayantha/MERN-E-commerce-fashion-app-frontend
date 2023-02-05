import React from 'react'
import styled from 'styled-components'

import IconButton from '@mui/material/IconButton';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Pinterest from '@mui/icons-material/Pinterest';
import Room from '@mui/icons-material/Room';
import Phone from '@mui/icons-material/Phone';
import MailOutline from '@mui/icons-material/MailOutline';

import { mobile } from "../responsive";



const Container = styled.div`
    display:flex;
    // background-color:pink;
    ${mobile({ flexDirection: "column", fontSize:"14px" })}
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1`

`
const Description = styled.p`
    margin:20px 0px;
`
const SocialContainer = styled.div`
    display:flex;

`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor:pointer;
    ${mobile({ width: "30px", height:"30px" })}
`

const Center = styled.div`
    flex:1;
    padding:20px;
`

const Title = styled.h3`
    margin-bottom:30px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`

const Right = styled.div`
    flex:1;
    padding:20px;
`

const ContactItem = styled.div`
    margin-bottom:10px;
    display:flex;
    align-items: center;
`

const Payment = styled.img`
    width:75%;
    // background-color:whitesmoke;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>VIBY.</Logo>
            <Description>
                VIBY is a fashion ecommerce website that offers a wide selection of trendy and stylish clothing for both men and women. Whether you're looking for a new outfit for work or a night out, VIBY has something for everyone.
            </Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F"> 
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms & conditions</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 655 Dixie Path , South Tobinchester 60200
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +94 23 456 7890
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}} /> contact@viby.com
            </ContactItem>
            <Payment src="https://i.ibb.co/frXdDvy/index.png" />
        </Right>
    </Container>
  )
}

export default Footer