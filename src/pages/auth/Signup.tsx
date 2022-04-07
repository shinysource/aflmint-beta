import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Grid } from '@mui/material'

import FormInput from '../../components/Fields/FormInput'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Enter your Firstname'),
  lastName: Yup.string().required('Enter your Lastname'),
  email: Yup.string().required('Enter your Email').email('Enter a valid Email'),
  country: Yup.mixed().required('Select a Country'),
  acceptTerms: Yup.bool().oneOf([true], 'Accept the privacy terms to continue')
})

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  country: '',
  acceptTerms: false
}

const Signup = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      console.log(values)
      actions.resetForm({ values: initialValues })
    }
  })

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="register-back"
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item className="text-white text-[9px]">
            <div>Already have an account</div>
          </Grid>
          <Grid item>
            <FormInput
              name="firstName"
              formik={formik}
              handleChange={formik.handleChange}
              className="font-inter font-normal text-base w-[311px]"
              label="First name"
              placeholder="First name"
              isHint={true}
            />
          </Grid>
          <Grid item>
            <FormInput
              name="lastName"
              formik={formik}
              handleChange={formik.handleChange}
              className="font-inter font-normal text-base w-[311px]"
              label="Last name"
              placeholder="Last name"
              isHint={true}
            />
          </Grid>
          <Grid item>
            <FormInput
              type="email"
              name="email"
              formik={formik}
              handleChange={formik.handleChange}
              className="font-inter font-normal text-base w-[311px]"
              label="Email"
              placeholder="Email"
              isHint={true}
            />
          </Grid>
          <Grid item xs={6}>
            <FormInput
              type="string"
              name="mobile"
              formik={formik}
              handleChange={formik.handleChange}
              label="Mobile(optional)"
              className="font-inter font-normal text-base w-[311px] "
              placeholder="Mobile(optional)"
            />
          </Grid>
        </Grid>
      </form>
    </Grid>
  )
}

export default Signup
