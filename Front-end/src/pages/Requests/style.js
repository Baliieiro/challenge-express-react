import styled from "styled-components";

export const Image = styled.img`
  width: 246px;
  height: 354px;
  margin: 11px auto 0;
  display: block;
`;
export const Lista = styled.ul`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Request = styled.div`
  color: #eee;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
  display: flex;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.25);
  padding: 17px 15px 15px 27px;
  border-radius: 14px;
  width: 350px;
  p {
    font-size: 18px;
    font-style: normal;
    background: none;
    font-weight: 300;
    line-height: normal;
    width: max-content;
  }
  p:nth-child(2) {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 29px;
  }
  button {
    display: inline-block;
    background: none;
    border: none;
    img {
      background: none;
    }
  }
`;

export const InfoReq = styled.div`
  background: none;
  flex: 1;
  gap: 29px;
`;
