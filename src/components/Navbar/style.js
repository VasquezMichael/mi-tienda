import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: #2c3e50;
  width: 100%;
  height: 90px;
  min-width: 400px;
  z-index: 100;
  position: fixed;
  transition: all 0.3s ease-in-out;

  &.Scrolled {
    height: 80px;
    opacity: 0.9;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

export const LogoContainer = styled.div`
  span {
    font-size: 1.7rem;
    color: #999999;
  }
`;

export const MenuContainer = styled.ul`
  background-color: #2c3e50;
  width: 35%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style: none;
  position: absolute;
  top: ${({ scrolled }) => (scrolled ? "80px" : "90px")};
  left: ${({ mobile }) => (mobile ? "0" : "-60%")};
  align-items: center;
  transition: all 0.3s ease-in-out;
  color: #999999;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  font-size: 1.2rem;
  :hover {
    color: #ecf0f1;
  }
`;

export const MobileContainer = styled.div`
  cursor: pointer;
`;
