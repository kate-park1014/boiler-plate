import React from "react";
import styled from "styled-components";

const Form = styled.form`
  border: 1px solid;
  width: 400px;
  text-align: center;
  align-items: center;
  padding: 20px 0;
  margin: 0 auto;
`;

const FlexDiv = styled.div`
  display: flex;
`;
const H3 = styled.h3`
  margin-left: 15px;
`;

const Input = styled.input`
  margin-left: 10px;
  margin-top: 15px;
  width: 200px;
  height: 30px;
`;

const Button = styled.button`
  padding: 20px;
  cursor: grab;
  margin-top: 10px;
`;

function ChangePassword() {
  return (
    <div>
      <Form>
        <h2>비밀번호를 변경 할 수 있습니다.</h2>
        <FlexDiv>
          <H3>현재 비밀번호 : </H3>
          <Input type="text" placeholder="Old password" />
        </FlexDiv>
        <FlexDiv>
          <H3>새 비밀번호 : </H3>
          <Input type="text" placeholder="New password" />
        </FlexDiv>
        <FlexDiv>
          <H3>새 비밀번호 확인 : </H3>
          <Input type="text" placeholder="Confirm password" />
        </FlexDiv>
        <Button>비밀번호 변경</Button>
      </Form>
    </div>
  );
}

export default ChangePassword;
