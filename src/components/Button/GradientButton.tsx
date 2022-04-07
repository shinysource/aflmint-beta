import * as React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'
import { FormGroup } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'

interface GradientButtonProps {
  type?: string
  name: string
  label: string
  className?: string
  onClick?: () => {}
}

const useStyles = makeStyles({
  root: {
    '&': {
      background: 'linear-gradient(264.12deg, #7381FC 9.33%, #086BDF 90.67%)',
      borderRadius: '2px',
      fontFamily: 'PODIUMSharp-49',
      fontSize: '16px',
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      padding: '11px'
    }
  }
})

const GradientButton = ({
  type,
  name,
  label,
  className,
  onClick
}: GradientButtonProps) => {
  const classes = useStyles()

  return (
    <FormGroup>
      <Button
        name={name}
        className={classes.root}
        variant="contained"
        size="large"
      >
        {label}
      </Button>
    </FormGroup>
  )
}

export default GradientButton
