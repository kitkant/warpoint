import Image from 'next/image'
import styles from '../../styles/main.module.css'

const Hero = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.heroContainer}>
				<div className={styles.imageContainerHero}>
					<Image
						src={'/img/pages/main/ground.png'}
						width={790}
						height={550}
						alt='ground'
					/>
				</div>
				<div className={styles.container}>
					<div className={styles.titleWrapper}>
						<div className={styles.title}>
							<em className={styles.titleItem}>Берите друзей И УСТРОЙте</em>
						</div>
						<div className={styles.title}>
							<em className={styles.titleItem}>эпичную битву</em>
						</div>
						<div className={styles.title}>
							<em className={styles.titleItemRedBox}>на арене виртуальной </em>
						</div>
						<div className={styles.title}>
							<em className={styles.titleItemRedBox}>РЕАЛЬНОСТИ</em>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
