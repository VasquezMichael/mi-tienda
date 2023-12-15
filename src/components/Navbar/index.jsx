import React from "react";
import {
  NavbarContainer,
  Wrapper,
  LogoContainer,
  MenuContainer,
  MenuItem,
  MobileContainer,
  MobileAndCartContainer,
} from "./style";

import { FaBars, FaTimes } from "react-icons/fa";
import CartWidget from "../CartWidget";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../CartContext/CartContext";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const { prueba } = useCartContext();

  useEffect(() => {
    const handleScrolled = () => {
      const isScrolling = window.scrollY > 100;
      setScrollNavbar(isScrolling);
    };
    window.addEventListener("scroll", handleScrolled);

    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <NavbarContainer className={scrollNavbar ? "Scrolled" : ""}>
      <Wrapper>
        <LogoContainer>
          <h2>MI TIENDA</h2>
        </LogoContainer>
        <MobileAndCartContainer>
          <MobileContainer onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileContainer>
          <NavLink to="/cart">
            <CartWidget />
          </NavLink>
        </MobileAndCartContainer>

        <MenuContainer mobile={showMobileMenu} scrolled={scrollNavbar}>
          <MenuItem>
            <NavLink
              className="Link"
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Home
            </NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink
              className="Link"
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              All items
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              className="Link"
              activeClass="active"
              to="/category/mens"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Men's
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              className="Link"
              activeClass="active"
              to="/category/womens"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Women's
            </NavLink>
          </MenuItem>
        </MenuContainer>
      </Wrapper>
    </NavbarContainer>
  );
};

export default Navbar;
