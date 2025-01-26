'use-client'
import Button from '@/app/UI/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/header.module.css'


const Header = () => {

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.nav_containerLogo}>
					<Link href='/'>
						<Image
							width={120}
							height={17}
							src={'/img/pages/contacts/logo.svg'}
							alt='logo'
						/>
					</Link>
					<div className={styles.nav_containerLogo__dropdown}>
						<div className={styles.nav_containerLogo__container}>
							<button className={styles.nav_containerLogo__textCity}>
								Москва
							</button>
							<div className={styles.nav_containerLogo__triangleTextCity}></div>
						</div>
						<div className={styles.nav_containerLogo__downList}>
							<div className={styles.nav_containerLogo__triangle}></div>
							<Link href='/'>Выберите другой город</Link>
						</div>
					</div>
				</div>
				<nav className={styles.nav_container__navigationContainer}>
					<ul className={styles.nav_container__navigation}>
						<li className={styles.nav_container__navigationItem}>
							<Link
								href='/'
								className={styles.nav_container__navigationItem__link}
							>
								Тарифы
							</Link>
						</li>
						<li className={styles.nav_container__navigationItem}>
							<Link
								href='/'
								className={styles.nav_container__navigationItem__link}
							>
								Наши игры
							</Link>
						</li>
						<li
							className={
								styles.nav_container__navigationItem +
								' ' +
								styles.nav_containerNavigation__dropdown
							}
						>
							<div className={styles.nav_containerNavigation__container}>
								<Link
									href='/'
									className={styles.nav_container__navigationItem__link}
								>
									Мероприятия
								</Link>
								<div className={styles.nav_containerNavigation__triangle}></div>
							</div>
							<div className={styles.nav_containerNavigation__downList}>
								<div
									className={styles.nav_containerNavigation__triangleBorder}
								></div>
								<ul className={styles.nav_container__downContainer__navigation}>
									<li
										className={
											styles.nav_container__downContainer__navigationItem
										}
									>
										<Link
											href='/'
											className={
												styles.nav_container__downContainer__navigationItem__link
											}
										>
											Детский день рождения
										</Link>
									</li>
									<li
										className={
											styles.nav_container__downContainer__navigationItem
										}
									>
										<Link
											href='/'
											className={
												styles.nav_container__downContainer__navigationItem__link
											}
										>
											Взрослый день рождения
										</Link>
									</li>
									<li
										className={
											styles.nav_container__downContainer__navigationItem
										}
									>
										<Link
											href='/'
											className={
												styles.nav_container__downContainer__navigationItem__link
											}
										>
											Корпоратив
										</Link>
									</li>
									<li
										className={
											styles.nav_container__downContainer__navigationItem
										}
									>
										<Link
											href='/'
											className={
												styles.nav_container__downContainer__navigationItem__link
											}
										>
											Школьный выпускной
										</Link>
									</li>
									<li
										className={
											styles.nav_container__downContainer__navigationItem
										}
									>
										<Link
											href='/'
											className={
												styles.nav_container__downContainer__navigationItem__link
											}
										>
											Турниры
										</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className={styles.nav_container__navigationItem}>
							<Link
								href='/'
								className={styles.nav_container__navigationItem__link}
							>
								Сертификаты
							</Link>
						</li>
						<li
							className={
								styles.nav_container__navigationItem +
								' ' +
								styles.nav_containerNavigation__dropdown
							}
						>
							<div className={styles.nav_containerNavigation__container}>
								<Link
									href='/'
									className={styles.nav_container__navigationItem__link}
								>
									Информация
								</Link>
								<div className={styles.nav_containerNavigation__triangle}></div>
							</div>
							<div className={styles.nav_containerNavigation__downList}>
								<div
									className={styles.nav_containerNavigation__triangleBorder}
								></div>
								<ul className={styles.nav_container__downContainer__navigation}>
									<li
										className={
											styles.nav_container__downContainer__navigationItem
										}
									>
										<Link
											href='/'
											className={
												styles.nav_container__downContainer__navigationItem__link
											}
										>
											Клубная карта
										</Link>
									</li>
									<li
										className={
											styles.nav_container__downContainer__navigationItem
										}
									>
										<Link
											href='/'
											className={
												styles.nav_container__downContainer__navigationItem__link
											}
										>
											Наши акции
										</Link>
									</li>
									<li
										className={
											styles.nav_container__downContainer__navigationItem
										}
									>
										<Link
											href='/'
											className={
												styles.nav_container__downContainer__navigationItem__link
											}
										>
											Новости
										</Link>
									</li>
									<li
										className={
											styles.nav_container__downContainer__navigationItem
										}
									>
										<Link
											href='/'
											className={
												styles.nav_container__downContainer__navigationItem__link
											}
										>
											Полезные статьи
										</Link>
									</li>
									<li
										className={
											styles.nav_container__downContainer__navigationItem
										}
									>
										<Link
											href='/'
											className={
												styles.nav_container__downContainer__navigationItem__link
											}
										>
											Франшиза
										</Link>
									</li>
									<li
										className={
											styles.nav_container__downContainer__navigationItem
										}
									>
										<Link
											href='/'
											className={
												styles.nav_container__downContainer__navigationItem__link
											}
										>
											Витрина
										</Link>
									</li>
									<li
										className={
											styles.nav_container__downContainer__navigationItem
										}
									>
										<Link
											href='/'
											className={
												styles.nav_container__downContainer__navigationItem__link
											}
										>
											Аренда
										</Link>
									</li>
									<li
										className={
											styles.nav_container__downContainer__navigationItem
										}
									>
										<Link
											href='/'
											className={
												styles.nav_container__downContainer__navigationItem__link
											}
										>
											О нас
										</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className={styles.nav_container__navigationItem}>
							<Link
								href='/'
								className={styles.nav_container__navigationItem__link}
							>
								Контакты
							</Link>
						</li>
					</ul>
				</nav>
				<div className={styles.nav_containerButton__container}>
					<a
						className={styles.nav_containerButton__containerPhone}
						href='tel:+7 (495) 260-99-34'
					>
						+7 (495) 260-99-34
					</a>
					<span className={styles.removeBtnOnMobile}>
					<Button
						primary={true}
						width={170}
						height={45}
						title={'Забронировать'}
						onClick={() => alert('hi')}

					/>
					</span>
					
					{/* <a
						className={styles.nav_containerButton__containerReservation}
						href='#BukzaContainer15639'
					>
						Забронировать
					</a> */}
					<div className={styles.nav_containerButton__container__mobile}>
							<button
								className={styles.nav_containerButton__wrapper__burgerMenu}
							>
								<div className={styles.nav_containerButton__burgerMenu}></div>
							</button>
						</div>
				</div>
			</div>
		</header>
	)
}

export default Header
