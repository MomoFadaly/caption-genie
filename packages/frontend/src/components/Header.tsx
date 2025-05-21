import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

interface NavLinkProps {
  active: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
  color: ${props => props.active 
    ? props.theme.colors.primary 
    : props.theme.colors.text.primary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: ${props => props.active 
    ? props.theme.typography.fontWeight.medium 
    : props.theme.typography.fontWeight.regular};
  
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const LoginButton = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transitions.short};
  
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
  }
`;

const SignUpButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transitions.short};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Header = () => {
  const location = useLocation();
  const isLoggedIn = false; // Replace with actual authentication state
  
  return (
    <HeaderContainer>
      <NavContainer>
        <Logo to="/">Caption Genie</Logo>
        
        <Nav>
          <NavLink to="/" active={location.pathname === '/'}>
            Home
          </NavLink>
          
          {isLoggedIn ? (
            <>
              <NavLink to="/dashboard" active={location.pathname === '/dashboard'}>
                Dashboard
              </NavLink>
              <NavLink to="/profile" active={location.pathname === '/profile'}>
                Profile
              </NavLink>
            </>
          ) : (
            <AuthButtons>
              <LoginButton to="/login">Sign In</LoginButton>
              <SignUpButton to="/register">Sign Up</SignUpButton>
            </AuthButtons>
          )}
        </Nav>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 