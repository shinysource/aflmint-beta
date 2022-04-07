import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Grid } from '@mui/material'

import FormInput from '../../components/Fields/FormInput'
import FormCheck from '../../components/Fields/FormCheck'
import FormSelect from '../../components/Fields/FormSelect'

import useCountrySelect from 'hooks/useCountrySelect'

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
  const { countries } = useCountrySelect()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      console.log(values)
      actions.resetForm({ values: initialValues })
    }
  })

  return (
    <Grid container justifyContent="center" className="register-back">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <img src="public/assets/logo/Logo.svg"></img>
        </Grid>
        <Grid item className="text-white font-bold text-[32px]">
          <div className="font-podium49">Register</div>
        </Grid>
      </Grid>
      <Grid item>
        <form onSubmit={formik.handleSubmit} className="flex justify-center">
          <Grid
            item
            container
            justifyContent="center"
            spacing={2}
            xs={10}
            sm={8}
            md={6}
            lg={4}
          >
            <Grid
              item
              className="text-white font-normal text-base text-center"
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <div>Already have an account</div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormInput
                name="firstName"
                formik={formik}
                handleChange={formik.handleChange}
                className="font-inter font-normal text-base"
                label="First name"
                placeholder="First name"
                isHint={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormInput
                name="lastName"
                formik={formik}
                handleChange={formik.handleChange}
                className="font-inter font-normal text-base"
                label="Last name"
                placeholder="Last name"
                isHint={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormInput
                type="email"
                name="email"
                formik={formik}
                handleChange={formik.handleChange}
                className="font-inter font-normal text-base"
                label="Email"
                placeholder="Email"
                isHint={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormInput
                name="mobile"
                formik={formik}
                handleChange={formik.handleChange}
                label="Mobile(optional)"
                className="font-inter font-normal text-base"
                placeholder="Mobile(optional)"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormSelect
                name="country"
                options={countries}
                label="Country"
                placeholder="Select your country"
                formik={formik}
                handleChange={formik.handleChange}
                isHint={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormCheck
                name="acceptTerms"
                label="I would like to receive communications
                  from the AFL and AFL partners about products and
                  initiatives of the AFL and AFL partners, including communications about AFL Mint pre-sales, new drops and
                  special offers. I agree to the terms and
                  conditions of the AFL Privacy Policy"
                formik={formik}
                handleChange={formik.handleChange}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

export default Signup
