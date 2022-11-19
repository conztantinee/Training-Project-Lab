import styled from "styled-components";
import Nav from "../components/Nav";
import Products from "../components/Products";

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
  return (
    <Container>
      <Nav/>
      
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Genres
            </Option>
            <Option>A</Option>
            <Option>B</Option>
            <Option>C</Option>
            <Option>D</Option>
            <Option>E</Option>
          </Select>
          <Select>
            <Option disabled selected>
              B
            </Option>
            <Option>A</Option>
            <Option>B</Option>
            <Option>C</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      
    
    </Container>
  );
};

export default ProductList;