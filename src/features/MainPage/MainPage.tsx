'use client'
import EntertainingZones from './features/EntertainingZones/EntertainingZones'
import EventCarousel from './features/EventCarousel/EventCarousel'
import Hero from './features/Hero/Hero'
import HeroGrid from './features/HeroGrid/HeroGrid'
import MoreForGame from './features/MoreForGame/MoreForGame'
import SelectTariff from './features/SelectTariff/SelectTariff'

import styles from './styles/main.module.css'

const MainPage = () => {
	return (
		<main className={styles.wrapper}>
			<Hero />
			<HeroGrid />
			<EntertainingZones />
			<MoreForGame />
			<SelectTariff />
			<EventCarousel />
		</main>
	)
}

export default MainPage
