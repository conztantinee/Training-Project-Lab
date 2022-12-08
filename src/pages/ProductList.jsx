import styled from "styled-components";
import Nav from "../components/Nav";
import Products from "../components/Products";
import React from "react";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  
`;
const Option = styled.option``;



const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Nav/>     
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="Author" onChange={handleFilters}>
            <Option disabled selected>
              author
            </Option>
            <Option>A</Option>
            <Option>B</Option>
            <Option>C</Option>
            <Option>D</Option>
            <Option>E</Option>
          </Select>
          <Select name="genre" onChange={handleFilters}>
            <Option disabled selected>
              genre
            </Option>
            <Option>A</Option>
            <Option>B</Option>
            <Option>C</Option>
          </Select>
        </Filter>
        <Filter>
        <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      
    
    </Container>
  );
};

export default ProductList;