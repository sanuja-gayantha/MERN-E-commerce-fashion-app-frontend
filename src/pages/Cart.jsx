import React from 'react'
import styled from 'styled-components'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { mobile } from "../responsive";


const Container = styled.div`

`
const Wrapper = styled.div`
    padding:20px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    padding:20px;
    font-weight:300;
    text-align:center;
    background-color: #eee;
    ${mobile({ marginTop: "10px" })}
`
const Top = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between; 
    margin-bottom:20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid black;
  
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" ? "white" : "black"};
  transition:all 0.5s ease;

//   &:hover{
//     background-color: #f8f4f4;
//     color:black;
// }
`;

const TopTexts = styled.div`
    display: flex;
    ${mobile({ display: "none" })}
`
const TopText = styled.div`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display:flex;
    justify-content: center; 
    ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
    flex:3;

`
const Product = styled.div`
    display:flex;
    justify-content: space-between; 
    ${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
    flex:2;
    display:flex;
`
const Image = styled.img`
    width:200px;

`
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content: space-around; 

`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color}
`
const ProductSize = styled.span`

`
const PriceDetails = styled.span`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: center; 
    flex-direction:column;
`
const ProductAmountContainer = styled.div`
    display:flex;
    align-items: center;
    margin-bottem:20px;
`
const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({ margin: "15px" })}
`
const ProductPrice = styled.div`
    font-size:30px;
    font-weight:200;
    ${mobile({ marginBottom: "20px" })}
`
const Hr = styled.hr`
    display:none;
    ${mobile({ display:"flex", marginBottom: "20px",backgroundColor: "#555", border:"none",height:"1px"})}
`


const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:20px;
    padding: 20px;
    height:50vh;
    max-width:400px;
`

const SummaryTitle =styled.h1`
    font-weight:200;

`

const SummaryItem =styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};

`

const SummaryItemText =styled.span`


`

const SummaryItemPrice =styled.span`


`

const SummaryButton =styled.button`
    width:100%;
    padding:10px;
    font-weight: 600;
    cursor: pointer;
    border: 2px solid black;
    background-color:  black;
    color:white;
`

const Cart = () => {
  return (
    <Container>
        <Title>YOUR BAG</Title>
        <Wrapper>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>  
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>          
            </Top>
            <Bottom>
                <Info>

                    <Product>
                        
                        <ProductDetail>                
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                            <Details>
                                <ProductName>
                                    <b>Product:</b> JESSIE THUNDER SHOES
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> 93813718293
                                </ProductId>
                                <ProductColor color="black"/>
                                <ProductSize>
                                    <b>Size:</b> 37.5
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetails>
                    </Product>

                    <Hr/>
                    <Product>
                        <ProductDetail>                
                            <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                            <Details>
                                <ProductName>
                                    <b>Product:</b> JESSIE THUNDER SHOES
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> 93813718293
                                </ProductId>
                                <ProductColor color="gray"/>
                                <ProductSize>
                                    <b>Size:</b> M
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Cart