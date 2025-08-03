import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 80vh;
`;

export const ContainerHeader = styled.div`
  width: 100%;
  height: 12rem;
  position: fixed;
  top: 0;

  display: grid;
  padding-bottom: 3rem;
  place-content: center;
  justify-items: end;
  background-color: var(--primary-color);
  cursor: default;

  h1 {
    color: #fff;
    font-size: 3.2rem;

    @media (max-width: 760px) {
      font-size: 2.8rem;
    }
  }

  span {
    color: var(--white-color);
    text-align: center;
    letter-spacing: 0.3rem;
    font-size: 0.9rem;
  }
`;

export const ContainerMain = styled.div`
  width: 50rem;
  max-width: 90%;
  margin: 0 auto;
  overflow: hidden;
`;

export const HeaderMain = styled.div`
  position: fixed;
  top: 10rem;
  left: 50%;
  width: 100%;
  height: 5rem;
  transform: translate(-50%);

  background-color: white;

  border-radius: 0.5rem;
  box-shadow: 2px 2px 4px hsla(0, 0%, 0%, 0.6);

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    font-size: 1.8rem;
  }

  #show,
  #insert {
    cursor: pointer;
    transition: linear 0.1s;
  }

  #insert {
    color: #999;
  }

  #insert:hover {
    color: #333;
    transform: scale(1.03);
  }

  #show {
    font-size: 1.5rem;
    color: #999;

    &:hover {
      transform: scale(1.03);
      color: #333;
    }

    @media (max-width: 760px) {
      font-size: 1.2rem;
    }
  }
`;

export const ContainerCardMain = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 17rem 0 5rem;
  padding-top: 1rem;
  overflow: hidden;
`;

export const CardStyle = styled.div`
  display: grid;
  place-content: center;
  width: 28rem;
  padding: 2rem;
  border-radius: 0.5rem;
  margin-bottom: 3rem;
  border: solid;
  background-color: transparent;
  box-shadow: 0.5rem 0.5rem 1rem #00000040;
  transition: linear 0.1s;

  &:hover {
    box-shadow: 0.5rem 0.5rem 1rem #00000080;
    background-color: #f9f9f9;
    cursor: default;
  }

  border-width: ${(props) =>
    props.$status === "expired" ? "0.2rem" : "0.1rem"};

  border-color: ${(props) =>
    props.$status === "expired"
      ? "#cb0e0e"
      : props.$status === "monthExpired"
      ? "#f5c400"
      : "#cccccc"};

  h4 {
    text-align: center;
    text-transform: uppercase;
    word-wrap: break-word;
    color: ${(props) =>
      props.$status === "expired"
        ? "#cb0e0e"
        : props.$status === "monthExpired"
        ? "#f5c400"
        : "var(--primary-color)"};
  }

  h5 {
    text-align: center;
    margin-bottom: 1rem;
    border-bottom: solid 0.1rem #00000030;
    padding: 0.5rem 0 1rem;
  }

  h5 p {
    font-weight: 600;
    color: #14d114;
  }

  h5 p span {
    font-weight: 500;
    color: #333;
  }

  #expiredDate,
  #amount,
  #lot {
    color: ${(props) => (props.$status === "expired" ? "#cb0e0e" : "#444}")};
    font-weight: ${(props) => (props.$status === "expired" ? "500" : "400")};
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: #444;
  }

  p + p {
    margin-top: 0.3rem;
  }

  strong {
    color: var(--black-color);
    font-weight: 800;
  }
`;

export const ContainerFooter = styled.div`
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0%;
    left: 50%;
    width: 100%;
    height: 5rem;

    background-color: var(--primary-color);
    transform: translateX(-50%);
    text-align: center;
    font-size: 1rem;
    z-index: 999;
    color: var(--white-color);
  }
`;
