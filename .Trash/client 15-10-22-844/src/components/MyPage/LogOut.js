import React, { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ModalBackdrop = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 700px;
  background-color: rgb(0, 0, 0, 0.8);
`;

const ModalBtn = styled.button`
  padding: 20px;
  cursor: grab;
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  width: 500px;
  height: 150px;
  > .btn {
    cursor: pointer;
    margin-left: 10px;
  }
`;

const LogOut = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isOpen ? "Opened!" : "로그아웃"}
        </ModalBtn>
        {isOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <div>로그아웃 되었습니다.</div>
              <button className="btn" onClick={openModalHandler}>
                Home
              </button>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};

export default LogOut;
