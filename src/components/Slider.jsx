import React, {useState} from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data';
import { mobile } from "../responsive";


const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
    ${mobile({ display: "none" })}
`

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;

    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};

    margin:auto;
    curser:pointer;
    opacity:0.7;
    z-index:2;
`

const Wrapper = styled.div`
    height:100%;
    display:flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s;
    `
const Slide = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
    background-color: #${props => props.bg}
`
const ImgContainer = styled.div`
    height:100%;
    flex:1;
    // width:50vw;
    display:flex;
    align-items:center;
    justify-content:center;    
`
const Image = styled.img`
    height:calc(100vh - 90px);
`

const InfoContainer = styled.div`
    flex:1;
    // width:50vw;
    padding:50px;
`

const Title = styled.h1`
    font-size:70px;
`
const Description = styled.p`
    margin:50px 0px; 
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`
const Button = styled.button`
    padding:10px;
    font-size:20px;
    background-color:#2879fe;
    cursor:pointer;
    border:none;
    color:white;
`

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
  }

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
            ))}

        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider