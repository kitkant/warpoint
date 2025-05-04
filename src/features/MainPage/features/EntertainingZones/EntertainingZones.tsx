import { Fragment } from 'react'
import styles from '../../styles/entertainingZones.module.css'
import CardZones from './components/CardZones/CardZones'
import cardData from './data/cardData'

const EntertainingZones = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<h2 className={styles.title}>РАЗВЛЕКАТЕЛЬНЫЕ ЗОНЫ</h2>
					<p className={styles.subTitle}>
						Сразитесь с друзьями на арене, пройдите увлекательный квест или
						прокатитесь на захватывающих дух американских горках
					</p>
				</div>
				<div className={styles.cardWrapper}>
					{cardData.map(item => {
						return (
							<Fragment key={item.title}>
								<CardZones
									title={item.title}
									text={item.text}
									subTitle={item.subTitle}
									img={item.img}
									position={item.position}
									btn={item.btn}
								/>
							</Fragment>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default EntertainingZones
