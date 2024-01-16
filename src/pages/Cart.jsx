import React from "react";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
const Container = styled.div``;
const Wrapper = styled.div`
 padding: 20px;
 ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
 font-weight: 300;
 text-align: center;
`;
const Top = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 20px;
`;
const TopTexts = styled.div`
 ${mobile({ display: "none" })}
`;
const TopText = styled.span`
 text-decoration: underline;
 cursor: pointer;
 margin: 0px 10px;
`;
const Bottom = styled.div`
 display: flex;
 ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
 flex: 3;
`;
const Product = styled.div`
 display: flex;
 justify-content: space-between;
 ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
 flex: 2;
 display: flex;
`;
const Image = styled.img`
 width: 200px;
`;
const Details = styled.div`
 padding: 20px;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;

const PriceDetail = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;
const ProductAmountContainer = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 20px;
`;
const ProductAmount = styled.div`
 font-size: 24px;
 margin: 5px;
 ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
 font-size: 30px;
 font-weight: 200;
 ${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
 background-color: #eee;
 border: none;
 height: 1px;
`;
const Summary = styled.div`
 flex: 1;
 border: 0.5px solid lightgray;
 border-radius: 10px;
 padding: 20px;
 height: 50vh;
`;
const SummaryTitle = styled.h1`
 font-weight: 200;
`;
const SummaryItem = styled.div`
 margin: 30px 0px;
 display: flex;
 justify-content: space-between;
 font-weight: ${(props) => props.type === "total" && "500"};
 font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
 width: 100%;
 padding: 10px;
 background-color: black;
 color: white;
 font-weight: 600;
`;
const Cart = ({ cart, addToCart, removeFromCart, clearCart }) => {

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.amount || 0) * (item.quantity || 1), 0);
  };

  const handleCheckout = () => {
    const isConfirmed = window.confirm("Are you sure you want to place the order?");
    if (isConfirmed) {
      clearCart();
      // Clear the cart after the order is successful
      alert("Order successful!");
      // Clear the cart
    }
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopTexts>
            <TopText>Shopping Bag</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((cartProduct, i) => {
                return (
                  <Product key={i}>
                    <ProductDetail>
                      <Image src={cartProduct.img} alt={cartProduct.id} />
                      <Details>
                        <ProductName>
                          <b>Products: {cartProduct.title}</b>
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {cartProduct.id}
                        </ProductId>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Remove onClick={() => removeFromCart(cartProduct.id)} />
                        <ProductAmount>{cartProduct.quantity}</ProductAmount>
                        <Add onClick={() => addToCart(cartProduct)} />
                      </ProductAmountContainer>
                      <ProductPrice>${cartProduct.amount * cartProduct.quantity}</ProductPrice>
                    </PriceDetail>
                  </Product>
                )
              })
            )}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {calculateTotal()}</SummaryItemPrice>
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
              <SummaryItemPrice>$ {calculateTotal()}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={handleCheckout}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default Cart;