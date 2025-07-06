import { CountryConfig } from '@/type/CountryConfig'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import styles from './CountryCodeInput.module.css'
import { useCountryFilter } from './hook/useCountryFilter'
import { useCountrySelect } from './hook/useCountrySelect'

export type Props = {
	countryList: CountryConfig[]
	value: CountryConfig['flag']
	onChange: (value?: CountryConfig['flag']) => void
	customErrors: Record<string, string>
	setCustomErrors: Dispatch<SetStateAction<Record<string, string>>>
}

export const CountryCodeInput = ({
	countryList,
	value,
	onChange,
	customErrors,
	setCustomErrors,
}: Props) => {
	const { filter, setFilter, filteredList } = useCountryFilter(countryList)
	const { selectedCode, handleSelect, selected } = useCountrySelect({
		onChange,
		countryList,
		value,
	})

	const [isOpen, setIsOpen] = useState(false)
	const wrapperRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<div className={styles.wrapper} ref={wrapperRef}>
			<button
				className={styles.button}
				type='button'
				onClick={() => {
					setIsOpen(!isOpen)
					return (
						customErrors &&
						customErrors.phone &&
						setCustomErrors({ ...customErrors, phone: '' })
					)
				}}
			>
				<span className={styles.flag}>
					<Image
						src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${selected}.svg`}
						width={30}
						height={15}
						alt='🏳'
					/>
				</span>
				<span className={styles.icon}>▼</span>
				<span className={styles.code}>{selectedCode}</span>
			</button>

			{isOpen && (
				<div className={styles.dropdown}>
					{countryList.length > 5 && (
						<div className={styles.searchWrapper}>
							<input
								type='text'
								value={filter}
								onChange={e => setFilter(e.target.value)}
								placeholder='Country name'
								className={styles.searchInput}
							/>
						</div>
					)}
					<div className={styles.optionsScroll}>
						{filteredList.map(({ code, flag, name }) => (
							<div
								key={name}
								className={styles.option}
								onClick={() => {
									handleSelect(flag)
									setIsOpen(false)
								}}
							>
								<div className={styles.checkIcon}>
									{code === selectedCode && (
										<span className={styles.checkVisible}>✓</span>
									)}
								</div>
								<span className={styles.optionFlag}>
									<Image
										src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${flag}.svg`}
										width={30}
										height={15}
										alt='🏳'
									/>
								</span>
								<div className={styles.optionCode}>{code}</div>
								<div className={styles.optionName}>{name}</div>
							</div>
						))}
						{filteredList.length === 0 && (
							<div className={styles.noResults}>No results.</div>
						)}
					</div>
				</div>
			)}
		</div>
	)
}
