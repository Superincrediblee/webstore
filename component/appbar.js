'use client';
import { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { IoIosNotificationsOutline } from 'react-icons/io';
import Avatar from '@mui/material/Avatar';
import { GoHome } from 'react-icons/go';
import { MdOutlineAnalytics } from 'react-icons/md';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { GrAppsRounded } from 'react-icons/gr';
import { LiaMoneyBillSolid } from 'react-icons/lia';
import { BiMessageDetail } from 'react-icons/bi';
import Image from 'next/image';
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
const navItems = [
  { text: 'Home', icon: <GoHome /> },
  { text: 'analytics', icon: <MdOutlineAnalytics /> },
  { text: 'Revenue', icon: <LiaMoneyBillSolid /> },
  { text: 'Crm', icon: <MdOutlinePeopleAlt /> },
  { text: 'Apps', icon: <GrAppsRounded /> },
];
const MenuBox = styled(Box)({
  display: 'flex',
  gap: 20,
});
const SocialBox = styled(Box)({
  display: 'flex',
  gap: 4,
});
const AvatarBox = styled(Box)({
  display: 'flex',
  gap: 1,
});

export default function Appbar() {
  const cloud = `https://res.cloudinary.com/dbrouaob4/image/upload/v1712867175/menu_a7ubdd.png`;
  const [activeIndex, setActiveIndex] = useState(0);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    // Perform your button click action here
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.API}/user`);

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch user data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      <AppBar
        sx={{
          boxShadow: '3px',
          borderRadius: '30px',
          bgcolor: 'white',
          width: { xs: '95%', sm: '98%', md: '98%', lg: '98%' },
          margin: { xs: '8px', sm: '15px', md: '15px', lg: '15px' },
        }}
        position="fixed"
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton size="large" color="black">
              <Image
                src={cloud}
                alt="Image description"
                width={20}
                height={20}
              />
            </IconButton>
            <MenuBox sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item, index) => (
                <Button
                  key={item.text}
                  sx={{
                    color: activeIndex === index ? 'white' : 'black', // Active color
                    bgcolor: activeIndex === index ? 'black' : 'white', // Active background
                    borderRadius: '30px',
                    transition: 'all 0.2s ease-in-out', // Smooth transition
                    '&:hover': {
                      // Hover style for non-active buttons
                      backgroundColor:
                        activeIndex === index ? 'black' : '#f2f2f2', // Adjust hover color
                      color: activeIndex === index ? 'white' : 'black',
                    },
                  }}
                  onClick={() => handleClick(index)}
                  startIcon={item.icon}
                >
                  {item.text}
                </Button>
              ))}
            </MenuBox>
            <SocialBox>
              <IconButton size="large" color="black">
                <IoIosNotificationsOutline />
              </IconButton>
              <IconButton size="large" color="black">
                <BiMessageDetail />
              </IconButton>
              <AvatarBox
                sx={{
                  bgcolor: '#eeeeee',
                  borderRadius: '30px',
                  width: '100px',
                }}
              >
                {userData && (
                  <>
                    <Avatar
                      sx={{
                        height: 30,
                        width: 30,
                        fontSize: 15,
                        marginTop: 1,
                        marginLeft: 1,
                        bgcolor: '#37474f',
                      }}
                    >
                      {userData.first_name &&
                        userData.last_name && // Check for individual properties
                        `${userData.first_name[0].toUpperCase()}${userData.last_name[0].toUpperCase()}`}
                    </Avatar>
                  </>
                )}
                <IconButton size="large" edge="end">
                  <MenuIcon />
                </IconButton>
              </AvatarBox>
            </SocialBox>
          </Toolbar>
        </Container>
      </AppBar>
      <Offset />
    </Box>
  );
}
