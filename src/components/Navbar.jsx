//import { MuiThemeProvider, SvgIcon } from '@material-ui/core';
//import {Search } from '@material-ui/icons';

//import { Badge } from '@material-ui/core'
//import { Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  background-color:black;
  color:white;
  height:60px
`
const Wrapper=styled.div`
  padding:10px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

const Left=styled.div`
  flex:1;
  justify-content:center;
  display:flex;
  align-items:center;
`

const Language=styled.div`
  font-size:10;
  margin:10px;
  cursor:pointer;
  `
const SearchContainer=styled.div`
  margin-left:25px;
  display: flex;
  align-items: center;
  border:0.5px solid lightblue;
  padding: 1px;
  background-color:white;
`
const Input=styled.input`border:None`

const Center=styled.div`
  flex:1;
  text-align:center;
`

const Logo=styled.h1`font-weight:bold`

const Right=styled.div`
  flex:1;
  display:flex;
  justify-content: flex-end;
  align-items: center;
`
const MaterialItem=styled.div`
  cursor: pointer;
  font-weight: 14px;
  margin-left: 25px;
`

const Navbar = () => {
  return (
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input/>
              <Search style={{color:'blue',fontSize:14}}/>
            </SearchContainer>
            
          
          </Left>
          <Center><Logo>Harsha.</Logo></Center>
          <Right>
              <MaterialItem> Register </MaterialItem>
              <MaterialItem> SIGN IN </MaterialItem>
              <MaterialItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon/>
                </Badge>
              </MaterialItem>
          </Right>
        </Wrapper>
        
      </Container>
  )
}

export default Navbar