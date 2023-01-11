import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Searcher } from './components/Searcher';
import { UserCard } from './containers/userCard';
import { gettingUsers } from './services/users';

function App() {

  const [inputUser, setInputUser] = useState('octocat')
  const [userState, setUserState] = useState(inputUser)
  const [notFound, setNotFound] = useState(false)

  const getUser = async (user) => {
    const userResponse = await gettingUsers(user)
    if (userState === 'octocat') {
      localStorage.setItem('octocat', JSON.stringify(userResponse))
    }

    if (userResponse.message === 'Not Found'){
      const {octocat} = localStorage
      setUserState(octocat)
      setNotFound(true)
    } else {
      setUserState(userResponse)
    } 
  }
  console.log(userState)

  useEffect((user)=>{
    getUser(inputUser)
  }, [inputUser])

  return (
    <Container sx={{
      background: "whiteSmoke",
      width: "80vw",
      height: "500px",
      borderRadius: "16px",
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Searcher 
        inputUser={inputUser}
        setInputUser={setInputUser}
      />
      <UserCard userState={userState}/>
    </Container>
  );
}

export default App;
