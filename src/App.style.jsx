import styled from "styled-components";

export const StyledArticle = styled.article`
  background-color: #fff;
  padding: 20px 30px;
  h1 {
    font-size: 26px;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 4px;
  }
  a {
    text-decoration: none;
    color: #f4877d;
  }
`;

export const StyledSignupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 14px;
  button {
    width: calc(50% - 10px);
  }
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const StyledParagraph = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 24px;
  text-align: center;
`;

export const StyledImageBackground = styled.section`
  display: none;
  background-image: url("https://svgshare.com/i/_gZ.svg%27%20title=%27illustration");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-origin: content-box;
  background-color: #f4877d;
  width: 100%;
  padding: 60px 60px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      margin-top: -20px;
    }
    p {
      align-self: center;
      max-width: 200px;
      margin-bottom: -20px;
      color: #fff;

      text-align: center;
    }
  }
`;

export const StyledChildrenWrapper = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  border-radius: 14px;
  overflow: hidden;
  border: 2px solid #ff2323;
  section:nth-child(2) {
    background-color: #fff;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    section {
      width: 50%;
    }
  }
`;
