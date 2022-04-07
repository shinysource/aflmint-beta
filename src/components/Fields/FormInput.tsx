import { TextField, FormGroup } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { FormikValues } from 'formik'
import { ChangeEvent } from 'react'

const useStyles = makeStyles({
  root: {
    '& input': {
      backgroundColor: '#1A1A1A'
    }
  },
  label: {
    color: '#A6A6A6'
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
  placeholder?: string
  handleChange?: (evt: ChangeEvent<HTMLInputElement>) => void
  formik: FormikValues
  isHint?: boolean
}

const FormInput = ({
  type,
  name,
  className,
  label,
  placeholder,
  handleChange,
  formik,
  isHint
}: FormInputProps) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <TextField
          type={type || 'text'}
          name={name}
          value={formik.values[name]}
          onChange={handleChange}
          className={className}
          label={label}
          placeholder={placeholder}
          variant="filled"
          InputProps={{
            className: classes.root
          }}
          error={formik.touched[name] && !!formik.errors[name]}
          helperText={isHint && formik.touched[name] && formik.errors[name]}
        />
      </FormGroup>
    </ThemeProvider>
  )
}

export default FormInput
