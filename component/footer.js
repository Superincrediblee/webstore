'use client';
import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Stack,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Drawer from '@mui/material/Drawer';
import ClearIcon from '@mui/icons-material/Clear';
import dayjs from 'dayjs';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export default function InteractiveList() {
  const [open, setOpen] = useState(false);
  // for fetching of data
  const [transactionData, setTransactionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //for check
  const [transactionStatus, setTransactionStatus] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  // for date
  const [value, setValue] = useState(dayjs('2022-04-17'));
  const [error, setError] = useState(null);
  // for datepicker
  const [selectedDateRange, setSelectedDateRange] = useState({
    from: dayjs('2020-01-01').startOf('day'),
    to: dayjs().endOf('day'),
  });
  //for date change
  const handleDateChange = (dateType, newValue) => {
    let newFromDate = selectedDateRange.from;
    let newToDate = selectedDateRange.to;

    if (dateType === 'from' && newValue.isAfter(selectedDateRange.to)) {
      // If from date is after the current to date, set to date to from date
      newToDate = newValue;
    } else if (dateType === 'to' && newValue.isBefore(selectedDateRange.from)) {
      // If to date is before the current from date, set from date to to date
      newFromDate = newValue;
    } else {
      // Otherwise, update the selected date range as usual
      if (dateType === 'from') {
        newFromDate = newValue;
      } else {
        newToDate = newValue;
      }
    }

    setSelectedDateRange({
      from: newFromDate.startOf('day'),
      to: newToDate.startOf('day'),
    });
  };
  // Applying changes
  const handleApplyDateRange = () => {
    // Check if transactionData is available before filtering
    if (!transactionData) return [];
    // Apply date range filter to transactions
    const filteredTransactions = transactionData?.filter((transaction) => {
      const transactionDate = dayjs(transaction.date);
      return transactionDate.isBetween(
        selectedDateRange.from,
        selectedDateRange.to,
        null,
        '[]'
      );
    });

    return filteredTransactions;
  };
  // for select with checkbox
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  //
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTransactionStatus(value);

    // Filter transactions based on selected statuses
    const filtered = transactionData.filter((transaction) =>
      value.includes(transaction.status)
    );
    setFilteredTransactions(filtered);
  };

  //
  // for drawer
  const DrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box sx={{ p: '15px' }}>
      <Box
        onClick={DrawerToggle}
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Filter
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Button color="inherit">
            <ClearIcon />
          </Button>
        </Box>
      </Box>
      <Stack direction="row">
        <Button
          variant="outlined"
          sx={{
            borderRadius: '20px',
            bgcolor: 'white',
            color: 'black',
            width: '90px',
            height: '40px',
            fontSize: '12px',
            textTransform: 'none',
            mr: 1.5,
            '&:hover': {
              backgroundColor: 'inherit', // Inherit background color to avoid hover change
              color: 'inherit', // Inherit text color to avoid hover change
            },
          }}
          onClick={() => handleDateChange('from', dayjs().startOf('day'))}
        >
          Today
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: '20px',
            bgcolor: 'white',
            color: 'black',
            width: '90px',
            height: '40px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            textTransform: 'none',
            mr: 1.5,
          }}
          onClick={() =>
            handleDateChange('from', dayjs().subtract(7, 'days').startOf('day'))
          }
        >
          Last 7 days
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: '20px',
            bgcolor: 'white',
            color: 'black',
            width: '90px',
            height: '40px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            textTransform: 'none',
            mr: 1.5,
            '&:hover': {
              backgroundColor: 'inherit', // Inherit background color to avoid hover change
              color: 'inherit', // Inherit text color to avoid hover change
            },
          }}
          onClick={() => handleDateChange('from', dayjs().startOf('month'))}
        >
          This month
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: '20px',
            bgcolor: 'white',
            color: 'black',
            width: '90px',
            height: '40px',
            fontSize: '12px',
            textTransform: 'none',
            whiteSpace: 'nowrap',
            '&:hover': {
              backgroundColor: 'inherit', // Inherit background color to avoid hover change
              color: 'inherit', // Inherit text color to avoid hover change
            },
          }}
          onClick={() =>
            handleDateChange(
              'from',
              dayjs().subtract(3, 'months').startOf('month')
            )
          }
        >
          Last 3 month
        </Button>
      </Stack>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 600, mt: 2 }}>
          Date Range
        </Typography>
      </Box>
      <Stack direction="row">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={[
              'DatePicker',
              'DatePicker',
              /* 'DesktopDatePicker', */
              /* 'MobileDatePicker', */
            ]}
          >
            <DatePicker
              label="From"
              value={selectedDateRange.from}
              onChange={(newValue) => handleDateChange('from', newValue)}
              maxDate={selectedDateRange.to}
            />
            <DatePicker
              label="To"
              value={selectedDateRange.to}
              onChange={(newValue) => handleDateChange('to', newValue)}
              minDate={selectedDateRange.from}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Stack>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 600, mt: 2 }}>
          Transaction Type
        </Typography>
      </Box>
      <Stack
        direction="row"
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <FormControl sx={{ m: 1, width: 500 }}>
          <InputLabel id="demo-multiple-checkbox-label">Status</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={transactionStatus}
            onChange={handleChange}
            input={<OutlinedInput label="Status" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {[
              'Store Transactions',
              'Get Tipped',
              'Withdrawals',
              'Chargebacks',
              'Cashbacks',
              'Refer & Earn',
            ].map((status) => (
              <MenuItem key={status} value={status}>
                <Checkbox checked={transactionStatus.indexOf(status) > -1} />
                <ListItemText primary={status} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 600, mt: 2 }}>
          Transaction Status
        </Typography>
      </Box>
      <Stack
        direction="row"
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <FormControl sx={{ m: 1, width: 500 }}>
          <InputLabel id="demo-multiple-checkbox-label">Status</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={transactionStatus}
            onChange={handleChange}
            input={<OutlinedInput label="Status" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {['successful', 'pending', 'failed'].map((status) => (
              <MenuItem key={status} value={status}>
                <Checkbox checked={transactionStatus.indexOf(status) > -1} />
                <ListItemText primary={status} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button
          sx={{
            textTransform: 'none',
            color: 'black',
            bgcolor: 'white',
            borderRadius: '20px',
            width: '150px',
            height: '80px',
            '&:hover': {
              backgroundColor: 'inherit', // Inherit background color to avoid hover change
              color: 'inherit', // Inherit text color to avoid hover change
            },
          }}
          variant="contained"
        >
          Clear
        </Button>
        <Box sx={{ display: 'flex' }}>
          <Button
            sx={{
              textTransform: 'none',
              color: 'white',
              bgcolor: 'black',
              borderRadius: '20px',
              height: '80px',
              width: '150px',
              '&:hover': {
                backgroundColor: 'inherit', // Inherit background color to avoid hover change
                color: 'inherit', // Inherit text color to avoid hover change
              },
            }}
            variant="contained"
          >
            Apply
          </Button>
        </Box>
      </Box>
    </Box>
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.API}/transaction`);

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setTransactionData(data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch user data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const formatTransactionDate = (date) => {
    return dayjs(date).format('MMM DD, YYYY');
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography sx={{ mt: 3, fontWeight: 700 }} variant="h6">
            {handleApplyDateRange().length} transactions
          </Typography>
          <Typography variant="caption">
            your transaction for {selectedDateRange.from.format('MMM DD, YYYY')}{' '}
            - {selectedDateRange.to.format('MMM DD, YYYY')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Button
            sx={{
              mt: 4,
              mb: 2,
              mr: 2,
              borderRadius: '20px',
              fontSize: '14px',
              textTransform: 'none',
              bgcolor: 'lightgray',
              color: 'black',
              width: '100px',
              height: '40px',
              '&:hover': {
                backgroundColor: 'inherit', // Inherit background color to avoid hover change
                color: 'inherit', // Inherit text color to avoid hover change
              },
            }}
            onClick={DrawerToggle}
            variant="contained"
            endIcon={<ExpandMoreIcon />}
          >
            Filter
          </Button>
          <Button
            sx={{
              mt: 4,
              mb: 2,
              borderRadius: '20px',
              textTransform: 'none',
              bgcolor: 'lightgray',
              color: 'black',
              '&:hover': {
                backgroundColor: 'inherit', // Inherit background color to avoid hover change
                color: 'inherit', // Inherit text color to avoid hover change
              },
            }}
            variant="contained"
            endIcon={<VerticalAlignBottomIcon />}
          >
            Export list
          </Button>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : error ? (
          <Typography>Error: {error}</Typography>
        ) : transactionData ? (
          <List>
            {handleApplyDateRange().length > 0 ? (
              handleApplyDateRange().map((transaction, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        bgcolor:
                          transaction.status === 'successful' &&
                          transaction.type === 'deposit'
                            ? 'lightgreen'
                            : 'red',
                        color:
                          transaction.status === 'successful' &&
                          transaction.type === 'deposit'
                            ? 'green'
                            : 'red',
                      }}
                    >
                      {transaction.type === 'deposit' ? (
                        <CallReceivedIcon />
                      ) : (
                        <CallMadeIcon />
                      )}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      transaction.metadata?.product_name || transaction.type
                    }
                    secondary={transaction.metadata?.name || transaction.status}
                  />
                </ListItem>
              ))
            ) : (
              <Typography sx={{ mt: 1 }}>
                No transactions found for selected date range.
              </Typography>
            )}
          </List>
        ) : (
          <Typography>No transaction data available.</Typography>
        )}
        {transactionData && (
          <Box sx={{ display: 'flex' }}>
            <List>
              {handleApplyDateRange().length > 0 ? (
                handleApplyDateRange().map((transaction, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={`USD ${transaction.amount}`}
                      secondary={`${formatTransactionDate(transaction.date)}`}
                    />
                  </ListItem>
                ))
              ) : (
                <Typography>
                  No transactions found for selected date range.
                </Typography>
              )}
            </List>
          </Box>
        )}
      </Box>
      <nav>
        <Drawer
          anchor="right"
          variant="temporary"
          open={open}
          onClose={DrawerToggle}
          ModalProps={{
            keepMounted: true,
            // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              transition: 'transform 1s ease-in-out',
              width: {
                xs: '80%',
                sm: '80%',
                md: '30%',
                lg: '30%',
                xl: '40%',
              },
              borderRadius: '10px',
              height: {
                xs: '100%',
                sm: '60%',
                md: '70%',
                lg: '70%',
                xl: '60%',
              },
              position: 'absolute',
              top: '200px',
              right: '10px',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
