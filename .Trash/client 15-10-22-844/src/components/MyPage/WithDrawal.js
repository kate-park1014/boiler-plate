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
  margin-top: 10px;
  padding: 20px;
  cursor: grab;
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
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

const WithDrawal = () => {
  const [logOut, setLogOut] = useState(false);

  const openModalHandler = (e) => {
    setLogOut(!logOut);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {logOut ? "Opened!" : "회원탈퇴"}
        </ModalBtn>
        {logOut ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <div>회원탈퇴 되었습니다.</div>
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

export default WithDrawal;
