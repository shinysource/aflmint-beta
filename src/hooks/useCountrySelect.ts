import { useEffect, useMemo } from 'react'

import countryList from 'react-select-country-list'

const useCountrySelect = () => {
  const countries = useMemo(() => countryList().getData(), [])
  const preferredCountries = [
    { label: 'Australia', value: 'AU' },
    { label: 'New Zealand', value: 'NZ' },
    { label: 'United States', value: 'US' }
  ]

  useEffect(() => {
    preferredCountries.map((preferredCountry) => {
      const index = countries.findIndex(
        (country) => country.label == preferredCountry.label
      )
      if (index > 0) {
        countries.splice(index, 1)
      }
    })
  }, [])

  return { countries, preferredCountries }
}

export default useCountrySelect
