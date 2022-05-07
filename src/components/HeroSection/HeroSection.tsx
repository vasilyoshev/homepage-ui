import { Button, Box } from '@mui/material';

export const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 400,
        border: 1,
        borderColor: 'grey.500',
      }}
    >
      <Box sx={{ fontSize: 'h4.fontSize', mb: 1, ml: 1 }}>Heading</Box>
      <Box sx={{ typography: 'subtitle2', mb: 3, ml: 1 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet nisl in nulla aliquet condimentum.
        Cras non eros ultrices, ullamcorper nulla ac, tempor magna.
      </Box>
      <Box sx={{ mb: 1, ml: 1 }}>
        <Button href="/search" variant="contained" size="large" color="primary">
          Search
        </Button>
      </Box>
    </Box>
  );
};
