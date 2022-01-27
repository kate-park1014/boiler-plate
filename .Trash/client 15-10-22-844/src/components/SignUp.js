import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

const Div = styled.div`
  background-color: pink;
  width: 1300px;
  height: 800px;
`;

const Form = styled.form`
  background-color: aliceblue;
  width: 600px;
  height: 500px;
  display: flex;
  text-align: center;
  align-items: center;
  margin: auto;
`;

const Box = styled.div`
  text-align: center;
  align-items: center;
  padding: 50px 0;
`;
const Fieldset = styled.fieldset`
  width: 400px;
  height: 350px;
  text-align: center;
  align-items: center;
  margin: auto;
`;

const InputDiv = styled.div`
  padding-top: 40px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 200px;
  margin: 10px 0;
`;

const Button = styled.button`
  margin: 10px;
  margin-top: 30px;
`;

const Alert = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  text-align: center;
  align-items: center;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

function Signup() {
  // 회원가입여부
  const [signup, setSignup] = useState(false)

  const [userinfo, setuserinfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  //const history = useHistory();
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const handleSignup = (event) => {
    event.preventDefault()
    if (
      userinfo.username === "" ||
      userinfo.email === "" ||
      userinfo.password === "" ||
      userinfo.confirmPassword === "" ||
      userinfo.mobile === ""
    ) {
      setErrorMessage("모든 항목은 필수입니다");
    } else if (userinfo.password !== userinfo.confirmPassword) {
      setErrorMessage("비밀번호가 같지 않습니다.");
    } else {
      axios.post("https://localhost:5000/signup", {
        email: userinfo.email,
        password: userinfo.password,
        username: userinfo.username,
        mobile: userinfo.mobile,
      })
      .then(result => {
        console.log(result)
        setSignup(true)
      })
    }
  };

  return signup ? 
  (<div><h1>회원가입이 완료되었습니다.</h1>
   <button exact path ='/login' Link to ='/login'>로그인하러가기</button>
  </div>)
  :
  (
    <Div>
      <Box>
        <p>회원가입 하시겠습니까?</p>
        <p>회원 가입을 하시면 캘린더에 자신의 색깔을 넣을 수 있습니다!</p>
        <p>지금 시작해 보세요!</p>
      </Box>
      <Form>
        <Fieldset>
          <legend>Sign up for a free account</legend>
          <InputDiv>
            <Input
              type="text"
              onChange={handleInputValue("username")}
              placeholder="Username"
            />
            <Input
              type="text"
              onChange={handleInputValue("email")}
              placeholder="Email address"
            />
            <Input
              type="text"
              onChange={handleInputValue("password")}
              placeholder="Create password"
            />
            <Input
              type="text"
              onChange={handleInputValue("confirmPassword")}
              placeholder="Confirm password"
            />
            <Input
              type="text"
              onChange={handleInputValue("mobile")}
              placeholder="Mobile"
            />
          </InputDiv>
          <Button onClick={handleSignup}>SiGN UP</Button>
          <Link to="/login">
            <Button>LOGIN</Button>
          </Link>
        </Fieldset>
      </Form>
      <Alert>{errorMessage}</Alert>
    </Div>
  );
}

export default Signup;
