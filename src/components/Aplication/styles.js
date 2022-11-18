import styled from "styled-components";

export const SectionApi = styled.section`
  padding-top: 6rem;
  padding-bottom: 6rem;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    h1 {
      font-size: 3.2rem;
      font-weight: 700;
      color: #ffff;
    }

    span {
      font-size: 1.6rem;
      opacity: 0.6;
    }
  }

  .grid-character {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 3rem;
    row-gap: 3rem;
    margin-top: 4.8rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5b1fa6;
    width: 30rem;
    height: 6.5rem;
    border-radius: 6px;
    cursor: pointer;
    margin: 0 auto;

    font-size: 1.8rem;
    margin-top: 4.8rem;
    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Loader = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2022;
  background-color: #040011;
  display: flex;
  align-items: center;
  justify-content: center;
`;
