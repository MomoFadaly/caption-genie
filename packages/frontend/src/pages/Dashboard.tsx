import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const DashboardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const Dashboard = () => {
  return (
    <Container>
      <Title>Dashboard</Title>
      <p>Welcome to your Caption Genie dashboard. This is a placeholder that will be implemented in future tasks.</p>
      
      <DashboardContent>
        <Card>
          <h3>Recent Transcriptions</h3>
          <p>You have no recent transcriptions.</p>
        </Card>
        
        <Card>
          <h3>Upload Media</h3>
          <p>Upload your media files for transcription.</p>
        </Card>
        
        <Card>
          <h3>Account Overview</h3>
          <p>Manage your account settings and subscription.</p>
        </Card>
      </DashboardContent>
    </Container>
  );
};

export default Dashboard; 