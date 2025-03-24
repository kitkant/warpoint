import Image from 'next/image'
import styles from '../../styles/heroGrid.module.css'
import Card from './components/Card/Card'
import useMediaQuery from '@/app/hooks/useMediaQuery'

const HeroGrid = () => {
	const laptop1200 = useMediaQuery(1202)

	return (
		<div className={styles.wrapper}>
			<div className={styles.titleWrapper}>
				<p className={styles.titleItem + ' ' + styles.firstItem}>В компьютерной игре</p>
				<p className={styles.titleItem}>ВЫ ИГРАЕТЕ ЗА ГЕРОЯ,</p>
				<div className={styles.titleLastContainer}>
					<p className={styles.titleItem}>а в WARPOINT</p>
					<p className={styles.titleItem + ' ' + styles.lastItem}>&mdash; ВЫ И ЕСТЬ ГЕРОЙ!</p>
				</div>
			</div>
			<div className={styles.gridWrapper}>
				<div className={styles.gridContainer}>
					<div className={styles.cardContainer + " " + styles.imgContainer}>
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
								width: laptop1200 ? '264px' :'360px',
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
							height={false}
							img={'/img/pages/main/herogrid/8.jpg'}
							title={'Эпичные командные сражения 5х5'}
							text={`	В играх одновременно могут принимать участие от 2 до 10-ти человек.
						В виртуальном мире все участники видят персонажей друг друга и могут
						взаимодействовать между собой`}
						/>
					</div>
				</div>
				<div className={styles.gridContainer}>
					<div className={styles.cardContainer}>
						<Card
							height={true}
							img={'/img/pages/main/herogrid/7.png'}
							title={'большая игровая площадь'}
							text={
								<>
									Сражения проходят на большой игровой
									<br /> площадке, по которой участники могут
									<br /> свободно перемещаться. Площадь арены
									<br /> оставляет более 250 м². У нас есть
									<br /> где разгуляться и взрослым, и детям!
								</>
							}
						/>
					</div>
					<div className={styles.cardContainer}>
						<Card
							height={false}
							img={'/img/pages/main/herogrid/9.jpeg'}
							title={'Полное погружение в виртуальный мир'}
							text={
								<>
									Участники погрузятся в захватывающий
									<br /> виртуальный мир, где буквально окажутся
									<br /> в центре событий! Ничто не помешает
									<br />
									погружению в игру - из оборудования только
									<br /> новейшие беспроводные VR-очки Oculus Quest
								</>
							}
						/>
					</div>
				</div>
				<div className={styles.gridContainer}>
					<div className={styles.cardContainer}>
						<Card
							height={false}
							img={'/img/pages/main/herogrid/10.jpg'}
							title={'Идеальное место для праздников'}
							text={
								<>
									Современная альтернатива скучным посиделкам в кафе. Пока часть
									гостей развлекается на VR-арене, остальные могут кушать,
									играть в настолки или приставку в просторной лаунж-зоне
								</>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroGrid
