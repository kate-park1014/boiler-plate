import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Right = styled.div`
  display: flex;
  flex-direction: row;
  float: right;
`;

const LinkDiv = styled.div`
  margin-right: 10px;
`;

function Button() {
  return (
    <Right>
      <LinkDiv>
        <Link to="/login">
          <button>login</button>
        </Link>
      </LinkDiv>
      <LinkDiv>
        <Link to="/signup">
          <button>signup</button>
        </Link>
      </LinkDiv>
    </Right>
  );
}

export default Button;
