import { Link, NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaBookOpen, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

// floating animation for logo
const logoFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ scrolled }) =>
    scrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.95)"};
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none"};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: ${logoFloat} 3s ease-in-out infinite;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    height: 100vh;
    width: 70%;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: right 0.3s ease;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: linear-gradient(45deg, #3498db, #2980b9);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: #3498db;
    transform: translateY(-2px);
  }

  &.active {
    color: #2980b9;
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar scrolled={scrolled}>
      <NavContainer>
        <Logo to="/">
          <FaBookOpen />
          Modern Library
        </Logo>

        <Hamburger onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </Hamburger>

        <NavLinks open={open}>
          <li>
            <StyledNavLink to="/" end onClick={() => setOpen(false)}>
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about" onClick={() => setOpen(false)}>
              About
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/popularbooks" onClick={() => setOpen(false)}>
              Popular Books
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/getintouch" onClick={() => setOpen(false)}>
              Contact
            </StyledNavLink>
          </li>
        </NavLinks>
      </NavContainer>
    </Navbar>
  );
}
