'use client'
import React from 'react';
import Hero from './features/Hero/Hero'
import styles from './styles/main.module.css'
import HeroGrid from './features/HeroGrid/HeroGrid'
import EntertainingZones from './features/EntertainingZones/EntertainingZones'

const MainPage = () => {
	return (
		<main className={styles.wrapper}>
			<Hero/>
			<HeroGrid/>
			<EntertainingZones/>
		</main>
	);
};

export default MainPage;