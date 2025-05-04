import Image from 'next/image'
import styles from '../components/card.module.css'
import useMediaQuery from '@/app/hooks/useMediaQuery'


interface IProps{
	title: string
	subTitle: string
	weekday: string
	weekend: string
	who: string
}

const Card = ({title, subTitle , weekday, weekend, who}: IProps) => {

	const laptop1200 = useMediaQuery(1202)
	const tablet960 = useMediaQuery(961)


	return (
		<div className={styles.wrapper}>
			<div className={styles.titleWrapper}>
				<div className={styles.titleContainer}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.subTitle}>2—10 участников</p>
				</div>
				<p className={styles.titleText}>
					{subTitle}
				</p>
			</div>
			<div className={styles.priceWrapper}>
				<div className={styles.item}>
					<p className={styles.priceTitle}><span>Время</span><span>игры</span> </p>
					<p className={styles.priceText}>45 минут</p>
				</div>
				<div className={styles.item}>
					<p className={styles.priceTitle}>ПН-ЧТ</p>
					<div className={styles.priceTextWrapper}>
						<p className={styles.priceBoldText}>
							{weekday} ₽
						</p>
						<p className={styles.priceSubText}>{who}</p>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.priceTitleWrapper}>
						<p className={styles.priceTitle}>ПТ-ВС</p>
						<p className={styles.priceSubTitle}><span>и праздничные</span><span> дни</span></p>
					</div>
					<div className={styles.priceTextWrapper}>
						<p className={styles.priceBoldText}>
						{weekend} ₽
						</p>
						<p className={styles.priceSubText}>{who}</p>
					</div>
				</div>
				
			</div>
			{who === 'за игрока' ? (
					<Image
						className={styles.blueline}
						src={'/img/pages/main/EntertainingZones/blueline.svg'}
						width={tablet960 ? 177 : laptop1200 ? 280 : 238}
						height={tablet960 ? 144 : laptop1200 ? 230 : 200}
						alt='blueline'
					/>
				) : (
					<Image
						className={styles.redline}
						src={'/img/pages/main/EntertainingZones/redline.svg'}
						width={tablet960 ? 177 : laptop1200 ? 280 : 238}
						height={tablet960 ? 144 : laptop1200 ? 230 : 200}
						alt='redline'
					/>
				)}
		</div>
	)
}

export default Card
