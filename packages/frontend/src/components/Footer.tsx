import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.text.disabled}40;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.text.disabled}20;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-align: center;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Caption Genie</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/dashboard">Dashboard</FooterLink>
          <FooterLink to="/login">Login</FooterLink>
          <FooterLink to="/register">Register</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Resources</FooterTitle>
          <FooterLink to="/docs">Documentation</FooterLink>
          <FooterLink to="/api">API</FooterLink>
          <FooterLink to="/pricing">Pricing</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Company</FooterTitle>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <FooterLink to="/terms">Terms of Service</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Connect</FooterTitle>
          <ExternalLink href="https://twitter.com/captiongenie" target="_blank" rel="noopener noreferrer">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/captiongenie" target="_blank" rel="noopener noreferrer">
            GitHub
          </ExternalLink>
          <ExternalLink href="mailto:support@captiongenie.com">
            Email Support
          </ExternalLink>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        &copy; {currentYear} Caption Genie. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 