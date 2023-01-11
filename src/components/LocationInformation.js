import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { LocationOn, Twitter, Language, Business } from "@mui/icons-material";

function LocationInformation({userState}){
  const {location, twitter_username, blog, company} = userState
  return (
    <Grid 
      container
      spacing={2}
    >
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LocationOn />
          {location !== null ?
          <Typography>{location}</Typography>:<Typography>Not available</Typography>}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <Twitter />
          {twitter_username !== null ?
          <Typography>{twitter_username}</Typography>:<Typography>Not available</Typography>}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <Language />
          {blog !== null ?
          <Typography>{blog}</Typography>:<Typography>Not available</Typography>}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <Business />
          {company !== null ?
          <Typography>{company}</Typography>:<Typography>Not available</Typography>}
        </Stack>
      </Grid>
    </Grid>
  )
}

export {LocationInformation}