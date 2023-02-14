import styled from "styled-components"

const Container=styled.div`
    flex:1;
    margin: 3px;
    height:50vh;
    position: relative;
`
const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    //opacity: 0.8;
`
const Info=styled.div`
     position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
`
const Title=styled.h1`
    color:aqua;
    margin:20px; 
    text-shadow : 0 0 3px #FF0000, 0 0 5px #0000FF;
`
const Button=styled.button`
    //border:none;
    padding:10px;
    background-color: #f4fafa;
    color: gray;
    font-weight: 600;
    cursor: pointer;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
