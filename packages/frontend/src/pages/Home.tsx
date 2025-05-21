import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const Hero = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const Button = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.short};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const FeaturesSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const FeatureCard = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-align: left;
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Home = () => {
  return (
    <Container>
      <Hero>
        <Title>Caption Genie</Title>
        <Subtitle>
          Transform your media with AI-powered transcription and caption generation.
          Save time, improve accessibility, and enhance user engagement.
        </Subtitle>
        <ButtonGroup>
          <Button to="/register">Get Started</Button>
          <SecondaryButton to="/login">Sign In</SecondaryButton>
        </ButtonGroup>
      </Hero>
      
      <FeaturesSection>
        <FeatureCard>
          <FeatureTitle>Automatic Transcription</FeatureTitle>
          <FeatureDescription>
            Upload your audio or video files and get accurate transcriptions in minutes.
            Our AI-powered engine supports multiple languages and dialects.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle>Caption Generation</FeatureTitle>
          <FeatureDescription>
            Automatically generate timed captions for your videos. Improve accessibility
            and enable viewers to enjoy your content in any environment.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle>Easy Integration</FeatureTitle>
          <FeatureDescription>
            Download captions in various formats or use our API to integrate Caption Genie
            directly into your workflow or application.
          </FeatureDescription>
        </FeatureCard>
      </FeaturesSection>
    </Container>
  );
};

export default Home; 