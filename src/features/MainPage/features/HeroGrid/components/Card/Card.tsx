import Image from 'next/image'
import styles from './card.module.css'
import imgStyles from '../../../../styles/heroGrid.module.css'

interface IProps{
	img: string
	title: string
	text: React.ReactNode
	height: boolean
}
const Card = ({img, title, text, height} : IProps) => {
	return (
		<div className={styles.wrapper}>
			<Image
				src={img}
				width={0}
				height={0}
				sizes='100vw'
				style={{ width: '100%',  display: 'block', height: height ? '100%' : 'auto' }}
				alt='8'
				className={imgStyles.imgCard}
			/>

			<div className={styles.titleContainer}>
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
				<div className={styles.textContainer}>
					<p>
						{text}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Card
