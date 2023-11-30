import React from "react";
import {
  NavbarContainer,
  Wrapper,
  LogoContainer,
  MenuContainer,
  MenuItem,
  MobileContainer,
} from "./style";

import { FaBars, FaTimes } from "react-icons/fa";
import "./links.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollNavbar, setScrollNavbar] = useState(false);

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
          <h2>
            Mi <span>Tienda</span>
          </h2>
        </LogoContainer>
        <MobileContainer onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileContainer>
        <MenuContainer mobile={showMobileMenu} scrolled={scrollNavbar}>
          <MenuItem>
            <Link
              className="Link"
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="Link"
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              All items
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="Link"
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Mens's
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="Link"
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Women's
            </Link>
          </MenuItem>
        </MenuContainer>
      </Wrapper>
    </NavbarContainer>
  );
};

export default Navbar;
