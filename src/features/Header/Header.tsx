'use-client'
import React from 'react';
import styles from './styles/header.module.css'
import Image from 'next/image'

const Header = () => {
	return (
		<header className={styles.header}>
		<div className={styles.wrapper}>
			<div className={styles.nav_containerLogo}>
				<a href="/pages/contacts.html">
				<Image width={120} height={17} src={'/img/pages/contacts/logo.svg'} alt='logo'/>
				</a>
				<div className={styles.nav_containerLogo__dropdown}>
					<div className={styles.nav_containerLogo__container}>
						<button className={styles.nav_containerLogo__textCity}>Москва</button>
						<div className={styles.nav_containerLogo__triangleTextCity}></div>
					</div>
					<div className={styles.nav_containerLogo__downList}>
						<div className={styles.nav_containerLogo__triangle}></div>
						<a href="#">Выберите другой город</a>
					</div>
				</div>
			</div>
			<nav className={styles.nav_container__navigationContainer}>
				<ul className={styles.nav_container__navigation}>
					<li className={styles.nav_container__navigationItem}>
						<a href="#" className={styles.nav_container__navigationItem__link}>Тарифы</a>
					</li>
					<li className={styles.nav_container__navigationItem}>
						<a href="#" className={styles.nav_container__navigationItem__link}>Наши игры</a>
					</li>
					<li className={styles.nav_container__navigationItem + ' ' + styles.nav_containerNavigation__dropdown}>
						<div className={styles.nav_containerNavigation__container}>
							<a href="#" className={styles.nav_container__navigationItem__link}>Мероприятия</a>
							<div className={styles.nav_containerNavigation__triangle}></div>
						</div>
						<div className={styles.nav_containerNavigation__downList}>
							<div className={styles.nav_containerNavigation__triangleBorder}></div>
							<ul className={styles.nav_container__downContainer__navigation}>
								<li className={styles.nav_container__downContainer__navigationItem}>
									<a href="#" className={styles.nav_container__downContainer__navigationItem__link}>Детский день рождения</a>
								</li>
								<li className={styles.nav_container__downContainer__navigationItem}>
									<a href="#" className={styles.nav_container__downContainer__navigationItem__link}>Взрослый день рождения</a>
								</li>
								<li className={styles.nav_container__downContainer__navigationItem}>
									<a href="#" className={styles.nav_container__downContainer__navigationItem__link}>Корпоратив</a>
								</li>
								<li className={styles.nav_container__downContainer__navigationItem}>
									<a href="#" className={styles.nav_container__downContainer__navigationItem__link}>Школьный выпускной</a>
								</li>
								<li className={styles.nav_container__downContainer__navigationItem}>
									<a href="#" className={styles.nav_container__downContainer__navigationItem__link}>Турниры</a>
								</li>
							</ul>
						</div>
					</li>
					<li className={styles.nav_container__navigationItem}>
						<a href="#" className={styles.nav_container__navigationItem__link}>Сертификаты</a>
					</li>
					<li className={styles.nav_container__navigationItem + ' ' + styles.nav_containerNavigation__dropdown}>
						<div className={styles.nav_containerNavigation__container}>
							<a href="#" className={styles.nav_container__navigationItem__link}>
								Информация
							</a>
							<div className={styles.nav_containerNavigation__triangle}></div>
						</div>
						<div className={styles.nav_containerNavigation__downList}>
							<div className={styles.nav_containerNavigation__triangleBorder}></div>
							<ul className={styles.nav_container__downContainer__navigation}>
								<li className={styles.nav_container__downContainer__navigationItem}>
									<a href="#" className={styles.nav_container__downContainer__navigationItem__link}>Клубная карта</a>
								</li>
								<li className={styles.nav_container__downContainer__navigationItem}>
									<a href="#" className={styles.nav_container__downContainer__navigationItem__link}>Наши акции</a>
								</li>
								<li className={styles.nav_container__downContainer__navigationItem}>
									<a href="#" className={styles.nav_container__downContainer__navigationItem__link}>Новости</a>
								</li>
								<li className={styles.nav_container__downContainer__navigationItem}>
									<a href="#" className={styles.nav_container__downContainer__navigationItem__link}>Полезные статьи</a>
								</li>
								<li className={styles.nav_container__downContainer__navigationItem}>
									<a href="#" className={styles.nav_container__downContainer__navigationItem__link}>Франшиза</a>
								</li>
								<li className={styles.nav_container__downContainer__navigationItem}>
									<a href="#" className={styles.nav_container__downContainer__navigationItem__link}>Витрина</a>
								</li>
								<li className={styles.nav_container__downContainer__navigationItem}>
									<a href="#" className={styles.nav_container__downContainer__navigationItem__link}>Аренда</a>
								</li>
								<li className={styles.nav_container__downContainer__navigationItem}>
									<a href="#" className={styles.nav_container__downContainer__navigationItem__link}>О нас</a>
								</li>
							</ul>
						</div>

					</li>
					<li className={styles.nav_container__navigationItem}>
						<a href="#" className={styles.nav_container__navigationItem__link}>Контакты</a>
					</li>
				</ul>
			</nav>
			<div className={styles.nav_containerButton__container}>
				<a className={styles.nav_containerButton__containerPhone} href="tel:+7 (495) 260-99-34">+7 (495) 260-99-34</a>
				<a className={styles.nav_containerButton__containerReservation} href="#BukzaContainer15639">Забронировать</a>
			</div>
		</div>
	</header>
	);
};

export default Header;