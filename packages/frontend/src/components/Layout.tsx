import type { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Main = styled.main`
  min-height: calc(100vh - 140px); /* Adjust based on header and footer height */
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ContentWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ContentWrapper>
  );
};

export default Layout; 