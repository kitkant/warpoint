
import Button from '@/app/UI/Button/Button'
import Image from 'next/image'
import styles from '../../styles/main.module.css'
import useMediaQuery from '@/app/hooks/useMediaQuery'


const Hero = () => {

	const desktop1710 = useMediaQuery(1711)
	const desktop1280 = useMediaQuery(1280 + 21)
	const laptop1200 = useMediaQuery(1202)
	const laptop1024 = useMediaQuery(1026)

	return (
		<div className={styles.wrapper}>
			<div className={styles.heroContainer}>
				<div className={styles.imageWrapperHero}>
					<div className={styles.imageContainerHero}>
						<Image
							className={styles.groundImage}
							src={'/img/pages/main/ground.png'}
							width={laptop1024 ? 700 :laptop1200 ? 750 : desktop1280 ? 800  :900}
							height={laptop1024 ? 450 : laptop1200 ? 500 : desktop1280 ? 520  :600}
							alt='ground'
						/>
						<Image
							className={styles.teamImage}
							src={'/img/pages/main/team.png'}
							width={laptop1024 ? 550 : laptop1200 ? 600 : desktop1280 ? 700 :790}
							height={laptop1024 ? 800 : laptop1200 ? 900 : desktop1280 ? 1000 : 1150}
							alt='ground'
						/>
						<div className={styles.gradientBlackGround}></div>
						<div className={styles.gradientBlack}></div>
					</div>
				</div>
				<div className={styles.containerHeroContent}>
					<div className={styles.titleWrapperHero}>
						<div className={styles.titleHero}>
							<em className={styles.titleItemHero}>Берите друзей И УСТРОЙте</em>
						</div>
						<div className={styles.titleHero}>
							<em className={styles.titleItemHero}>эпичную битву</em>
						</div>
						<div className={styles.titleHero}>
							<em className={styles.titleItemRedBoxHero}>
								на арене виртуальной
							</em>
						</div>
						<div className={styles.titleHero}>
							<em className={styles.titleItemRedBoxHero}>РЕАЛЬНОСТИ</em>
						</div>
					</div>
					<div className={styles.pinContainerHero}>
						<div className={styles.pinTitleHero}>
							Командные VR-сражения — современная альтернатива лазертагу и
							пейнтболу
						</div>
						<div className={styles.pinBtnContainer}>
							<Button
								title={'Забронировать'}
								primary={true}
								width={desktop1710 ? 170 : 205 }
								height={desktop1710 ? 50 :60}
								onClick={() => console.log('click')}
								header={false}
							/>
							<div className={styles.pinAddressContainerHero}>
								<Image src={'/img/pages/main/pin.svg'} width={30} height={30} alt='pin'/>
								<div className={styles.addressHero}>г. Москва, Волгоградский пр-кт, 32к8</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
