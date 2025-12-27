import React from "react";
import styled, { keyframes } from "styled-components";
import { 
  FaUserTie, 
  FaUserCog, 
  FaUserFriends, 
  FaBookReader,
  FaCode,
  FaUsers,
  FaPalette,
  FaGraduationCap
} from "react-icons/fa";
import { 
  HiCode, 
  HiUserGroup,
  HiAcademicCap
} from "react-icons/hi";
import { 
  MdComputer, 
  MdPeople, 
  MdSchool,
  MdPerson
} from "react-icons/md";

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
  min-height: 50vh;
  height: auto;
  background: linear-gradient(
    135deg,
    rgba(52, 152, 219, 0.9),
    rgba(41, 128, 185, 0.9)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 0;

  @media (min-width: 768px) {
    height: 60vh;
    min-height: 60vh;
    padding: 0;
  }
`;

const HeaderContent = styled.div`
  max-width: 900px;
  padding: 0 1rem;
  animation: ${headerSlideIn} 1.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 3rem;
    padding: 0 2rem;
  }

  h1 {
    font-size: 1.8rem;
    color: white;
    margin-bottom: 0.5rem;
    animation: ${textPulse} 2s ease-in-out infinite;

    @media (min-width: 480px) {
      font-size: 2.5rem;
    }

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);

    @media (min-width: 480px) {
      font-size: 1.1rem;
    }

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const HeaderImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const HeaderImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid white;
  object-fit: cover;
  position: relative;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  animation: ${avatarBounce} 3s ease-in-out infinite;

  @media (min-width: 480px) {
    width: 150px;
    height: 150px;
    border-width: 5px;
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
    border-width: 6px;
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
    }
  }
`;

const HeaderImageGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
  z-index: 1;
  animation: pulseGlow 2s ease-in-out infinite;
  pointer-events: none;

  @keyframes pulseGlow {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.1);
      opacity: 0.8;
    }
  }

  @media (min-width: 480px) {
    width: 170px;
    height: 170px;
  }

  @media (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

const MainContent = styled.main`
  padding: 2rem 0;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 480px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const ContentSection = styled.section`
  margin-bottom: 2rem;
  animation: ${sectionFadeIn} 1s ease-out;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  position: relative;

  @media (min-width: 480px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  &::after {
    content: "";
    position: absolute;
    width: 60px;
    height: 3px;
    background: linear-gradient(45deg, #3498db, #2980b9);
    bottom: -10px;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    animation: ${lineGrow} 1s ease-out 0.5s forwards;

    @media (min-width: 768px) {
      width: 80px;
    }
  }
`;

const ContentText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const MissionCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${cardFloat} 3s ease-in-out infinite;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-15px) scale(1.05);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }
  }

  h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.2rem;

    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }

  p {
    color: #7f8c8d;
    line-height: 1.6;
    font-size: 0.95rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const MissionIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #3498db, #2980b9);
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  animation: ${iconRotate} 4s linear infinite;

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
  }
`;

const TeamSection = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #2980b9, #3498db);
    background-size: 200% 100%;
    animation: gradientShift 3s ease infinite;
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
`;

const TeamMember = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: ${memberSlideUp} 0.8s ease-out;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(52, 152, 219, 0.1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #3498db, #2980b9, #3498db);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-12px) scale(1.02);
      box-shadow: 0 20px 40px rgba(52, 152, 219, 0.15);
      border-color: rgba(52, 152, 219, 0.3);

      &::before {
        transform: scaleX(1);
      }
    }
  }
`;

const MemberAvatar = styled.div`
  width: 100px;
  height: 100px;
  background: ${props => {
    const gradients = {
      purple: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      blue: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
      orange: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      teal: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      default: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    };
    return gradients[props.gradient] || gradients.default;
  }};
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: ${props => {
    const shadows = {
      purple: '0 8px 20px rgba(102, 126, 234, 0.25)',
      blue: '0 8px 20px rgba(52, 152, 219, 0.25)',
      orange: '0 8px 20px rgba(245, 87, 108, 0.25)',
      teal: '0 8px 20px rgba(79, 172, 254, 0.25)',
      default: '0 8px 20px rgba(102, 126, 234, 0.25)'
    };
    return shadows[props.gradient] || shadows.default;
  }};
  border: 4px solid white;

  svg {
    font-size: 2.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    padding: 4px;
    background: ${props => {
      const gradients = {
        purple: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
        blue: 'linear-gradient(135deg, #3498db, #2980b9, #5dade2)',
        orange: 'linear-gradient(135deg, #f093fb, #f5576c, #ff6b6b)',
        teal: 'linear-gradient(135deg, #4facfe, #00f2fe, #43e97b)',
        default: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)'
      };
      return gradients[props.gradient] || gradients.default;
    }};
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
    margin-bottom: 2rem;
    
    svg {
      font-size: 3rem;
      width: 3rem;
      height: 3rem;
    }
  }

  @media (hover: hover) {
    ${TeamMember}:hover & {
      transform: scale(1.1);
      box-shadow: ${props => {
        const shadows = {
          purple: '0 10px 30px rgba(102, 126, 234, 0.4)',
          blue: '0 10px 30px rgba(52, 152, 219, 0.4)',
          orange: '0 10px 30px rgba(245, 87, 108, 0.4)',
          teal: '0 10px 30px rgba(79, 172, 254, 0.4)',
          default: '0 10px 30px rgba(102, 126, 234, 0.4)'
        };
        return shadows[props.gradient] || shadows.default;
      }};
    }

    ${TeamMember}:hover &::after {
      opacity: 1;
    }
  }
