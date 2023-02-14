import Search from '@mui/icons-material/Search'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'
import styled from 'styled-components'


/*const Circle=styled.div`
    width: 40%;
    height: 30%;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`*/
const Image=styled.img`
    height: 75%;
    max-width:80%;
    object-fit:contain;
    z-index:2;
    
`
const Info=styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  opacity: 0;
  transition: all 0.3s easy;
  cursor: pointer;
`
const Container=styled.div`
   flex:1;
   margin: 5px;
   min-width: 280px;
   height: 350px;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   background-color:gray;
   position: relative;
   &:hover{
    opacity: 0.9;
   }
   &:hover ${Info}{
    opacity:1;
   }
`
const Icon=styled.div`
    background-color:white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:10px;
    transition: all 0.3s ease;

    &:hover{
      background-color: #cec3c3;
      transform: scale(1.2);
    }
`


const Product = ({item}) => {
  return (
    <Container>
      {/*<Circle/>*/}
      <Image src={item.img}/>
      
      <Info>
        <Icon>
            <ShoppingCartOutlined/>
        </Icon>
        <Icon>
            <Search/>
        </Icon>
        <Icon>
            <FavoriteBorderIcon/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
