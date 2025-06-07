import useMediaQuery from '@/app/hooks/useMediaQuery'
import Image from 'next/image'
import styles from './card.module.css'

interface IProps {
	title: string
	titleLaptop: string
	textDesktop: string
	textLaptop: string
	textMobile: string
	img: string
	index: number
}

const Card = ({
	title,
	textDesktop,
	titleLaptop,
	textLaptop,
	img,
	index,
}: IProps) => {
	const laptop1200 = useMediaQuery(1202)

	return (
		<div className={styles.embla__slide}>
			<div className={styles.imgWrapper}>
				<Image
					src={img}
					alt='event'
					fill
					className='image'
					priority
					style={{
						objectFit: 'cover',
						objectPosition: 'center',
					}}
				/>
			</div>
			<div className={styles.contentWrapper}>
				<h3 className={styles.title}>{laptop1200 ? titleLaptop : title}</h3>
				<p className={styles.text}>{laptop1200 ? textLaptop : textDesktop}</p>
				<div className={styles.number}>0{index + 1}</div>
			</div>
		</div>
	)
}

export default Card
