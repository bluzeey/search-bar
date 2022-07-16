import React from 'react'
import { Button } from '@mui/material'

function SearchButton(props) {
  return (
    <Button variant="contained">{props.text}</Button>
  )
}

export default SearchButton