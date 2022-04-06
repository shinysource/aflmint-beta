import { TextField, FormControl } from '@mui/material'
import { FormikValues } from 'formik'
import { ChangeEvent } from 'react'

interface FormInputProps {
  name: string
  title: string
  className?: string
  label?: string
  handleChange?: (evt: ChangeEvent<HTMLInputElement>) => void
  formik: FormikValues
}

const FormInput = ({
  name,
  label,
  className,
  handleChange,
  formik
}: FormInputProps) => {
  return (
    <FormControl>
      <TextField
        type="text"
        name={name}
        value={formik.vales[name]}
        onChange={handleChange}
        label={label}
        variant="filled"
        {...(formik.touched[name] &&
          formik.errors[name] && {
            error: true,
            helperText: formik.errors[name]
          })}
      />
    </FormControl>
  )
}

export default FormInput
