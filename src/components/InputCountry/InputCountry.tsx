import { CountryConfig } from '@/type/CountryConfig'
import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react'
import { CountryCodeInput } from './CountryCodeInput/CountryCodeInput'
import styles from './InputCountry.module.css'
import { PhoneNumberInput } from './PhoneNumberInput/PhoneNumberInput'

interface IProps {
	onChange: (value: string) => void
	data: CountryConfig[] | null
	setCountryFlag: (value: SetStateAction<string>) => void
	countryFlag: string
	customErrors: Record<string, string>
	setCustomErrors: Dispatch<SetStateAction<Record<string, string>>>
}

const InputCountry = ({
	onChange,
	data,
	countryFlag,
	setCountryFlag,
	customErrors,
	setCustomErrors,
}: IProps) => {
	const [mask, setMask] = useState<string | undefined>('')

	const handleFlagChange = useCallback(
		(nextFlag?: CountryConfig['flag']) => {
			if (nextFlag) {
				setCountryFlag(nextFlag)
			}
		},
		[setCountryFlag]
	)

	const [phoneNumber, setPhoneNumber] = useState('')
	const handlePhoneChange = useCallback((value: string) => {
		setPhoneNumber(value)
	}, [])

	useEffect(() => {
		if (!data) return
		setMask(data.find(({ flag }) => flag === countryFlag)?.mask)
	}, [data, countryFlag])

	const formattedPhoneNumber = useMemo(() => {
		if (!data) return phoneNumber.replace(/\s/g, '')
		const country = data.find(({ flag }) => flag === countryFlag)

		return country?.code + phoneNumber.replace(/\s/g, '')
	}, [phoneNumber, countryFlag, data])

	useEffect(() => {
		onChange(formattedPhoneNumber)
	}, [formattedPhoneNumber, onChange])

	return (
		<div className={styles.wrapper}>
			{data ? (
				<>
					<CountryCodeInput
						countryList={data}
						value={countryFlag}
						onChange={handleFlagChange}
						customErrors={customErrors}
						setCustomErrors={setCustomErrors}
					/>
					<PhoneNumberInput
						mask={mask}
						onChange={handlePhoneChange}
						value={phoneNumber}
						customErrors={customErrors}
						setCustomErrors={setCustomErrors}
					/>
				</>
			) : (
				<PhoneNumberInput
					onChange={handlePhoneChange}
					value={phoneNumber}
					customErrors={customErrors}
					setCustomErrors={setCustomErrors}
				/>
			)}
		</div>
	)
}

export default InputCountry
