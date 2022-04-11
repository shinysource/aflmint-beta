import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  Typography,
  FormHelperText
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { FormikValues } from 'formik'
import { ChangeEvent } from 'react'
import { classNames } from '../../utils/index'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  input: {
    '&': {
      marginTop: '-8px'
    },
    '&.Mui-checked': {
      borderColor: '#fff',
      outlineColor: '#fff'
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
  name: string
  className?: string
  label?: string
  handleChange?: (evt: ChangeEvent<HTMLInputElement>) => void
  formik: FormikValues
  isHint?: boolean
}

const FormCheck = ({
  name,
  label,
  className,
  handleChange,
  formik,
  isHint
}: FormCheckProps) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <FormControl
        error={isHint && formik.touched[name] && !!formik.errors[name]}
      >
        {isHint && formik.touched[name] && formik.errors[name] && (
          <FormHelperText sx={{ marginLeft: '0px' }}>
            {formik.errors[name]}
          </FormHelperText>
        )}
        <FormGroup className={className}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values[name]}
                name={name}
                value={formik.values[name]}
                onChange={handleChange}
                className={classes.input}
              />
            }
            className={classes.root}
            label={
              <>
                <Typography className={classes.label}>{label}</Typography>
                <p className=" text-grey text-sm">
                  I agree to the terms and conditions of the AFL Privacy Policy
                </p>
              </>
            }
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>
    </ThemeProvider>
  )
}

export default FormCheck
