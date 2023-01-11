import React, { useState } from "react";
import { IconButton, Stack, TextField, textFieldClasses } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'

// const stackStyles = {
//   marginTop: '30px',
//   width: '80%'
// }
// const textFieldStyles = {
//   width: '90%'
// }
// const iconButtonStyles = {
//   left: '-45px'
// }

function Searcher (props) {
  const {setInputUser} = props
  const [valueInput, setValueInput] = useState('')

  const onSearchValueChange = (event) => {
    setValueInput(event.target.value)
  }

  const handleSubmit = () => {
    setInputUser(valueInput)
  }

  return (
    <Stack
    direction='row'
    sx={{
      marginTop: '30px',
      width: '80%'
    }}>
      <TextField 
        id="outlined-basic"
        label="Github user"
        placeholder="Octocat"
        variant="outlined"
        size="small"
        sx={{
          width: '90%'
        }}
        value={valueInput}
        onChange={onSearchValueChange}
      />
      <IconButton
        size="small"
        sx={{
          left: '-45px'
        }}
        onClick={handleSubmit}
      >
        <SearchIcon/>
      </IconButton>
    </Stack>
  )
}

export { Searcher }