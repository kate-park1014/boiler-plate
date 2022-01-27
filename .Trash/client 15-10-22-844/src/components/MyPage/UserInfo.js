import React from "react";
import styled from "styled-components";

const UserInfoDiv = styled.div`
  border: 1px solid;
  width: 300px;
  height: 200px;
  text-align: center;
  align-items: center;
  padding: 30px 0;
  margin: 20px auto;
`;

function UserInfo({userInfo}) {
  const {email,username,mobile} = userInfo
  return (
    <div>
      <UserInfoDiv>
        <h1>User Info</h1>
        <p>YOURNAME :{username}</p>
        <p>EMAIL :{email}</p>
        <p>MOBILE :{mobile}</p>
      </UserInfoDiv>
    </div>
  );
}

export default UserInfo;
