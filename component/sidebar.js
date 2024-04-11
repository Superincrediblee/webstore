import { Box, Grid } from '@mui/material';
import { AiTwotoneFolder } from 'react-icons/ai';
import { CiLink } from 'react-icons/ci';
import { AiTwotoneCopy } from 'react-icons/ai';
import { PiUniteSquareDuotone } from 'react-icons/pi';
export default function Sidebar() {
  return (
    <Box
      sx={{
        boxShadow:
          '2px 0 5px -4px rgba(0, 0, 0, 0.5), -2px 0 5px -4px rgba(0, 0, 0, 0.5)',
        display: { xs: 'none', sm: 'flex', md: 'flex' },
        bgcolor: 'white',
        width: '35px',
        height: '180px',
        marginTop: 7,
        borderRadius: '20px',
        top: '250px',
        left: '10px',
      }}
      position="fixed"
    >
      <Grid
        container
        direction="column"
        sx={{
          fontSize: '29px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CiLink sx={{ color: '#99a3a1', backgroundColor: '#ffffff', mb: 3 }} />
        <AiTwotoneCopy sx={{ mb: 1 }} />
        <AiTwotoneFolder sx={{ mb: 1 }} />
        <PiUniteSquareDuotone sx={{ mb: 1 }} />
      </Grid>
    </Box>
  );
}
