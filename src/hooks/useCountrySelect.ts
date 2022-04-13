import { useMemo } from 'react'

// import countryList from 'react-select-country-list'

const useCountrySelect = () => {
  // const countries = useMemo(() => countryList().getData(), [])
  const countries = [{label: 'Australia', value: 'AU'}, {label: 'New Zealand', value: 'NZ'}, {label: 'United States', value: 'US'}]

  const prefferedCountries = [{label: 'Australia', value: 'AU'}, {label: 'New Zealand', value: 'NZ'}, {label: 'United States', value: 'US'}]

  prefferedCountries.map(prefferedCountry => {
    let index = countries.findIndex(country => country.label == prefferedCountry.label)
    countries.splice(index, 1)
  })

  return { countries, prefferedCountries }
}

export default useCountrySelect