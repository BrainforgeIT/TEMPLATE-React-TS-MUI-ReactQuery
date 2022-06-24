import { Box } from '@mui/material';
import { useCourses } from './hooks/useCourses';

const Dashboard: React.FC = () => {
  const courses = useCourses();

  return <Box>Dashboard</Box>;
};

export default Dashboard;
