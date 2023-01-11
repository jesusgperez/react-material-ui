import React from "react";
import { CardMedia, Grid, Stack } from "@mui/material";
import { PrincipalInformation } from "../components/PrincipalInformation";
import { Description } from "../containers/Description";

function UserCard({userState}) {
  const {avatar_url} = userState
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: '15px'
      }}
    >
      <Grid item xs={3}>
        <CardMedia 
          component="img"
          alt="GitHub User"
          image={avatar_url}
          sx={{
            borderRadius: '50%',
            marginLeft: '5px'
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            margin: "30px"
          }}
        >
          <PrincipalInformation 
            userState={userState}
          />
          <Description
            userState={userState}
          />
        </Stack>
      </Grid>
    </Grid>
  )
}

export {UserCard}