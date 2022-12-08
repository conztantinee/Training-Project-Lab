import React from 'react'
import styled from 'styled-components'
import {Badge}  from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlined from '@material-ui/icons/Search';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Container=styled.div`
height: 60px;
background-color: cornflowerblue;
`;

const Wrapper=styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
`;
const Language=styled.span`
font-size: 14px;
cursor: pointer;
`;
const SearchContainer=styled.div`
border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;`;

const Input = styled.input`
border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Left=styled.div`
flex: 1;
display:flex;
align-items: center;`;
const Center=styled.div`
flex: 1;
text-align: center;`;
const Right=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;`;

const Nav = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>  
        <Wrapper>
        <Left>
        <Language>EN</Language>
        <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "green", fontSize: 16 }}/>
          </SearchContainer> 
        </Left>
        <Center> <Logo>eBookShop</Logo> </Center>
        <Right>
          <Link to="/register">
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login">
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>  
        </Right>    
        </Wrapper>    
    </Container>
  )
}

export default Nav