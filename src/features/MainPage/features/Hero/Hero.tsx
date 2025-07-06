import useMediaQuery from '@/app/hooks/useMediaQuery'
import Button from '@/app/UI/Button/Button'
import { useModal } from '@/context/ModalContext'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useCallback, useEffect, useRef } from 'react'
import styles from '../../styles/hero.module.css'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
	const desktop1710 = useMediaQuery(1711)
	const desktop1280 = useMediaQuery(1280 + 21)
	const laptop1200 = useMediaQuery(1202)
	const laptop1024 = useMediaQuery(1026)
	const tablet960 = useMediaQuery(961)
	const mobile640 = useMediaQuery(641)
	const mobile480 = useMediaQuery(480)
	const mobile450 = useMediaQuery(450)
	const mobile380 = useMediaQuery(380)
	const { openModal } = useModal()

	const elementsRef = useRef(new Map())

	const setRef = useCallback(
		(id: string) => (el: HTMLElement | null) => {
			if (el) {
				elementsRef.current.set(id, el)
			} else {
				elementsRef.current.delete(id)
			}
		},
		[]
	)

	useEffect(() => {
		const elementsIds = ['title1', 'title2', 'title3', 'title4']

		const elements = elementsIds.map(id => elementsRef.current.get(id))

		if (elements.some(el => !el)) {
			return
		}

		const [title1, title2, title3, title4] = elements

		gsap.to(title1, {
			scrollTrigger: {
				trigger: title1,
				start: 'top 80%',
				once: true,
			},
			duration: 1,
			opacity: 1,
			x: 0,
			ease: 'power2.out',
			onStart: () => title1.classList.remove(styles.gsapHidden),
		})

		gsap.to(title2, {
			scrollTrigger: {
				trigger: title2,
				start: 'top 100%',
				once: true,
			},
			duration: 1.5,
			opacity: 1,
			x: 0,
			ease: 'power2.out',
			onStart: () => title2.classList.remove(styles.gsapHidden),
		})

		gsap.to(title3, {
			scrollTrigger: {
				trigger: title3,
				start: 'top 100%',
				once: true,
			},
			duration: 1.5,
			opacity: 1,
			x: 0,
			ease: 'power2.out',
			onStart: () => title3.classList.remove(styles.gsapHiddenRedBox),
		})
		gsap.to(title4, {
			scrollTrigger: {
				trigger: title4,
				start: 'top 100%',
				once: true,
			},
			duration: 1.5,
			opacity: 1,
			x: 0,
			ease: 'power2.out',
			onStart: () => title4.classList.remove(styles.gsapHiddenRedBox),
		})
	}, [])

	return (
		<div className={styles.wrapper}>
			<div className={styles.heroContainer}>
				<div className={styles.imageWrapperHero}>
					<div className={styles.imageContainerHero}>
						<Image
							className={styles.groundImage}
							src={
								mobile640
									? '/img/pages/main/400ground.png'
									: '/img/pages/main/ground.png'
							}
							width={
								mobile380
									? 550
									: mobile450
									? 650
									: mobile480
									? 750
									: mobile640
									? 427
									: tablet960
									? 650
									: laptop1024
									? 700
									: laptop1200
									? 750
									: desktop1280
									? 800
									: 900
							}
							height={
								mobile380
									? 430
									: mobile450
									? 460
									: mobile480
									? 480
									: mobile640
									? 285
									: laptop1024
									? 450
									: laptop1200
									? 500
									: desktop1280
									? 520
									: 600
							}
							alt='ground'
						/>
						<Image
							className={styles.teamImage}
							src={
								mobile640
									? '/img/pages/main/540team.png'
									: '/img/pages/main/team.png'
							}
							width={
								mobile380
									? 400
									: mobile450
									? 430
									: mobile480
									? 500
									: mobile640
									? 260
									: tablet960
									? 450
									: laptop1024
									? 550
									: laptop1200
									? 600
									: desktop1280
									? 700
									: 790
							}
							height={
								mobile380
									? 400
									: mobile450
									? 430
									: mobile480
									? 500
									: mobile640
									? 260
									: tablet960
									? 680
									: laptop1024
									? 800
									: laptop1200
									? 900
									: desktop1280
									? 1000
									: 1150
							}
							alt='ground'
						/>
						<div className={styles.gradientBlackGround}></div>
						<div className={styles.gradientBlack}></div>
					</div>
				</div>
				<div className={styles.containerHeroContent}>
					<div className={styles.titleWrapperHeroContainer}>
						<div className={styles.titleWrapperHero}>
							<div className={styles.titleHero}>
								<p
									id='title1'
									className={styles.titleItemHero + ' ' + styles.gsapHidden}
									ref={setRef('title1')}
								>
									Берите друзей И УСТРОЙте
								</p>
							</div>

							<div className={styles.titleHero}>
								<p
									id='title2'
									ref={setRef('title2')}
									className={styles.titleItemHero + ' ' + styles.gsapHidden}
								>
									эпичную битву
								</p>
							</div>
							<div className={styles.titleHero}>
								<p
									className={
										styles.titleItemRedBoxHero + ' ' + styles.gsapHiddenRedBox
									}
									id='title3'
									ref={setRef('title3')}
								>
									на арене виртуальной
								</p>
							</div>
							<div className={styles.titleHero}>
								<p
									className={
										styles.titleItemRedBoxHero + ' ' + styles.gsapHiddenRedBox
									}
									id='title4'
									ref={setRef('title4')}
								>
									РЕАЛЬНОСТИ
								</p>
							</div>
						</div>
					</div>
					<div className={styles.pinContainerHeroContainer}>
						<div className={styles.pinContainerHeroContainerWrapper}>
							<div className={styles.pinContainerHero}>
								<div className={styles.pinTitleHero}>
									Командные VR-сражения — современная альтернатива лазертагу и
									пейнтболу
								</div>
								<div className={styles.pinBtnContainer}>
									<Button
										title={'Забронировать'}
										primary={true}
										width={mobile480 ? 406 : desktop1710 ? 170 : 205}
										height={mobile480 ? 75 : desktop1710 ? 50 : 60}
										onClick={() => openModal('RESPONSIVE')}
										header={false}
									/>
									<div className={styles.pinAddressContainerHero}>
										<Image
											src={'/img/pages/main/pin.svg'}
											width={30}
											height={30}
											alt='pin'
										/>
										<div className={styles.addressHero}>
											г. Москва, Волгоградский пр-кт, 32к8
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
