import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100vw;
  height: 400px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  text-align: center;
  align-items: center;
  margin: auto;
`;

const ImgBox = styled.div`
  width: 400px;
  height: 200px;
  background-color: gainsboro;
  margin: auto;
`;

const UlBox = styled.div`
  width: 400px;
  height: 200px;
  padding: 50px;
  margin: auto;
`;

const PBox = styled.p`
  float: left;
`;
function home() {
  return (
    <div>
      <Box bgColor="teal">
        <UlBox>
          <PBox>WHAT IS IN YOUR MIND...?</PBox>
          <PBox>PUT THE COLOR WHAT YOU WANT!</PBox>
        </UlBox>
        <ImgBox />
      </Box>
      <Box bgColor="tomato">
        <ImgBox />
        <UlBox>
          <PBox>당신의 마음을 색깔로 나타내 보세요</PBox>
          <PBox>WHAT IS IN YOUR MIND...?</PBox>
          <PBox>PUT THE COLOR WHAT YOU WANT!</PBox>
        </UlBox>
      </Box>
      <Box bgColor="yellow">
        <UlBox>
          <PBox>심플, 단순, 깔끔, 그리고 성공적</PBox>
          <PBox>
            Many desktop pubpshing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the pke).
          </PBox>
        </UlBox>
        <ImgBox />
      </Box>
      <Box bgColor="green">
        <ImgBox />
        <UlBox>
          <PBox>하루를 모아 일년을 만들어보세요!</PBox>
          <PBox>하루일과를 간단하게 기록할 수 있는 색깔 표시!</PBox>
          <PBox>오늘 당신의 마음은 어떠신가요?</PBox>
        </UlBox>
      </Box>
    </div>
  );
}

export default home;
