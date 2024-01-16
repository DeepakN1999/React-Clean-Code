import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import NavBar from "../components/Navbar"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://content.api.news/v3/images/bin/22445f138e6a286cd9318cfed730a7a8")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // Initialize useNavigate for redirection
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    // Check if the entered credentials match the stored data
    if (
      storedUserData &&
      storedUserData.email === loginData.email &&
      storedUserData.password === loginData.password
    ) {
      // Display alert and navigate to home page
      localStorage.setItem("IsLoggedIn", true);
      alert("Login successful!");
      navigate("/"); // Navigate to your home page route
    } else {
      // Display alert for unsuccessful login
      alert("Invalid email or password. Please try again.");
    }
  };
  return (
    <>
      <NavBar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form onSubmit={handleLogin}>
            <Input
              placeholder="email"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
            />
            <Input
              placeholder="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
            />
            <Button type="submit">LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link href="/register">CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};
export default Login;