'use client'
import { CountryConfig } from '@/type/CountryConfig'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import 'react-phone-number-input/style.css'
import InputCountry from '../InputCountry/InputCountry'
import styles from './responsive.module.css'

type Inputs = {
	name: string
	phone: string
	email: string
}

const ModalResponsive = () => {
	const {
		control,
		register,
		handleSubmit,
		formState: {},
	} = useForm<Inputs>()

	const validateForm = (formData: Inputs) => {
		const errors: Record<string, string> = {}

		// Валидация имени
		if (!formData.name) {
			errors.name = 'Введите имя'
		} else if (!/^[\p{L}\s'\-\.]+$/u.test(formData.name)) {
			errors.name = 'Недопустимые символы в имени'
		} else if (formData.name.length < 2 || formData.name.length > 50) {
			errors.name = 'Имя должно быть от 2 до 50 символов'
		}

		// Валидация email
		if (!formData.email) {
			errors.email = 'Введите email'
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
		) {
			errors.email = 'Некорректный email'
		}
		if (data) {
			const country = data.find(({ flag }) => flag === countryFlag)
			const countryCodeLength = country?.code.length
			const countryMaskLength = country?.mask?.replace(/\s/g, '').length

			if (
				countryCodeLength &&
				countryMaskLength &&
				formData.phone.length !== countryCodeLength + countryMaskLength
			) {
				errors.phone = 'Номер не корректный'
			}
		} else {
			if (!formData.phone) {
				errors.phone = 'Введите телефон'
			} else if (formData.phone.length < 10) {
				errors.phone = 'Телефон слишком короткий'
			}
		}

		setCustomErrors(errors)
		return Object.keys(errors).length === 0
	}
	const [customErrors, setCustomErrors] = useState<Record<string, string>>({})
	const [showErrors, setShowErrors] = useState(false)
	const [data, setData] = useState<CountryConfig[] | null>(null)

	const onSubmit = (data: Inputs) => {
		setShowErrors(true)
		const isValid = validateForm(data)

		if (isValid) {
			console.log('Форма валидна, данные:', data)
		}
	}

	const [countryFlag, setCountryFlag] = useState<CountryConfig['flag']>('RU')

	useEffect(() => {
		const cancelToken = axios.CancelToken.source()

		axios
			.get('/data/listContryMask.json', { cancelToken: cancelToken.token })
			.then(response => {
				setData(response.data)
			})
			.catch(err => {
				if (!axios.isCancel(err)) {
				}
			})

		return () => cancelToken.cancel()
	}, [])

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Оставьте заявку и мы свяжемся с вами</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<input
					placeholder='Имя'
					className={
						customErrors.name ? styles.input + ' ' + styles.error : styles.input
					}
					{...register('name', {})}
					type='text'
					onClick={() =>
						customErrors &&
						customErrors.name &&
						setCustomErrors({ ...customErrors, name: '' })
					}
				/>
				{showErrors && customErrors.name && (
					<p style={{ color: 'red', fontSize: '14px' }}>{customErrors.name}</p>
				)}
				<input
					placeholder='email'
					className={
						customErrors.email
							? styles.input + ' ' + styles.error
							: styles.input
					}
					{...register('email', {})}
					type='email'
					onClick={() =>
						customErrors &&
						customErrors.email &&
						setCustomErrors({ ...customErrors, email: '' })
					}
				/>

				{showErrors && customErrors.email && (
					<p style={{ color: 'red', fontSize: '14px' }}>{customErrors.email}</p>
				)}
				<Controller
					name='phone'
					control={control}
					defaultValue=''
					render={({ field}) => (
						<>
							<InputCountry
								onChange={field.onChange}
								data={data}
								countryFlag={countryFlag}
								setCountryFlag={setCountryFlag}
								customErrors={customErrors}
								setCustomErrors={setCustomErrors}
							/>
							{showErrors && customErrors.phone && (
								<p style={{ color: 'red', fontSize: '14px' }}>
									{customErrors.phone}
								</p>
							)}
						</>
					)}
				/>
				<input value='Оставить заявку' className={styles.btn} type='submit' />
			</form>
			<p className={styles.policyText}>
				<span>
					Нажимая кнопку &quot;Оставить заявку&quot; вы соглашаетесь на
					обработку
				</span>
				<span>
					персональных данных в соответствии с Политикой конфиденциальности,
				</span>
				<span>а также с условиями Пользовательского соглашения.</span>
			</p>
		</div>
	)
}

export default ModalResponsive
