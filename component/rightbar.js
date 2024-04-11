import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { IconButton } from '@mui/material';

export default function FolderList() {
  return (
    <List
      sx={{
        bgcolor: 'background.paper',
        height: '100%',
      }}
    >
      <ListItem
        secondaryAction={
          <ListItemAvatar>
            <ErrorOutlineOutlinedIcon />
          </ListItemAvatar>
        }
      >
        <ListItemText
          primaryTypographyProps={{ fontSize: 12, color: 'gray' }}
          secondaryTypographyProps={{
            fontSize: 20,
            fontWeight: 700,
            color: 'Black',
          }}
          primary="Ledger Balance"
          secondary="USD 0.00"
        />
      </ListItem>
      <ListItem
        secondaryAction={
          <ListItemAvatar>
            <ErrorOutlineOutlinedIcon />
          </ListItemAvatar>
        }
      >
        <ListItemText
          primaryTypographyProps={{ fontSize: 12, color: 'gray' }}
          secondaryTypographyProps={{
            fontSize: 20,
            fontWeight: 700,
            color: 'Black',
          }}
          primary="Ledger Balance"
          secondary="USD 0.00"
        />
      </ListItem>
      <ListItem
        secondaryAction={
          <ListItemAvatar>
            <ErrorOutlineOutlinedIcon />
          </ListItemAvatar>
        }
      >
        <ListItemText
          primaryTypographyProps={{ fontSize: 12, color: 'gray' }}
          secondaryTypographyProps={{
            fontSize: 20,
            fontWeight: 700,
            color: 'Black',
          }}
          primary="Ledger Balance"
          secondary="USD 0.00"
        />
      </ListItem>
      <ListItem
        secondaryAction={
          <ListItemAvatar>
            <ErrorOutlineOutlinedIcon />
          </ListItemAvatar>
        }
      >
        <ListItemText
          primaryTypographyProps={{ fontSize: 12, color: 'gray' }}
          secondaryTypographyProps={{
            fontSize: 20,
            fontWeight: 700,
            color: 'Black',
          }}
          primary="Ledger Balance"
          secondary="USD 0.00"
        />
      </ListItem>
    </List>
  );
}
