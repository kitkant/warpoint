import { format } from '@react-input/mask'
import { ChangeEvent, Dispatch, FC, SetStateAction, useCallback } from 'react'
import { useMask } from './hook/useMask'
import styles from './PhoneNumberInput.module.css'

export type Props = {
	mask?: string
	onChange: (value: string) => void
	value: string
	customErrors: Record<string, string>
	setCustomErrors: Dispatch<SetStateAction<Record<string, string>>>
}

export const PhoneNumberInput: FC<Props> = ({
	mask = '_______________',
	onChange,
	value: valueProp,
	customErrors,
	setCustomErrors,
}) => {
	const { options, hasEmptyMask, inputRef } = useMask({ mask })

	const value = format(valueProp, options)

	const handleChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			onChange(format(event.target.value, options))
		},
		[onChange, options]
	)

	return (
		<input
			placeholder={hasEmptyMask ? 'Phone number' : mask}
			ref={inputRef}
			className={
        hasEmptyMask ? styles.inputEmpty :
				customErrors.phone ? styles.input + ' ' + styles.error : styles.input
			}
			type='tel'
			onChange={handleChange}
			value={value}
			onClick={() =>
				customErrors &&
				customErrors.phone &&
				setCustomErrors({ ...customErrors, phone: '' })
			}
		/>
	)
}
