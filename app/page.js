'use client';
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import SwitchSeriesType from '@/component/chartr';
import FolderList from '@/component/rightbar';
import InteractiveList from '@/component/footer';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          width: '85%',
          margin: 'auto',
          marginTop: 7,
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={8}
            md={8}
            sx={{
              /* bgcolor: 'purple', */ height: { xs: '60dvh', md: '40dvh' },
            }}
          >
            <Box
              sx={{
                /* bgcolor: 'red', */
                height: '10dvh',
              }}
            >
              <Typography variant="body2">Available Balance</Typography>
              <Typography variant="h4" fontWeight={600}>
                {' '}
                USD 120,00000
              </Typography>
              <Button
                size={'large'}
                variant="contained"
                position="absolute"
                sx={{
                  display: { xs: 'none', sm: 'none', md: 'flex' },
                  bgcolor: 'black',
                  borderRadius: '20px',
                  bottom: 45,
                  left: 310,
                  '&:hover': {
                    backgroundColor: 'inherit', // Inherit background color to avoid hover change
                    color: 'inherit', // Inherit text color to avoid hover change
                  },
                }}
              >
                Withdraw
              </Button>{' '}
              <Button
                variant="contained"
                size="small"
                sx={{
                  display: { md: 'none' },
                  borderRadius: '20px',
                  bgcolor: 'black',
                  fontSize: '10px',
                }}
              >
                Withdraw
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SwitchSeriesType />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            sx={{
              height: { xs: '60dvh', md: '50dvh' },
            }}
          >
            <FolderList />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              /* bgcolor: 'green', */
              height: { xs: '80dvh', md: '70vh' },
              marginTop: 2,
            }}
          >
            <InteractiveList />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
