import { useState, useRef, useMemo } from 'react'
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
  acceptTerms: Yup.bool().oneOf([true], 'Accept the privacy terms to continue')
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
  const formRef = useRef<HTMLFormElement>(null)
  const { countries, preferredCountries } = useCountrySelect()
  // const retURL = useMemo(() => `${window.location.origin}/thank-you`, [window])
  // const salesforceURL = (import.meta.env.VITE_SALESFORCE_URL || '').toString()

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
    if (
      lookup.countries({ name: evt.target.value })[0]?.countryCallingCodes !==
      undefined
    ) {
      setMobilePrefix(
        `${
          lookup.countries({ name: evt.target.value })[0].countryCallingCodes
        } | `
      )
    } else {
      setMobilePrefix('')
    }
  }

  return (
    <Grid container justifyContent="center" className="py-9 signup-back">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <img src="/assets/logo/Logo.svg"></img>
        </Grid>
        <Grid item className="text-[32px] font-bold text-white">
          <div className="font-podium49">SUBSCRIBE</div>
        </Grid>
      </Grid>

      <Grid item>
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
          method="POST"
          className="flex justify-center"
          ref={formRef}
        >
          <input
            type="hidden"
            name="captcha_settings"
            value='{"keyname":"WebToLead_EOI_NFT","fallback":"true","orgId":"00D5g000004G9rE","ts":""}'
          />
          <input type="hidden" name="oid" value="00D5g000004G9rE" />
          <input
            type="hidden"
            name="retURL"
            value="http://aflmint.com.au/thank-you"
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
            value="0125g000000mev8"
          />
          <input type="hidden" name="Campaign_ID" value="7015g000000U9b5AAC" />
          <input type="hidden" name="member_status" value="Received" />
          <input type="hidden" name="lead_source" value="Website" />
          <Grid
            item
            className="lg:!max-w-[1800px]"
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
            >
              <div className="mb-[8px]">
                Get the latest updates and exclusive early notification of the
                first AFL Mint drop in your inbox.{' '}
              </div>
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <FormSelect
                name="country"
                options={countries}
                preferredOptions={preferredCountries}
                label="Country"
                placeholder="Select your country"
                formik={formik}
                handleChange={handleCountryChange}
                isHint={true}
              />
            </Grid>
            <Grid item xs={12}>
              <FormMobile
                id="mobile"
                name="mobile"
                formik={formik}
                handleChange={formik.handleChange}
                className="font-inter text-base font-normal"
                label="Mobile (optional)"
                prefix={mobilePrefix}
                isHint={true}
              />
            </Grid>

            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
            <Grid item>
              <div
                className="g-recaptcha"
                data-sitekey="6Lc4L04fAAAAAF9IwSc0wmC4B-Ay1pcc6sfOFy89"
              ></div>
            </Grid>

            <Grid item xs={12}>
              <CustomButton
                type="button"
                model="primary"
                variant="contained"
                label="SUBSCRIBE"
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
