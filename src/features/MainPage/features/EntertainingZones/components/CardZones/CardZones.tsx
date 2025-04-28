import useMediaQuery from '@/app/hooks/useMediaQuery'
import Button from '@/app/UI/Button/Button'
import Image from 'next/image'
import styles from './cardZones.module.css'

interface IProps {
	title: string
	subTitle: string
	text: string
	img: string
	position: string
	btn: string
}

const CardZones = ({ title, subTitle, text, img, position, btn }: IProps) => {
	const laptop1200 = useMediaQuery(1202)
	const laptop640 = useMediaQuery(641)

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.imgContainer}>
					<Image
						src={img}
						alt='man'
						fill
						className='image'
						priority
						style={{
							objectFit: 'cover',
							objectPosition: position === 'left' ? 'top' : 'bottom',
						}}
					/>
					<button className={styles.playBtn}>
						<Image
							alt='play'
							width={laptop640 ? 66 : 80}
							height={laptop640 ? 66 : 80}
							src={'/img/pages/main/EntertainingZones/play-button.svg'}
						/>
					</button>
				</div>
				<div className={styles.descriptionWrapper}>
					<div className={styles.titleWrapper}>
						<h3 className={styles.title}>{title}</h3>
						<p className={styles.subTitle}>{subTitle}</p>
					</div>
					<div className={styles.textWrapper}>
						<p className={styles.text}>{text}</p>
					</div>
					<div className={styles.detailWrapper}>
						<button className={styles.moreBtn}>Подробнее →</button>
					</div>
					<div className={styles.btnWrapper}>
						<Button
							title={btn}
							primary={true}
							width={position === 'left' ? 175 : 256}
							height={51}
							onClick={() => console.log('click')}
							header={false}
						/>
						{position === 'left' ? (
							<p>
								от 900 <strong>₽</strong> / чел.
							</p>
						) : (
							<></>
						)}
					</div>
				</div>
				{position === 'left' ? (
					<Image
						className={styles.blueline}
						src={'/img/pages/main/EntertainingZones/blueline.svg'}
						width={laptop1200 ? 280 : 330}
						height={laptop1200 ? 230 : 270}
						alt='blueline'
					/>
				) : (
					<Image
						className={styles.redline}
						src={'/img/pages/main/EntertainingZones/redline.svg'}
						width={laptop1200 ? 280 : 330}
						height={laptop1200 ? 230 : 270}
						alt='redline'
					/>
				)}
			</div>
			<Button
				title={btn}
				primary={true}
				width={position === 'left' ? 175 : 256}
				height={75}
				onClick={() => console.log('click')}
				header={false}
			/>
		</div>
	)
}

export default CardZones
