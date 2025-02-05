'use client'
import React from 'react';
import Hero from './features/Hero/Hero'
import styles from './styles/main.module.css'

const MainPage = () => {
	return (
		<main className={styles.wrapper}>
			<Hero/>
		</main>
	);
};

export default MainPage;