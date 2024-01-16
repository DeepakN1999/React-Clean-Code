import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { Link } from "react-router-dom";
import React from "react";

const Products = () => {

  const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

  return (
    <Container>
      {popularProducts.map((item) => (
        <Link to={`/productDetails/${item.id}`} key={item.id}>
          <Product item={item} key={item.id} />
        </Link>
      ))}
    </Container>
  );
};

export default Products;
