import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { FormikValues } from 'formik'
import { ChangeEvent } from 'react'
import { classNames } from '../../utils/index'

const useStyles = makeStyles({
  input: {
    '&.Mui-checked': {
      borderColor: '#fff',
      outlineColor: '#fff',
      color: 'black'
    },
    '& input': {
      borderColor: '#fff',
      outlineColor: '#fff',
      backgroundColor: 'white'
    },
    '.MuiFormControlLabel-label': {
      fontSize: '30px',
      color: '#A6A6A6'
    }
  },
  label: {
    fontFamily: 'Inter',
    fontSize: '14px',
    color: '#A6A6A6'
  }
})

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

interface FormCheckProps {
  type?: string
  name: string
  className?: string
  label?: string
  handleChange?: (evt: ChangeEvent<HTMLInputElement>) => void
  formik: FormikValues
}

const FormCheck = ({
  type,
  name,
  label,
  className,
  handleChange,
  formik
}: FormCheckProps) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <FormGroup className={className}>
        <FormControlLabel
          control={
            <Checkbox
              name={name}
              value={formik.values[name]}
              onChange={handleChange}
              className={classes.input}
              classes={{ label: classes.label }}
              {...(formik.touched[name] &&
                formik.errors[name] && {
                  error: true,
                  helperText: formik.errors[name]
                })}
            />
          }
          label={<Typography className={classes.label}>{label}</Typography>}
          labelPlacement="end"
        />
      </FormGroup>
    </ThemeProvider>
  )
}

export default FormCheck
