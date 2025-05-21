import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Message = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const HomeLink = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: background-color ${({ theme }) => theme.transitions.short};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Title>404 - Page Not Found</Title>
      <Message>
        The page you are looking for doesn't exist or has been moved.
      </Message>
      <HomeLink to="/">Back to Home</HomeLink>
    </Container>
  );
};

export default NotFound; 