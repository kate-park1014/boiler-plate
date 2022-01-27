import React from "react";
import LogOut from "./LogOut";
import WithDrawal from "./WithDrawal";
import styled from "styled-components";

const ButtonDiv = styled.div`
  text-align: center;
  align-items: center;
  padding: 20px 0;
  margin: 0 auto;
`;

function Button() {
  return (
    <div>
      <ButtonDiv>
        <LogOut />
        <WithDrawal />
      </ButtonDiv>
    </div>
  );
}

export default Button;
