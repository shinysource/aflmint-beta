import { useMemo } from 'react'

import countryList from 'react-select-country-list'

const useCountrySelect = () => {
  const countries = useMemo(() => countryList().getData(), [])

  return { countries }
}

export default useCountrySelect