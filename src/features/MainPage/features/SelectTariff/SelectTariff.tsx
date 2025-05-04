import { Fragment } from 'react'
import styles from '../../styles/selectTariff.module.css'
import Card from './components/Card'
import dataTariff from './data/data'

const SelectTariff = () => {
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
			</div>
		</div>
	)
}

export default SelectTariff
