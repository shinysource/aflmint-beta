import React, { useState } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { Button } from '@mui/material'

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <Button>
      <ArrowDownwardIcon onClick={scrollToTop} fontSize="large" />
    </Button>
  )
}

export default ScrollButton