`;

const MemberName = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
  }

  @media (hover: hover) {
    ${TeamMember}:hover & {
      color: #3498db;
    }
  }
`;

const MemberRole = styled.div`
  color: #3498db;
  font-weight: 600;
  margin-bottom: 1.25rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  display: inline-block;
  padding: 0.4rem 1rem;
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(41, 128, 185, 0.1));
  border-radius: 20px;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
  }

  @media (hover: hover) {
    ${TeamMember}:hover & {
      background: linear-gradient(135deg, rgba(52, 152, 219, 0.15), rgba(41, 128, 185, 0.15));
      transform: scale(1.05);
    }
  }
`;

const MemberBio = styled.p`
  color: #5a6c7d;
  font-size: 0.9rem;
  line-height: 1.7;
  margin: 0;
  font-weight: 400;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.8;
  }

  @media (hover: hover) {
    ${TeamMember}:hover & {
      color: #34495e;
    }
  }
`;

const Footer = styled.footer`
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 1.5rem 0;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    padding: 2rem 0;
    font-size: 1rem;
  }

  p {
    margin: 0;
    padding: 0 1rem;
  }
`;

// ====================== Component ======================
export default function About() {
  return (
    <>
      <PageHeader>
        <HeaderContent>
          <HeaderImageWrapper>
            <HeaderImageGlow />
            <HeaderImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebbwLCCCIf4C0ucJGDN0DGbVGyRr-Zqku5w&s"
              alt="My Photo"
            />
          </HeaderImageWrapper>
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
                <MissionIcon>
                  <FaBookReader />
                </MissionIcon>
                <h3>Accessibility</h3>
                <p>
                  Making quality literature and educational resources available
                  to everyone, regardless of location or economic status.
                </p>
              </MissionCard>
              <MissionCard>
                <MissionIcon>
                  <HiUserGroup />
                </MissionIcon>
                <h3>Global Reach</h3>
                <p>
                  Connecting readers from around the world and fostering a
                  global community of knowledge sharing.
                </p>
              </MissionCard>
              <MissionCard>
                <MissionIcon>
                  <FaCode />
                </MissionIcon>
                <h3>Innovation</h3>
                <p>
                  Continuously improving our platform with the latest technology
                  to enhance the reading experience.
                </p>
              </MissionCard>
            </MissionGrid>
          </ContentSection>
        </Container>
      </MainContent>

      <TeamSection>
        <Container>
          <SectionTitle>Meet Our Team</SectionTitle>
          <TeamGrid>
            <TeamMember>
              <MemberAvatar gradient="blue">
                <FaUserTie />
              </MemberAvatar>
              <MemberName>John Smith</MemberName>
              <MemberRole>Chief Librarian</MemberRole>
              <MemberBio>
                With over 15 years in library science, John leads our content
                curation and ensures quality across our collection.
              </MemberBio>
            </TeamMember>
            <TeamMember>
              <MemberAvatar gradient="purple">
                <MdComputer />
              </MemberAvatar>
              <MemberName>Sarah Johnson</MemberName>
              <MemberRole>Technology Director</MemberRole>
              <MemberBio>
                Sarah oversees our platform development and user experience,
                bringing innovative solutions to digital reading.
              </MemberBio>
            </TeamMember>
            <TeamMember>
              <MemberAvatar gradient="orange">
                <FaUsers />
              </MemberAvatar>
              <MemberName>Mike Chen</MemberName>
              <MemberRole>Community Manager</MemberRole>
              <MemberBio>
                Mike builds and nurtures our reading community, organizing
                events and fostering connections between readers.
              </MemberBio>
            </TeamMember>
            <TeamMember>
              <MemberAvatar gradient="teal">
                <FaGraduationCap />
              </MemberAvatar>
              <MemberName>Emily Davis</MemberName>
              <MemberRole>Content Specialist</MemberRole>
              <MemberBio>
                Emily curates our book recommendations and manages
                relationships with publishers and authors.
              </MemberBio>
            </TeamMember>
          </TeamGrid>
        </Container>
      </TeamSection>

      <Footer>
        <p>&copy; 2024 Modern Library. All rights reserved.</p>
      </Footer>
    </>
  );
}
