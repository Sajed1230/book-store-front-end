import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import toast from "react-hot-toast";

// ====================== Animations ======================
const formSlideIn = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const inputSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const buttonGlow = keyframes`
  from { box-shadow: 0 0 20px rgba(231, 76, 60, 0.3); }
  to { box-shadow: 0 0 30px rgba(231, 76, 60, 0.6); }
`;

const infoSlideIn = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const cardFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const iconSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const mapSlideUp = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`;

const mapPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`;

const titleFadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const faqSlideIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// ====================== Styled Components ======================
const PageContainer = styled.div`
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
`;

const Main = styled.main`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactForm = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${formSlideIn} 1s ease-out;

  .form-title {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 2rem;
    text-align: center;
  }

  .form-group {
    margin-bottom: 2rem;
    animation: ${inputSlideUp} 0.8s ease-out;

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #2c3e50;
      font-weight: 500;
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      border: 2px solid #ecf0f1;
      border-radius: 10px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: #f8f9fa;

      &:focus {
        outline: none;
        border-color: #3498db;
        background: white;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(52, 152, 219, 0.2);
      }
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }
  }

  .submit-btn {
    width: 100%;
    padding: 1rem 2rem;
    background: linear-gradient(45deg, #e74c3c, #c0392b);
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    animation: ${buttonGlow} 2s ease-in-out infinite alternate;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`;

const Spinner = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: ${spin} 1s linear infinite;
  display: inline-block;
  margin-left: 8px;
`;

const ContactInfo = styled.div`
  animation: ${infoSlideIn} 1s ease-out;
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
`;

const InfoCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${cardFloat} 3s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 1s;
  }
  &:nth-child(3) {
    animation-delay: 2s;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
  p {
    color: #7f8c8d;
    line-height: 1.6;
  }
`;

const InfoIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #3498db, #2980b9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
  animation: ${iconSpin} 4s linear infinite;
`;

const MapSection = styled.section`
  background: #f8f9fa;
  padding: 5rem 0;
  margin-top: 5rem;
`;

const MapContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${mapSlideUp} 1s ease-out;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(45deg, #ecf0f1, #bdc3c7);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
  animation: ${mapPulse} 2s ease-in-out infinite;
`;

const FAQSection = styled.section`
  padding: 5rem 0;
`;

const FAQTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
  animation: ${titleFadeIn} 1s ease-out;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${faqSlideIn} 0.8s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  .faq-question {
    font-size: 1.1rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  .faq-answer {
    color: #7f8c8d;
    line-height: 1.6;
  }
`;

const Footer = styled.footer`
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 2rem 0;
`;

// ====================== Component ======================
const GetInTouch = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/contact", data);
      console.log(response.data);
      toast.success("Message sent successfully!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <Main>
        <Container>
          <ContactGrid>
            <ContactForm>
              <h2 className="form-title">Send us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p style={{ color: "red" }}>{errors.name.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    {...register("subject", { required: "Subject required" })}
                  />
                  {errors.subject && (
                    <p style={{ color: "red" }}>{errors.subject.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    {...register("message", { required: "Message required" })}
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <p style={{ color: "red" }}>{errors.message.message}</p>
                  )}
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? (
                    <>
                      Sending <Spinner />
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </ContactForm>

            <ContactInfo>
              <InfoTitle>Get in Touch</InfoTitle>
              <InfoCards>
                <InfoCard>
                  <InfoIcon>📍</InfoIcon>
                  <h3>Visit Us</h3>
                  <p>
                    123 Library Street
                    <br />
                    Knowledge City, KC 12345
                    <br />
                    United States
                  </p>
                </InfoCard>
                <InfoCard>
                  <InfoIcon>📞</InfoIcon>
                  <h3>Call Us</h3>
                  <p>
                    Phone: +1 (555) 123-4567
                    <br />
                    Fax: +1 (555) 123-4568
                    <br />
                    Mon-Fri: 9AM-6PM
                  </p>
                </InfoCard>
                <InfoCard>
                  <InfoIcon>✉️</InfoIcon>
                  <h3>Email Us</h3>
                  <p>
                    info@modernlibrary.com
                    <br />
                    support@modernlibrary.com
                    <br />
                    We reply within 24 hours
                  </p>
                </InfoCard>
              </InfoCards>
            </ContactInfo>
          </ContactGrid>
        </Container>

        <MapSection>
          <Container>
            <MapContainer>
              <h2>Find Our Location</h2>
              <MapPlaceholder>🗺️ Interactive Map Coming Soon</MapPlaceholder>
              <p>
                Located in the heart of Knowledge City, our library is easily
                accessible by public transportation and offers ample parking for
                visitors.
              </p>
            </MapContainer>
          </Container>
        </MapSection>

        <FAQSection>
          <Container>
            <FAQTitle>Frequently Asked Questions</FAQTitle>
            <FAQGrid>
              <FAQItem>
                <div className="faq-question">
                  What are your operating hours?
                </div>
                <div className="faq-answer">
                  Our digital library is available 24/7. Our support team is
                  available Monday through Friday, 9 AM to 6 PM EST.
                </div>
              </FAQItem>
              <FAQItem>
                <div className="faq-question">How do I create an account?</div>
                <div className="faq-answer">
                  Simply click on the "Sign Up" button on our homepage and
                  follow the registration process. It's free and takes less than
                  2 minutes.
                </div>
              </FAQItem>
              <FAQItem>
                <div className="faq-question">
                  Can I download books for offline reading?
                </div>
                <div className="faq-answer">
                  Yes! Most of our books are available for download and offline
                  reading through our mobile app and desktop application.
                </div>
              </FAQItem>
              <FAQItem>
                <div className="faq-question">Do you offer audiobooks?</div>
                <div className="faq-answer">
                  Absolutely! We have a growing collection of audiobooks across
                  various genres, all available for streaming and download.
                </div>
              </FAQItem>
            </FAQGrid>
          </Container>
        </FAQSection>
      </Main>

      <Footer>
        <Container>
          <p>&copy; 2024 Modern Library. All rights reserved.</p>
        </Container>
      </Footer>
    </PageContainer>
  );
};

export default GetInTouch;
