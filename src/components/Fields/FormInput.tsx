import { TextField, FormControl } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { FormikValues } from 'formik'
import { ChangeEvent } from 'react'

const useStyles = makeStyles({
  root: {
    '& input': {
      backgroundColor: '#1A1A1A'
    }
  }
})

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

interface FormInputProps {
  type?: string
  name: string
  className?: string
  label?: string
  handleChange?: (evt: ChangeEvent<HTMLInputElement>) => void
  formik: FormikValues
  isHint?: boolean
}

const FormInput = ({
  type,
  name,
  label,
  className,
  handleChange,
  formik,
  isHint
}: FormInputProps) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <TextField
          type={type || 'text'}
          name={name}
          value={formik.values[name]}
          onChange={handleChange}
          label={label}
          className={className}
          variant="filled"
          InputProps={{
            className: classes.root
          }}
          {...(formik.touched[name] &&
            formik.errors[name] && {
              error: true
            })}
          {...(isHint &&
            formik.touched[name] &&
            formik.errors[name] && {
              helperText: formik.errors[name]
            })}
        />
      </FormControl>
    </ThemeProvider>
  )
}

export default FormInput
