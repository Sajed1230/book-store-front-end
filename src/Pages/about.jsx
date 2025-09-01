import React from "react";
import styled, { keyframes } from "styled-components";

// ====================== Animations ======================
const headerSlideIn = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const textPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const sectionFadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const lineGrow = keyframes`
  to { transform: scaleX(1); }
`;

const cardFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const iconRotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const memberSlideUp = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`;

const avatarBounce = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

// ====================== Styled Components ======================
const PageHeader = styled.section`
  height: 60vh;
  background: linear-gradient(
    135deg,
    rgba(52, 152, 219, 0.9),
    rgba(41, 128, 185, 0.9)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeaderContent = styled.div`
  max-width: 900px;
  padding: 0 2rem;
  animation: ${headerSlideIn} 1.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 3rem;
  }

  h1 {
    font-size: 3rem;
    color: white;
    margin-bottom: 0.5rem;
    animation: ${textPulse} 2s ease-in-out infinite;
  }

  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const HeaderImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid white;
  object-fit: cover;
  animation: ${avatarBounce} 2s ease-in-out infinite;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const MainContent = styled.main`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ContentSection = styled.section`
  margin-bottom: 4rem;
  animation: ${sectionFadeIn} 1s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 3px;
    background: linear-gradient(45deg, #3498db, #2980b9);
    bottom: -10px;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    animation: ${lineGrow} 1s ease-out 0.5s forwards;
  }
`;

const ContentText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2rem;
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const MissionCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${cardFloat} 3s ease-in-out infinite;

  &:hover {
    transform: translateY(-15px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  p {
    color: #7f8c8d;
    line-height: 1.6;
  }
`;

const MissionIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #3498db, #2980b9);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  animation: ${iconRotate} 4s linear infinite;
`;

const TeamSection = styled.section`
  background: #f8f9fa;
  padding: 5rem 0;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamMember = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  animation: ${memberSlideUp} 0.8s ease-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const MemberAvatar = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #e74c3c, #c0392b);
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  animation: ${avatarBounce} 2s ease-in-out infinite;
`;

const MemberName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.div`
  color: #3498db;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Footer = styled.footer`
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 2rem 0;
`;

// ====================== Component ======================
export default function About() {
  return (
    <>
      <PageHeader>
        <HeaderContent>
          <HeaderImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebbwLCCCIf4C0ucJGDN0DGbVGyRr-Zqku5w&s"
            alt="My Photo"
          />
          <div>
            <h1>About Our Library</h1>
            <p>
              Discover our story, mission, and the passionate team behind Modern
              Library
            </p>
          </div>
        </HeaderContent>
      </PageHeader>

      <MainContent>
        <Container>
          <ContentSection>
            <SectionTitle>Our Story</SectionTitle>
            <ContentText>
              Modern Library was founded with a simple yet powerful vision: to
              make knowledge accessible to everyone, everywhere. What started as
              a small collection of digital books has grown into a comprehensive
              platform serving thousands of readers worldwide.
            </ContentText>
            <ContentText>
              Today, we pride ourselves on being more than just a digital
              library. We are a community of learners, dreamers, and knowledge
              seekers who believe that books have the power to transform lives
              and shape the future.
            </ContentText>
          </ContentSection>

          <ContentSection>
            <SectionTitle>Our Mission</SectionTitle>
            <MissionGrid>
              <MissionCard>
                <MissionIcon>📖</MissionIcon>
                <h3>Accessibility</h3>
                <p>
                  Making quality literature and educational resources available
                  to everyone, regardless of location or economic status.
                </p>
              </MissionCard>
              <MissionCard>
                <MissionIcon>🌍</MissionIcon>
                <h3>Global Reach</h3>
                <p>
                  Connecting readers from around the world and fostering a
                  global community of knowledge sharing.
                </p>
              </MissionCard>
              <MissionCard>
                <MissionIcon>💡</MissionIcon>
                <h3>Innovation</h3>
                <p>
                  Continuously improving our platform with the latest technology
                  to enhance the reading experience.
                </p>
              </MissionCard>
            </MissionGrid>
          </ContentSection>

          <TeamSection>
            <SectionTitle>Meet Our Team</SectionTitle>
            <TeamGrid>
              <TeamMember>
                <MemberAvatar>👨‍💼</MemberAvatar>
                <MemberName>John Smith</MemberName>
                <MemberRole>Chief Librarian</MemberRole>
                <MemberBio>
                  With over 15 years in library science, John leads our content
                  curation and ensures quality across our collection.
                </MemberBio>
              </TeamMember>
              <TeamMember>
                <MemberAvatar>👩‍💻</MemberAvatar>
                <MemberName>Sarah Johnson</MemberName>
                <MemberRole>Technology Director</MemberRole>
                <MemberBio>
                  Sarah oversees our platform development and user experience,
                  bringing innovative solutions to digital reading.
                </MemberBio>
              </TeamMember>
              <TeamMember>
                <MemberAvatar>👨‍🎨</MemberAvatar>
                <MemberName>Mike Chen</MemberName>
                <MemberRole>Community Manager</MemberRole>
                <MemberBio>
                  Mike builds and nurtures our reading community, organizing
                  events and fostering connections between readers.
                </MemberBio>
              </TeamMember>
              <TeamMember>
                <MemberAvatar>👩‍📚</MemberAvatar>
                <MemberName>Emily Davis</MemberName>
                <MemberRole>Content Specialist</MemberRole>
                <MemberBio>
                  Emily curates our book recommendations and manages
                  relationships with publishers and authors.
                </MemberBio>
              </TeamMember>
            </TeamGrid>
          </TeamSection>
        </Container>
      </MainContent>

      <Footer>
        <p>&copy; 2024 Modern Library. All rights reserved.</p>
      </Footer>
    </>
  );
}
