import Image from 'next/image'
import styles from './item.module.css'

interface IProps {
	img: string
	text: string
}

const Item = ({ img, text }: IProps) => {
	return (
		<div className={styles.wrapper}>
			<Image src={img} width={50} height={50} alt='item' />
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default Item
