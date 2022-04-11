import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Grid } from '@mui/material'
// import lookup from 'country-code-lookup'
import { SelectChangeEvent } from '@mui/material/Select'

import FormInput from '../../components/Fields/FormInput'
import FormCheck from '../../components/Fields/FormCheck'
import FormSelect from '../../components/Fields/FormSelect'
import CustomButton from '../../components/Button/CustomButton'
import FormMobile from '../../components/Fields/FormMobile'

import { lookup, callingCountries } from 'country-data'
import useCountrySelect from 'hooks/useCountrySelect'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Enter your Firstname'),
  lastName: Yup.string().required('Enter your Lastname'),
  email: Yup.string().required('Enter your Email').email('Enter a valid Email'),
  country: Yup.mixed().required('Select a Country'),
  mobile: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Enter x numbers'
    )
    .max(9, 'number less than 9')
    .notRequired(),
  acceptTerms: Yup.bool().oneOf([true], 'Accept the privacy terms to continue')
})

interface RegisterForm {
  firstName: string
  lastName: string
  email: string
  mobile: string | undefined
  country: string
  acceptTerms: boolean
}

const initialValues: RegisterForm = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  country: '',
  acceptTerms: false
}

const Signup = () => {
  const [mobilePrefix, setMobilePrefix] = useState('')
  const { countries } = useCountrySelect()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      setMobilePrefix('')
      actions.resetForm({ values: initialValues })
      formik.values.acceptTerms = false
    }
  })

  const handleCountryChange = (evt: SelectChangeEvent) => {
    formik.setFieldValue('country', evt.target.value)
    setMobilePrefix(
      `${
        lookup.countries({ name: evt.target.value })[0].countryCallingCodes
      } | `
    )
  }

  return (
    <Grid container justifyContent="center" className="signup-back">
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
          <div className="font-podium49">Sign Up</div>
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
            <Grid item className="text-white" xs={12} sm={12} md={12} lg={12}>
              <CustomButton
                model="secondary"
                variant="outlined"
                name="signup"
                label="SIGN UP WITH OKTA"
                size="medium"
              />
            </Grid>
            <Grid
              item
              className="text-white"
              sx={{ marginTop: '12px' }}
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <div>Or sign up with email</div>
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
              <FormSelect
                name="country"
                options={countries}
                label="Country"
                placeholder="Select your country"
                formik={formik}
                handleChange={handleCountryChange}
                isHint={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormMobile
                name="mobile"
                formik={formik}
                handleChange={formik.handleChange}
                className="font-inter font-normal text-base"
                label="Mobile"
                placeholder="Mobile(optional)"
                prefix={mobilePrefix}
                isHint={true}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormCheck
                name="acceptTerms"
                label="I would like to receive communications
                  from the AFL and AFL partners about products and
                  initiatives of the AFL and AFL partners, including communications about AFL Mint pre-sales, new drops and
                  special offers."
                formik={formik}
                handleChange={formik.handleChange}
                isHint={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <CustomButton
                type="submit"
                model="primary"
                variant="contained"
                name="signup"
                label="SIGN UP"
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

export default Signup
