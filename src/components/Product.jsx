import styled from "styled-components";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Prize = styled.h3`
  font-size:20px;
   color:white;
`;

const Product = ({ item }) => {
  return (
    <>
      <Container>
        <Image src={item.img}></Image>
        <Link to={`/productDetails/${item.id}`} >
          <Info >
            <Prize>PRIZE : ${item.amount}</Prize>
          </Info>
        </Link>
      </Container>

    </>
  );
};

export default Product;
