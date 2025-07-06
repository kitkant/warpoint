import { CountryConfig } from '@/type/CountryConfig'
import {   useCallback, useState, useEffect  } from 'react';



export const useCountryFilter = (countryList: CountryConfig[]) => {
  const [filteredList, setFilteredList] = useState(countryList);

  useEffect(() => {
    setFilteredList(countryList);
  }, [countryList]);

  const [filter, setFilterState] = useState('');

  const setFilter = useCallback(
    (event: string) => {
      setFilterState(event);
      const nextCountries = countryList.filter(({ name }) =>
        name.toLowerCase().includes(event.toLowerCase())
      );
      if (event !== '') {
        setFilteredList(nextCountries);
      } else {
        setFilteredList(countryList);
      }
    },
    [countryList]
  );

  return { filter, setFilter, filteredList };
};
