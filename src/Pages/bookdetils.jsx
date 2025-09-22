"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import axios from "axios";

// ===== Animations =====
const coverSlideIn = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;
const bookHover = keyframes`
  0%, 100% { transform: rotateY(0deg) scale(1); }
  50% { transform: rotateY(5deg) scale(1.02); }
`;
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;
const buttonPulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.7); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(52, 152, 219, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(52, 152, 219, 0); }
`;
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const pop = keyframes`
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0; }
`;

// ===== Styled Components =====
const PageWrapper = styled.div`
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  color: #333;
  padding: 2rem;
  margin-top: 5%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
`;
const BookDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;
const BookCoverSection = styled.div`
  text-align: center;
  animation: ${coverSlideIn} 1s ease-out;
`;
const BookCoverLarge = styled.div`
  width: 300px;
  height: 450px;
  border-radius: 15px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  animation: ${bookHover} 4s ease-in-out infinite;
  background: ${(props) =>
    props.image
      ? `url(${props.image}) center/cover no-repeat`
      : "linear-gradient(120deg, #e74c3c 20%, #c0392b 40%, #e74c3c 60%, #c0392b 80%)"};
  &:hover {
    transform: rotateY(10deg) scale(1.05);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 768px) {
    width: 250px;
    height: 375px;
  }
`;
const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;
const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s;
  }
  &:hover::before {
    left: 100%;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;
const PrimaryButton = styled(Button)`
  background: linear-gradient(45deg, #3498db, #2980b9);
  color: white;
  animation: ${buttonPulse} 2s infinite;
`;
const SecondaryButton = styled(Button)`
  background: linear-gradient(45deg, #2ecc71, #27ae60);
  color: white;
`;
const BookInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  & > * {
    animation: ${fadeInUp} 0.8s ease forwards;
    opacity: 0;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
  }
  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.6s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.8s;
  }
  & > *:nth-child(5) {
    animation-delay: 1s;
  }
  & > *:nth-child(6) {
    animation-delay: 1.2s;
  }
`;
const BookTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;
const BookMeta = styled.div`
  font-size: 1rem;
  color: #555;
`;
const BookDescription = styled.p`
  margin-top: 1rem;
  white-space: pre-line;
`;
const PDFWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 80vh;
  border: 2px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
`;

// ===== Loader Overlay =====
const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.85);
  z-index: 9999;
  flex-direction: column;
`;
const Spinner = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: ${spin} 1s linear infinite;
`;
const SuccessMessage = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #27ae60;
  animation: ${pop} 1s ease forwards;
`;

// Special loading overlay for fetching book
const FetchLoaderOverlay = styled(LoaderOverlay)`
  background: rgba(255, 255, 255, 0.9);
`;
const LoadingText = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  color: #3498db;
  font-weight: bold;
  animation: ${fadeInUp} 1s ease-in-out infinite alternate;
`;

// ===== Download Button Component =====
const DownloadButton = ({ pdfUrl }) => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    setDone(false);
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "book.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      setDone(true);
      setTimeout(() => {
        setLoading(false);
        setDone(false);
      }, 2000);
    } catch (err) {
      console.error("Download failed:", err);
      setLoading(false);
    }
  };

  return (
    <>
      <SecondaryButton onClick={handleDownload}>
        ⬇️ Download PDF
      </SecondaryButton>

      {loading && (
        <LoaderOverlay>
          {!done ? (
            <>
              <Spinner />
              <p style={{ marginTop: "10px" }}>Downloading your book...</p>
            </>
          ) : (
            <SuccessMessage>✅ Download Complete!</SuccessMessage>
          )}
        </LoaderOverlay>
      )}
    </>
  );
};

// ===== Component =====
const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://book-store-back-end-fyy3.onrender.com/books/${id}`
        );

        // fix Cloudinary link for PDF embed
        let pdfUrl = response.data.pdf;
        if (pdfUrl.includes("/upload/")) {
          pdfUrl = pdfUrl.replace("/upload/", "/upload/fl_attachment/");
        }
        setBook({ ...response.data, pdf: pdfUrl });
      } catch (err) {
        console.error("Error fetching book details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  if (loading)
    return (
      <FetchLoaderOverlay>
        <Spinner />
        <LoadingText>Fetching book details...</LoadingText>
      </FetchLoaderOverlay>
    );

  if (!book) return <p>Book not found</p>;

  return (
    <PageWrapper>
      <BookDetailContainer>
        <BookCoverSection>
          <BookCoverLarge image={book.image}>
            {!book.image && book.title}
          </BookCoverLarge>
          <ActionButtons>
            <PrimaryButton onClick={() => setShowPdf((prev) => !prev)}>
              📖 {showPdf ? "Hide Reader" : "Read Online"}
            </PrimaryButton>
            <DownloadButton pdfUrl={book.pdf} />
          </ActionButtons>
        </BookCoverSection>

        <BookInfoSection>
          <BookTitle>{book.title}</BookTitle>
          <BookMeta>Author: {book.author}</BookMeta>
          <BookMeta>Genre: {book.genre}</BookMeta>
          <BookMeta>Year: {book.year}</BookMeta>
          <BookMeta>Pages: {book.pages}</BookMeta>
          <BookMeta>Language: {book.language}</BookMeta>
          <BookDescription>{book.description}</BookDescription>
        </BookInfoSection>
      </BookDetailContainer>

      {showPdf && (
        <PDFWrapper>
          <iframe
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(
              book.pdf
            )}&embedded=true`}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title={book.title}
          />
        </PDFWrapper>
      )}
    </PageWrapper>
  );
};

export default BookDetails;
