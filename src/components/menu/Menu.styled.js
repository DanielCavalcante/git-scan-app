import styled from "styled-components";

export const Menu = styled.div`
  background-color: #fefefe;
  width: 238px;
  height: 538px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  div.brandingContainer {
    height: 70px;
    width: 100%;

    h1 {
      color: #2c5eff;
      font-size: 28px;
    }

    img.branding {
      width: 40px;
      height: 40px;
      float: left;
      margin: 0 10px 0 20px;
    }
  }
`;

export const Options = styled.div`
  font-size: 15px;
  line-height: 22px;
  background-color: #fefefe;

  div.optionsContainer {
    div.active {
      float: left;
      width: 236px;
      height: 62px;
      background-color: #f7f8fc;

      div.status {
        width: 2px;
        height: 62px;
        background-color: #2c5eff;
        float: left;
        display: block;
      }

      span {
        color: #2c5eff;
        margin-top: 8%;
      }

      img.active {
        float: left;
        margin: 8% 16px auto 32px;
      }
    }

    span {
      display: block;
      cursor: pointer;
    }
  }
`;
