import useMediaQuery from '@/app/hooks/useMediaQuery'
import Image from 'next/image'
import { Fragment } from 'react'
import styles from '../../styles/moreForGame.module.css'
import Item from './components/Item/Item'
import itemData from './data/itemData'

const MoreForGame = () => {
	const laptop1200 = useMediaQuery(1202)
	const tablet960 = useMediaQuery(961)
	const mobile640 = useMediaQuery(641)
	// const mobile480 = useMediaQuery(480)
	// const mobile450 = useMediaQuery(450)
	// const mobile380 = useMediaQuery(380)
	const laptop640 = useMediaQuery(641)
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.titleWrapper}>
					<h2 className={styles.title}>
						ПОДРОБНЕЙ ПрО ИГРУ<span>WARPOINT ARENA</span>
					</h2>
				</div>
				<div className={styles.descriptionWrapper}>
					<div className={styles.descriptionTitleWrapper}>
						<h3 className={styles.descriptionTitle}>Warpoint arena</h3>
						<div className={styles.descriptionTextWrapper}>
							<p>
								Аналог игры Counter-Strike только в формате VR, где две команды
								сражаются друг против друга.
							</p>
							<p>
								15 уникальных карт, 15 видов оружия
								{ mobile640 ? <br/> : tablet960 ? <></> : <br />} и 3 игровых режима — нужно выбрать свой стиль сражения и
								отправиться на поле боя
							</p>
						</div>
						<div className={styles.descriptionGridWrapper}>
							{itemData.map(item => {
								return (
									<Fragment key={item.img}>
										<Item text={item.text} img={item.img} />
									</Fragment>
								)
							})}
						</div>
						<div className={styles.detailWrapper}>
							<button className={styles.moreBtn}>Подробнее →</button>
						</div>
					</div>
					<div className={styles.descriptionImgWrapper}>
						<div className={styles.imgWrapper}>
							<Image
								src={'/img/pages/main/moreForGame/warpoint_arena.jpeg'}
								width={mobile640 ? 460 : tablet960 ? 560 : laptop1200 ? 400 : 580}
								height={mobile640 ? 260 :laptop1200 ? 380 : 385}
								alt='game arena'
							/>
							<button className={styles.playBtn}>
								<Image
									alt='play'
									width={laptop640 ? 60 : 80}
									height={laptop640 ? 60 : 80}
									src={'/img/pages/main/EntertainingZones/play-button.svg'}
								/>
							</button>
							<div className={styles.redBox}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MoreForGame
