import { Stack, Typography } from "@mui/material";
import React from "react";
import { PaperInformation } from "../components/PaperInformation";
import { LocationInformation } from "../components/LocationInformation";

function Description({userState}){
  const { bio } = userState
  return (
    <>
      <Stack
        sx={{
          justifyContent: "center"
        }}
      >
        {bio !== null ? 
          <Typography variant="body1">{bio}</Typography> :
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Typography>
        }
      </Stack>
      <PaperInformation userState={userState}/>
      <LocationInformation userState={userState} />
    </>
  )
}

export {Description}