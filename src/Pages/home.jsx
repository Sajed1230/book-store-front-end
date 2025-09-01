// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// === Animations ===
const heroFadeIn = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(100vh) rotate(0deg); }
  50% { transform: translateY(-100px) rotate(180deg); }
`;

const cardSlideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const bookRotate = keyframes`
  0%, 100% { transform: rotateY(0deg); }
  50% { transform: rotateY(10deg); }
`;

const numberGlow = keyframes`
  from { text-shadow: 0 0 10px rgba(52, 152, 219, 0.5); }
  to { text-shadow: 0 0 20px rgba(52, 152, 219, 0.8); }
`;

const buttonPulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.7); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(231, 76, 60, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(231, 76, 60, 0); }
`;

const bookBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

// === Styled Components ===
const Hero = styled.section`
  height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(52, 152, 219, 0.9),
    rgba(41, 128, 185, 0.9)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const FloatingBooks = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const Book = styled.div`
  position: absolute;
  width: 40px;
  height: 60px;
  background: linear-gradient(45deg, #3498db, #2980b9);
  border-radius: 3px;
  animation: ${float} 6s ease-in-out infinite;

  &:nth-child(1) {
    left: 10%;
    animation-delay: 0s;
  }
  &:nth-child(2) {
    left: 20%;
    animation-delay: 1s;
  }
  &:nth-child(3) {
    left: 80%;
    animation-delay: 2s;
  }
  &:nth-child(4) {
    left: 90%;
    animation-delay: 3s;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
  animation: ${heroFadeIn} 1.5s ease-out;

  h1 {
    font-size: 3.5rem;
    color: white;
    margin-bottom: 1rem;
    text-shadow: 0 0 25px rgba(255, 255, 255, 0.8);
  }
  p {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #e74c3c, #c0392b);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s ease;
  animation: ${buttonPulse} 2s infinite;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(231, 76, 60, 0.3);
  }
`;

const DesignHead = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  color: white;
  border-radius: 12px;
  margin-bottom: 3rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 2.5rem;
    margin: 0;
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
  }
  p {
    font-size: 1.1rem;
    margin-top: 0.5rem;
    opacity: 0.9;
  }
`;

const Featured = styled.section`
  padding: 5rem 0;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const BookCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${cardSlideUp} 0.6s ease-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const BookCover = styled.div`
  width: 120px;
  height: 180px;
  background: linear-gradient(45deg, #e74c3c, #c0392b);
  margin: 0 auto 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  animation: ${bookRotate} 4s ease-in-out infinite;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

const Stats = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatItem = styled.div``;

const StatNumber = styled.span`
  font-size: 3rem;
  font-weight: bold;
  color: #3498db;
  display: block;
  animation: ${numberGlow} 2s ease-in-out infinite alternate;
`;

const StatLabel = styled.span`
  font-size: 1.1rem;
  margin-top: 0.5rem;
  display: block;
`;

const Footer = styled.footer`
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 2rem 0;
`;

// Loader styled components
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
`;

const LoaderBook = styled.div`
  width: 30px;
  height: 45px;
  background: ${(props) => props.color || "#3498db"};
  border-radius: 2px;
  animation: ${bookBounce} 0.6s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || "0s"};
`;

// === Component ===
const Home = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/books");
        setBooks(response.data.slice(0, 4)); // only first 4 books
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Failed to load books.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero>
        <FloatingBooks>
          <Book />
          <Book />
          <Book />
          <Book />
        </FloatingBooks>
        <HeroContent>
          <h1>Welcome to Modern Library</h1>
          <p>
            Discover thousands of books, explore new worlds, and expand your
            knowledge with our digital collection
          </p>
          <CTAButton href="/popularbooks">Explore Our Collection</CTAButton>
        </HeroContent>
      </Hero>

      {/* Featured Books */}
      <Featured>
        <Container>
          <DesignHead>
            <h2>📚 Featured Books</h2>
            <p>Hand-picked classics and must-reads just for you</p>
          </DesignHead>

          {loading && (
            <LoaderWrapper>
              <LoaderBook color="#e74c3c" delay="0s" />
              <LoaderBook color="#f1c40f" delay="0.1s" />
              <LoaderBook color="#2ecc71" delay="0.2s" />
              <LoaderBook color="#9b59b6" delay="0.3s" />
            </LoaderWrapper>
          )}
          {error && <p>{error}</p>}

          <BooksGrid>
            {books.map((book) => (
              <BookCard
                key={book._id}
                onClick={() => navigate(`/bookdetails/${book._id}`)}
              >
                <BookCover>
                  {book.image ? (
                    <img src={book.image} alt={book.title} />
                  ) : (
                    book.title
                  )}
                </BookCover>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </BookCard>
            ))}
          </BooksGrid>
        </Container>
      </Featured>

      {/* Stats Section */}
      <Stats>
        <Container>
          <StatsGrid>
            <StatItem>
              <StatNumber>500+</StatNumber>
              <StatLabel>Books</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>200+</StatNumber>
              <StatLabel>Authors</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>1000+</StatNumber>
              <StatLabel>Readers</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>50+</StatNumber>
              <StatLabel>Genres</StatLabel>
            </StatItem>
          </StatsGrid>
        </Container>
      </Stats>

      <Footer>© 2025 Modern Library. All rights reserved.</Footer>
    </>
  );
};

export default Home;
