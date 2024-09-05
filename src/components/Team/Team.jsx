import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { addTeammate, fetchUserInfo, getUser } from 'redux/userSlice';

import { Box, Container, TeamText } from './Team.styled';

const Team = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(getUser);

  const addUser = () => {
    dispatch(addTeammate());
  };

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <h2
          style={{
            marginBottom: '0',
            textAlign: 'center',
            marginRight: '10px',
          }}
        >
          Team
        </h2>
        <Button
          type="button"
          variant="contained"
          size="small"
          onClick={() => {
            addUser();
          }}
        >
          Add
        </Button>
      </div>
      <Container>
        {userInfo.map(({ id, name, number, email, position, city }) => (
          <Container key={id}>
            <Box>
              <TeamText>Name: {name}</TeamText>
              <TeamText>Number: {number}</TeamText>
              <TeamText>Email: {email}</TeamText>
              <TeamText>Position: {position}</TeamText>
              <TeamText>City: {city}</TeamText>
            </Box>
          </Container>
        ))}
      </Container>
    </>
  );
};

export default Team;
