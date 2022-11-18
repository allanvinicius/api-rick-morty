import styled from "styled-components";

export const Card = styled.div`
  .image {
    width: 100%;
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 4px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text {
    margin-top: 1.6rem;

    h2 {
      font-size: 1.8rem;
    }

    ul {
      margin-top: 1.6rem;
      display: flex;
      align-items: center;

      li {
        display: block;
        font-size: 1.4rem;
        font-weight: 400;

        &:last-child {
          &::before {
            content: "";
            width: 0.4rem;
            height: 0.4rem;
            background-color: #ffffff;
            opacity: 0.4;
            display: inline-block;
            border-radius: 50%;
            margin: 0 0.8rem;
            vertical-align: middle;
          }
        }
      }
    }
  }
`;
