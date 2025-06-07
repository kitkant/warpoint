// import useMediaQuery from '@/app/hooks/useMediaQuery'
import useMediaQuery from '@/app/hooks/useMediaQuery'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { Fragment } from 'react'
import styles from '../../styles/eventCarousel.module.css'
import AnimationCard from './components/AnimationCard/AnimationCard'
import Card from './components/Card/Card'
import cardEvent from './data/cardEvent'
import { usePrevNextButtons } from './hooks/usePrevNextButtons'

const EventCarousel = () => {
	const mobile480 = useMediaQuery(480)

	const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true })
	const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				{mobile480 ? (
					<div className={styles.titleWrapper}>
						<div className={styles.titleContainer}>
							<div className={styles.title}>Отметьте яркий</div>
							<div className={styles.title}>день рождения</div>
							<div className={styles.title}>или устройте эпичную </div>
						</div>
						<div className={styles.textContainer}>
							<p className={styles.text}>
								Используйте локацию под свои запросы, а мы поможем хорошо
								провести время
							</p>
							<span className={styles.titleLast}>битву С коллегами</span>
							<div className={styles.btnPrevNextContainer}>
								<button onClick={onPrevButtonClick}>
									<Image
										src={'/img/pages/main/herogrid/down-arrow_1.svg'}
										style={{
											width: '100%',
											display: 'block',
											height: '100%',
										}}
										width={0}
										height={0}
										alt='arrow'
									/>
								</button>
								<button onClick={onNextButtonClick}>
									<Image
										src={'/img/pages/main/herogrid/down-arrow_1.svg'}
										style={{
											width: '100%',
											display: 'block',
											height: '100%',
										}}
										width={0}
										height={0}
										alt='arrow'
									/>
								</button>
							</div>
							<div className={styles.animationCard}>
								<div className={styles.req + ' ' + styles.reqItem1}></div>
								<div className={styles.req + ' ' + styles.reqItem2}></div>
								<div className={styles.req + ' ' + styles.reqItem3}></div>
								<AnimationCard />
							</div>
						</div>
					</div>
				) : (
					<div className={styles.titleContainer}>
						<h2 className={styles.title}>
							<span className={styles.redTitle}>
								Отметьте яркий день рождения
							</span>
							<span className={styles.span}>или устройте эпичную битву</span>
						</h2>
						<div className={styles.textContainer}>
							<p className={styles.text}>
								Используйте локацию под свои запросы, а мы поможем хорошо
								провести время
							</p>
							<span className={styles.titleLast}>С коллегами</span>
							<div className={styles.btnPrevNextContainer}>
								<button onClick={onPrevButtonClick}>
									<Image
										src={'/img/pages/main/herogrid/down-arrow_1.svg'}
										style={{
											width: '100%',
											display: 'block',
											height: '100%',
										}}
										width={0}
										height={0}
										alt='arrow'
									/>
								</button>
								<button onClick={onNextButtonClick}>
									<Image
										src={'/img/pages/main/herogrid/down-arrow_1.svg'}
										style={{
											width: '100%',
											display: 'block',
											height: '100%',
										}}
										width={0}
										height={0}
										alt='arrow'
									/>
								</button>
							</div>
							<div className={styles.animationCard}>
								<div className={styles.req + ' ' + styles.reqItem1}></div>
								<div className={styles.req + ' ' + styles.reqItem2}></div>
								<div className={styles.req + ' ' + styles.reqItem3}></div>
								<AnimationCard />
							</div>
						</div>
					</div>
				)}

				<div className={styles.embla} ref={emblaRef}>
					<div className={styles.embla__container}>
						{cardEvent.map((item, index) => {
							return (
								<Fragment key={index}>
									<Card
										title={item.title}
										titleLaptop={item.titleLaptop}
										textLaptop={item.textLaptop}
										textMobile={item.textMobile}
										textDesktop={item.textDesktop}
										img={item.img}
										index={index}
									/>
								</Fragment>
							)
						})}
					</div>
				</div>

				<div className={styles.laptopGrid}>
					<div className={styles.laptopGrid__container}>
						{cardEvent.map((item, index) => {
							return (
								<Fragment key={index}>
									<Card
										title={item.title}
										titleLaptop={item.titleLaptop}
										textLaptop={item.textLaptop}
										textMobile={item.textMobile}
										textDesktop={item.textDesktop}
										img={item.img}
										index={index}
									/>
								</Fragment>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default EventCarousel
