import useMediaQuery from '@/app/hooks/useMediaQuery'
import Image from 'next/image'
import styles from '../../styles/heroGrid.module.css'
import Card from './components/Card/Card'

const HeroGrid = () => {
	const laptop1200 = useMediaQuery(1202)
	const laptop960 = useMediaQuery(960)
	const laptop640 = useMediaQuery(641)
	const mobile480 = useMediaQuery(480)


	return (
		<div className={styles.wrapper}>
			<div className={styles.titleWrapper}>
				<p className={styles.titleItem + ' ' + styles.firstItem}>
					В компьютерной игре
				</p>
				<p className={styles.titleItem}>ВЫ ИГРАЕТЕ ЗА ГЕРОЯ,</p>
				<div className={styles.titleLastContainer}>
					<p className={styles.titleItem}>а в WARPOINT</p>
					<p className={styles.titleItem + ' ' + styles.lastItem}>
						&mdash; ВЫ И ЕСТЬ ГЕРОЙ!
					</p>
				</div>
			</div>
			<div className={styles.gridWrapper}>
				<div className={styles.gridContainer}>
					<div className={styles.cardContainer + ' ' + styles.imgContainer}>
						<Image
							src={'/img/pages/main/herogrid/Vector_32_2.svg'}
							style={{
								width: '100%',
								display: 'block',
								height: '100%',
							}}
							alt='bluline'
							width={0}
							height={0}
						/>
						<Image
							src={'/img/pages/main/herogrid/man.png'}
							style={{
								position: 'absolute',
								top: 0,
								right: '25px',
								width: laptop1200 ? '264px' : '360px',
								display: 'block',
								height: 'auto',
							}}
							alt='man'
							width={0}
							height={0}
							sizes='100vw'
						/>
					</div>
					<div className={styles.cardContainer + ' ' + styles.maxDiv}>
						<Card
							height={mobile480 ? true : false}
							img={'/img/pages/main/herogrid/8.jpg'}
							title={'Эпичные командные сражения 5х5'}
							text={
								<>
									В играх одновременно могут{mobile480 ? <br /> : <></>}{' '}
									принимать
									{mobile480 ? <></> : laptop640 ? <br /> : <></>} участие от 2
									до 10-ти{mobile480 ? <br /> : <></>} человек. В виртуальном
									{mobile480 ? <></> : laptop640 ? <br /> : <></>} мире все
									{mobile480 ? <br /> : <></>} участники видят персонажей друг{' '}
									{laptop640 ? <br /> : <></>} друга и могут взаимодействовать
									{mobile480 ? <br /> : <></>} между собой
								</>
							}
							index={0}
							cover={mobile480 ? true : false}
							position={'center'}
						/>
					</div>
				</div>
				<div className={styles.gridContainer}>
					<div className={styles.cardContainer}>
						<Card
							height={mobile480 ? true : laptop960 ? false : true}
							img={'/img/pages/main/herogrid/7.png'}
							title={'большая игровая площадь'}
							text={
								<>
									Сражения проходят на большой{mobile480 ? <br /> : <></>}{' '}
									игровой
									{mobile480 ? <></> : laptop640 ? <br /> : <></>}
									{laptop960 ? <></> : <br />} площадке, по которой
									{mobile480 ? <br /> : <></>} участники могут
									{laptop960 ? <></> : <br />} свободно
									{laptop640 ? <br /> : <></>} перемещаться. Площадь арены
									{mobile480 ? <br /> : laptop960 ? <></> : <br />} составляет
									{mobile480 ? <></> : laptop640 ? <br /> : <></>} более 250 м².
									У нас{mobile480 ? <br /> : <></>} есть
									{laptop960 ? <></> : <br />} где разгуляться
									{mobile480 ? <></> : laptop640 ? <br /> : <></>} и взрослым,
									{mobile480 ? <br /> : <></>} и детям!
								</>
							}
							index={1}
							cover={mobile480 ? true : false}
							position={'left'}
						/>
					</div>
					<div className={styles.cardContainer}>
						<Card
							height={mobile480 ? true : false}
							img={'/img/pages/main/herogrid/9.jpeg'}
							title={'Полное погружение в виртуальный мир'}
							text={
								<>
									Участники погрузятся{mobile480 ? <br /> : <></>} в захватывающий
									{mobile480 ? <></> :laptop640 ? <br /> : <></>}
									{laptop960 ? <></> : <br />} виртуальный мир,
									{mobile480 ? <br /> :laptop640 ? <></> : laptop960 ? <br /> : <></>} где буквально
									окажутся{mobile480 ? <></> :laptop640 ? <br /> : <></>}
									{laptop960 ? <></> : <br />} в центре{mobile480 ? <br /> : <></>} событий! Ничто не
									помешает {laptop640 ? <br /> : <></>}
									{laptop960 ? <> </> : <br />}
									погружению в игру -{mobile480 ? <br /> : <></>} из оборудования только
									{mobile480 ? <></> :laptop640 ? <br /> : <></>}
									{laptop960 ? <></> : <br />} новейшие{mobile480 ? <br /> : <></>} беспроводные VR-очки
									Oculus{mobile480 ? <br /> : <></>} Quest
								</>
							}
							index={2}
							cover={mobile480 ? true : false}
							position={'center'}
						/>
					</div>
				</div>
				<div className={styles.gridContainer}>
					<div className={styles.cardContainer}>
						<Card
							height={mobile480 ? true : false}
							img={'/img/pages/main/herogrid/10.jpg'}
							title={'Идеальное место для праздников'}
							text={
								<>
									Современная альтернатива{mobile480 ? <br /> : <></>} скучным{mobile480 ? <></> :laptop640 ? <br /> : <></>}{' '}
									посиделкам в кафе. Пока{mobile480 ? <br /> : <></>} часть гостей
									{mobile480 ? <></> :laptop640 ? <br /> : <></>} развлекается на VR-{mobile480 ? <br /> : <></>}арене,
									остальные могут{mobile480 ? <></> :laptop640 ? <br /> : <></>} кушать,{mobile480 ? <br /> : <></>} играть в
									настолки или приставку{laptop640 ? <br /> : <></>} в
									просторной лаунж-зоне
								</>
							}
							index={3}
							cover={mobile480 ? true : false}
							position={'80%'}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroGrid
