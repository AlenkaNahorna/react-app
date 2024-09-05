import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';

export default function Projects() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2
        style={{
          marginBottom: '0',
        }}
      >
        Projects
      </h2>
      <List sx={{ bgcolor: 'inherit', display: 'flex' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon color="primary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Wopee"
            secondary="building bots to reduce waste in software development and testing"
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon color="primary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Test project" secondary="development" />
        </ListItem>
      </List>
    </div>
  );
}
