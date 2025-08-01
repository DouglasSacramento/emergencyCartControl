import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 80vh;
`;

export const ContainerHeader = styled.div`
  width: 100%;
  height: 10.5rem;
  position: fixed;
  top: 0;

  display: grid;
  padding-bottom: 3rem;
  place-content: center;
  background-color: var(--primary-color);

  h1 {
    color: #fff;
    font-size: 3.2rem;

    @media (max-width: 760px) {
      font-size: 2.4rem;
    }
  }

  span {
    color: var(--white-color);
    text-align: center;
    letter-spacing: 0.3rem;
    font-size: 1.4rem;

    @media (max-width: 760px) {
      font-size: 1rem;
    }
  }
`;

export const ContainerMain = styled.div`
  width: 90rem;
  max-width: 90%;
  margin: 0 auto;
  overflow: hidden;
`;

export const HeaderMain = styled.div`
  position: fixed;
  top: 8rem;
  left: 50%;
  width: 90rem;
  max-width: 96%;
  height: 5rem;
  transform: translate(-50%);

  background-color: white;

  border-radius: 0.5rem;
  box-shadow: 2px 2px 4px hsla(0, 0%, 0%, 0.6);

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    font-size: 1.8rem;

    @media (max-width: 760px) {
      font-size: 1.4rem;
    }
  }

  #show,
  #insert {
    cursor: pointer;
  }

  #show:hover,
  #insert:hover,
  #delete:hover,
  #update:hover {
    color: var(--primary-color);
    transform: scale(1.05);
  }
`;

export const ContainerCardMain = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 2rem;
  margin: 15rem 0 6rem;
  padding-top: 1rem;
  overflow: hidden;
`;

export const CardStyle = styled.div`
  display: grid;
  place-content: center;
  width: 28rem;
  padding: 2rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  border: solid;
  background-color: transparent;
  box-shadow: 0.3rem 0.3rem .8rem #00000060;
  transition: linear 0.1s;

  &:hover {
    box-shadow: 0.3rem 0.3rem .8rem #00000090;
    transform: scale(1.01);
    cursor: default;
  }

  border-width: ${(props) =>
    props.$status === "expired" || props.$status === "monthExpired"
      ? "0.2rem"
      : "0.1rem"};

  border-color: ${(props) =>
    props.$status === "expired"
      ? "#cb0e0e"
      : props.$status === "monthExpired"
      ? "#f5c400"
      : "#cccccc"};

  h4 {
    text-align: center;
    word-wrap: break-word;
    margin-bottom: 0.8rem;
    color: ${(props) =>
      props.$status === "expired"
        ? "#cb0e0e"
        : props.$status === "monthExpired"
        ? "#f5c400"
        : "var(--primary-color)"};
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

  #amount {
    margin-bottom: 0.8rem;
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
