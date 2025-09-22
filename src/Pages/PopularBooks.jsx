// BooksSection.jsx
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// ====================== Animations ======================
const cardSlideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const bookFloat = keyframes`
  0%,100% { transform: rotateY(0deg); }
  50% { transform: rotateY(5deg); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// ====================== Styled Components ======================
const BooksSectionContainer = styled.section`
  padding: 5rem 0;
  background: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const BookCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${cardSlideUp} 0.6s ease-out;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const BookCover = styled.img`
  width: 150px;
  height: 220px;
  margin: 0 auto 1.5rem;
  border-radius: 10px;
  object-fit: cover;
  animation: ${bookFloat} 4s ease-in-out infinite;
`;

const BookInfo = styled.div`
  text-align: center;
`;

const BookTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const BookAuthor = styled.p`
  color: #7f8c8d;
  margin-bottom: 1rem;
  font-style: italic;
`;

const BookRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 1rem;
`;

const Star = styled.span`
  color: ${({ filled }) => (filled ? "#f39c12" : "#ccc")};
  font-size: 1.1rem;
`;

const RatingText = styled.span`
  color: #7f8c8d;
  font-size: 0.9rem;
`;

const BookGenre = styled.span`
  display: inline-block;
  background: linear-gradient(45deg, #ecf0f1, #bdc3c7);
  color: #2c3e50;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const BookActions = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

const Btn = styled.button`
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  background: ${({ primary }) =>
    primary
      ? "linear-gradient(45deg, #3498db, #2980b9)"
      : "linear-gradient(45deg, #95a5a6, #7f8c8d)"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

// ====================== Skeleton Loader ======================
const SkeletonCard = styled.div`
  background: ${(props) => props.color || "#eee"};
  border-radius: 20px;
  padding: 1.5rem;
  height: 350px;
  animation: ${shimmer} 1.5s infinite;
  background: linear-gradient(
    90deg,
    #f0f0f0,
    ${(props) => props.color || "#e0e0e0"},
    #f0f0f0
  );
  background-size: 200% 100%;
`;

// ====================== Component ======================
const BooksSection = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://book-store-back-end-fyy3.onrender.com/books") // ✅ Replace with deployed backend for GitHub Pages
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setLoading(false);
      });
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star key={i} filled={i <= rating}>
          ★
        </Star>
      );
    }
    return stars;
  };

  const colors = ["#ffb3ba", "#bae1ff", "#baffc9", "#ffffba", "#ffdfba"];

  return (
    <BooksSectionContainer>
      <SectionTitle>Most Popular Books</SectionTitle>
      <BooksGrid>
        {loading
          ? colors.map((color, idx) => <SkeletonCard key={idx} color={color} />)
          : books.map((book) => (
              <BookCard
                key={book._id}
                onClick={() => navigate(`/bookdetails/${book._id}`)}
              >
                <BookCover src={book.image} alt={book.title} />
                <BookInfo>
                  <BookTitle>{book.title}</BookTitle>
                  <BookAuthor>{book.author}</BookAuthor>
                  <BookRating>
                    {renderStars(book.rating)}
                    <RatingText>({book.rating}/5)</RatingText>
                  </BookRating>
                  <BookGenre>{book.genre}</BookGenre>
                  <BookActions>
                    <Btn
                      primary
                      onClick={(e) => {
                        e.stopPropagation(); // avoid triggering card click
                        navigate(`/bookdetails/${book._id}`);
                      }}
                    >
                      View Details
                    </Btn>
                    <Btn>Add to List</Btn>
                  </BookActions>
                </BookInfo>
              </BookCard>
            ))}
      </BooksGrid>
    </BooksSectionContainer>
  );
};

export default BooksSection;
