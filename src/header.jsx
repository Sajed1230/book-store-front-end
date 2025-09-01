import { Link, NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaBookOpen } from "react-icons/fa";
import { useEffect, useState } from "react";

// floating animation for logo
const logoFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const Navbar = styled.nav`
margin-bottom: 1%;
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
    display: none;
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
`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar scrolled={scrolled}>
      <NavContainer>
        <Logo to="/">📚 Modern Library</Logo>
        <NavLinks>
          <li>
            <StyledNavLink to="/" end>
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about">About</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/popularbooks">Popular Books</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/GetInTouch">Contact</StyledNavLink>
          </li>
        </NavLinks>
      </NavContainer>
    </Navbar>
  );
}
