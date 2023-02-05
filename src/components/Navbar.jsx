import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { mobile } from "../responsive";


const Container = styled.div`
  height:60px;
  ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
  padding:10px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  ${mobile({padding:"10px 0px"})}
`

const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
`
const SearchContainer = styled.div`
  display:flex;
  margin-left:25px;
  height:30px;
  background-color:white;
  border:2px solid lightgray;
  ${mobile({marginLeft:"10px"})}
`

const Input = styled.input`
  border:none;
  padding-left:20px;
  ${mobile({width:"50px"})}
`
const ButtonContainer = styled.button`
    flex:1;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:white;
    cursor:pointer;
    width:55px;

`

const Language = styled.span`
  font-size:14px;
  cursor:pointer;
  ${mobile({display:"none"})}
`

const Center = styled.div`
  flex:1;
  text-align:center;
`
const Logo = styled.h1`
  font-weight:bold;
  ${mobile({fontSize:"20px",marginLeft:"10px"})}
`

const Right = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  ${mobile({justifyContent:"center", flex:3})}
`

const MenuItem = styled.div`
  font-size:14px;
  curser:pointer;
  margin-left:25px;
  ${mobile({fontSize:"12px",marginLeft:"10px"})}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <ButtonContainer>
              <Button variant="text">
                    <SearchIcon style={{color:"black"}} />
                </Button>
            </ButtonContainer>
          </SearchContainer>
        </Left>
        <Center><Logo>VIBY.</Logo></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
          <IconButton aria-label="cart">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar