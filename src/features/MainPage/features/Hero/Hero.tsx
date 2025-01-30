'use client'

import Button from '@/app/UI/Button/Button'
import Image from 'next/image'
import styles from '../../styles/main.module.css'

const Hero = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.heroContainer}>
				<div className={styles.imageWrapperHero}>
					<div className={styles.imageContainerHero}>
						<Image
							src={'/img/pages/main/ground.png'}
							width={820}
							height={600}
							alt='ground'
						/>
						<Image
							className={styles.teamImage}
							src={'/img/pages/main/team.png'}
							width={790}
							height={1200}
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
								на арене виртуальной{' '}
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
								width={205}
								height={60}
								onClick={() => console.log('click')}
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
