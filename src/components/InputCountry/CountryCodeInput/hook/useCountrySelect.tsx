import { CountryConfig } from '@/type/CountryConfig'
import { useCallback, useEffect, useMemo, useState } from 'react';

export type Props = {
  /**
   * Provide a full list of countries
   */
  countryList: CountryConfig[];
  /**
   * Selected country code value
   */
  value: CountryConfig['flag'];
  /**
   * Callback to capture selected country changes
   */
  onChange: (value?: CountryConfig['flag']) => void;
};

export const useCountrySelect = ({ value, onChange, countryList }: Props) => {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const handleSelect = useCallback(
    (selectedCode: CountryConfig['flag']) => {
      onChange(selectedCode);
      setSelected(selectedCode);
    },
    [onChange]
  );

  const selectedCode = useMemo(
    () => countryList.find(({ flag }) => flag === selected)?.code,
    [countryList, selected]
  );

  return { selected, handleSelect, selectedCode };
};
