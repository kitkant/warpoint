'use client'
import EntertainingZones from './features/EntertainingZones/EntertainingZones'
import Hero from './features/Hero/Hero'
import HeroGrid from './features/HeroGrid/HeroGrid'
import MoreForGame from './features/MoreForGame/MoreForGame'
import styles from './styles/main.module.css'

const MainPage = () => {
	return (
		<main className={styles.wrapper}>
			<Hero />
			<HeroGrid />
			<EntertainingZones />
			<MoreForGame />
		</main>
	)
}

export default MainPage
