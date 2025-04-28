import Image from 'next/image'
import imgStyles from '../../../../styles/heroGrid.module.css'
import styles from './card.module.css'

interface IProps {
	img: string
	title: string
	text: React.ReactNode
	height: boolean
	index: number
	cover: boolean
	position: string
}
const Card = ({ img, title, text, height, index, cover, position }: IProps) => {
	return (
		<div className={styles.wrapper}>
			<Image
				src={img}
				width={0}
				height={0}
				sizes='100vw'
				style={{
					width: '100%',
					display: 'block',
					height: height ? '100%' : 'auto',
					objectFit: cover ? 'cover' : 'fill',
					objectPosition: position,
				}}
				alt='8'
				className={imgStyles.imgCard}
			/>
			<div
				className={
					styles.titleContainer + ' ' + styles.titleContainer + `${index}`
				}
			>
				<h3>{title}</h3>
				<div>
					<Image
						src={'/img/pages/main/herogrid/down-arrow_1.svg'}
						width={100}
						height={80}
						alt='arrow'
						style={{ transform: 'rotate(-90deg)', marginTop: '-25px' }}
					/>
				</div>
			</div>
			<div className={styles.backgroundBlack}></div>
			<div className={styles.overlay}>
				<div
					className={
						styles.textContainer + ' ' + styles.textContainer + `${index}`
					}
				>
					<p>{text}</p>
				</div>
			</div>
		</div>
	)
}

export default Card
