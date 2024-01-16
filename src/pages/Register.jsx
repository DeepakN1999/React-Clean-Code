import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import NavBar from "../components/Navbar"


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?cs=srgb&dl=pexels-godisable-jacob-1154861.jpg&fm=jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate(); // Initialize history for redirection

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    // Regular expression for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();

    // Validate email before creating an account
    if (!validateEmail(userData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    // Clear previous email error if any
    setEmailError("");

    // Store user data in local storage
    localStorage.setItem("user", JSON.stringify(userData));
    // Display alert and redirect to login page
    alert("User created!");
    navigate("/login"); // Redirect to your login page route
  };

  return (
    <>
      <NavBar />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleCreateAccount}>
            <Input
              placeholder="username"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
            />
            <Input
              placeholder="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
            {emailError && <span style={{ color: "red" }}>{emailError}</span>}
            <Input
              type="password"
              placeholder="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button type="submit">CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};
export default Register;