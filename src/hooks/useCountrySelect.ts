import { useMemo } from 'react'

// import countryList from 'react-select-country-list'

const useCountrySelect = () => {
  // const countries = useMemo(() => countryList().getData(), [])
  const countries = [{label: 'Australia', value: 'AU'}, {label: 'New Zealand', value: 'NZ'}, {label: 'United States', value: 'US'}]

  return { countries }
}

export default useCountrySelect