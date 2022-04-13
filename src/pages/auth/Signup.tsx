import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Grid } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'

import FormInput from '../../components/Fields/FormInput'
import FormCheck from '../../components/Fields/FormCheck'
import FormSelect from '../../components/Fields/FormSelect'
import CustomButton from '../../components/Button/CustomButton'
import FormMobile from '../../components/Fields/FormMobile'

import { lookup } from 'country-data'
import useCountrySelect from 'hooks/useCountrySelect'

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('Enter your Firstname'),
  last_name: Yup.string().required('Enter your Lastname'),
  email: Yup.string().required('Enter your Email').email('Enter a valid Email'),
  country: Yup.mixed().required('Select a Country'),
  mobile: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Enter x numbers'
    )
    .max(10, 'number less than 10')
    .notRequired(),
  acceptTerms: Yup.bool().oneOf([true], 'Accept the privacy terms to continue'),
  acceptReceive: Yup.bool().oneOf(
    [true],
    'Accept the receive from AFL and AFL partners to continue'
  )
})

interface RegisterForm {
  first_name: string
  last_name: string
  email: string
  mobile: string | undefined
  country: string
  acceptTerms: boolean
  acceptReceive: boolean
}

const initialValues: RegisterForm = {
  first_name: '',
  last_name: '',
  email: '',
  mobile: '',
  country: '',
  acceptTerms: false,
  acceptReceive: false
}

const Signup = () => {
  const [mobilePrefix, setMobilePrefix] = useState('')
  const { countries } = useCountrySelect()
  const formRef = useRef<HTMLFormElement>(null)
  const salesforceURL = (import.meta.env.VITE_SALESFORCE_URL || '').toString()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      formik.setFieldValue('acceptTerms', false)
      formik.setFieldValue('acceptReceive', false)
      formRef.current?.submit()
      actions.resetForm()
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
        <Grid item className="text-[32px] font-bold text-white">
          <div className="font-podium49">Sign Up</div>
        </Grid>
      </Grid>

      <Grid item>
        <form
          action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
          method="POST"
          className="flex justify-center"
          ref={formRef}
        >
          <input
            type="hidden"
            name="captcha_settings"
            value='{"keyname":"WebToLead_EOI_NFT","fallback":"true","orgId":"00D9D0000000W3o","ts":""}'
          />
          <input type="hidden" name="oid" value="00D9D0000000W3o" />
          <input
            type="hidden"
            name="retURL"
            value="https://www.aflmint.com.au/thank-you/"
          />
          <input
            type="hidden"
            name="00N5g00000GRcv9"
            id="00N5g00000GRcv9"
            value="NFT - Expression of Interest"
          />
          <input
            type="hidden"
            name="recordType"
            id="recordType"
            value="0129D000001FuwI"
          />
          <input type="hidden" name="Campaign_ID" value="7019D0000002k1lQAA" />
          <input type="hidden" name="member_status" value="Received" />
          <input type="hidden" name="lead_source" value="Website" />
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
              className="text-base font-normal text-center text-white"
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
                id="first_name"
                name="first_name"
                formik={formik}
                handleChange={formik.handleChange}
                className="font-inter text-base font-normal"
                label="First name"
                placeholder="First name"
                isHint={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormInput
                id="last_name"
                name="last_name"
                formik={formik}
                handleChange={formik.handleChange}
                className="font-inter text-base font-normal"
                label="Last name"
                placeholder="Last name"
                isHint={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormInput
                id="email"
                type="email"
                name="email"
                formik={formik}
                handleChange={formik.handleChange}
                className="font-inter text-base font-normal"
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
                id="mobile"
                name="mobile"
                formik={formik}
                handleChange={formik.handleChange}
                className="font-inter text-base font-normal"
                label="Mobile"
                placeholder="Mobile(optional)"
                prefix={mobilePrefix}
                isHint={true}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormCheck
                name="acceptTerms"
                label={
                  <div className=" text-sm text-grey">
                    <p>
                      I agree to the{' '}
                      <a
                        className="underline"
                        href=" https://media.telstra.com.au/terms-of-use.html?ref=Net-Footer-Corp-Terms"
                        target="_blank"
                      >
                        terms
                      </a>{' '}
                      and conditions of the{' '}
                      <a
                        className="underline"
                        href="https://www.afl.com.au/privacy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        AFL Privacy Policy
                      </a>{' '}
                      and to receiving communications in relation to AFL Mint
                      announcements, including AFL Mint pre-sales, new drops and
                      special offers.
                    </p>
                  </div>
                }
                formik={formik}
                handleChange={formik.handleChange}
                isHint={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormCheck
                name="acceptReceive"
                label={
                  <div className=" text-sm text-grey">
                    <p>
                      I would like to receive communications from the AFL and
                      AFL partners about other products and initiatives of the
                      AFL and AFL partners.{' '}
                    </p>
                  </div>
                }
                formik={formik}
                handleChange={formik.handleChange}
                isHint={true}
              />
            </Grid>
            <div
              className="g-recaptcha"
              data-sitekey="6Lc4L04fAAAAAF9IwSc0wmC4B-Ay1pcc6sfOFy89"
            ></div>
            <br />

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <CustomButton
                type="button"
                model="primary"
                variant="contained"
                label="SIGN UP"
                onClick={() => {
                  formik.handleSubmit()
                }}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

export default Signup
