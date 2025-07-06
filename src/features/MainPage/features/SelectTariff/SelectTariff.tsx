import Button from '@/app/UI/Button/Button'
import { Fragment } from 'react'
import styles from '../../styles/selectTariff.module.css'
import Card from './components/Card'
import dataTariff from './data/data'
import useMediaQuery from '@/app/hooks/useMediaQuery'
import { useModal } from '@/context/ModalContext'

const SelectTariff = () => {
	const desktop1920 = useMediaQuery(1920)
	const mobile480 = useMediaQuery(480)
	const { openModal } = useModal()
	
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<h2 className={styles.title}>Выберите тариф</h2>
					<p className={styles.subTitle}>
						Присоединитесь к открытой игре или забронируйте площадку для своей
						компании
					</p>
				</div>
				<div className={styles.cardWrapper}>
					{dataTariff.map(item => {
						return (
							<Fragment key={item.title}>
								<Card
									title={item.title}
									subTitle={item.subTitle}
									weekday={item.weekday}
									weekend={item.weekend}
									who={item.who}
								/>
							</Fragment>
						)
					})}
				</div>
				<div className={styles.btnWrapper}>
				<Button
					title={'Забронировать'}
					primary={true}
					width={mobile480 ? 406 : desktop1920 ? 240 : 305}
					height={mobile480 ? 75 : desktop1920 ? 50 : 75}
					onClick={() => openModal("RESPONSIVE")}
					header={false}
				/>
				</div>
			</div>
		</div>
	)
}

export default SelectTariff
