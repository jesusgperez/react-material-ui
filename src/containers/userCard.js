import React from "react";
import { CardMedia, Grid } from "@mui/material";

function UserCard({userState: {avatar_url:avatarUrl}}) {

  return (
    <Grid
      container
    >
      <Grid item xs={3}>
        <CardMedia 
          component="img"
          alt="GitHub User"
          image={avatarUrl}
        />
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  )
}

export {UserCard}