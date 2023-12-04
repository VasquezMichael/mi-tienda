import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 90px;
  min-width: 400px;
  z-index: 100;
  position: fixed;
  padding: 30px;
  transition: all 0.3s ease-in-out;
  @media screen and (min-width: 640px) {
    padding: 40px;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 70px;
    padding-right: 70px;
  }
  &.Scrolled {
    height: 70px;
    background-color: #ecf0f1;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

export const LogoContainer = styled.div`
  color: #161619;
  @media screen and (min-width: 640px) {
    h2 {
      font-size: 1.8rem;
      span {
        font-size: 2rem;
      }
    }
  }
`;

export const MenuContainer = styled.ul`
  background-color: #ecf0f1;
  width: 40%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style: none;
  position: absolute;
  top: ${({ scrolled }) => (scrolled ? "70px" : "90px")};
  left: ${({ mobile }) => (mobile ? "0" : "-60%")};
  align-items: center;
  transition: all 0.3s ease-in-out;
  color: #161619; //color de texto
  @media screen and (min-width: 640px) {
    position: initial;
    background-color: transparent;
    top: 0;
    left: 0;
    flex-direction: row;
    height: auto;
    justify-content: space-evenly;
    gap: 10px;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  width: 100%;
  padding: 5px;

  .Link {
    width: 100%;
    margin: auto;
    text-align: center;
    font-weight: 400;
    &:hover {
      background-color: #e8e7e6;
    }
  }
`;

export const MobileAndCartContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media screen and (min-width: 640px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  cursor: pointer;
`;
