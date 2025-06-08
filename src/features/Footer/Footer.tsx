import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.footerLinksContainer}>
					<div className={styles.footerInfoContainer}>
						<Link href='/'>
							<Image
								width={156}
								height={21}
								alt='logo'
								src='/img/pages/contacts/logo.svg'
							/>
						</Link>

						<div className={styles.footerInfoContainer__root}>
							© 2020−2024. WARPOINT. Все права защищены. Копирование материалов
							сайта запрещено
						</div>
					</div>
					<div className={styles.footerNavContainer}>
						<ul className={styles.footerNavContainer__navigation}>
							<li className={styles.footerNavContainer__navigationItem}>
								<span>Мероприятия</span>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Детский день рождения</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Взрослый день рождения</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Корпоратив</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Школьный выпускной</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Турниры</Link>
							</li>
						</ul>
						<ul className={styles.footerNavContainer__navigation}>
							<li className={styles.footerNavContainer__navigationItem}>
								<span>Информация</span>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Тарифы</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Наши акции</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Сертификаты</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Витрина</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Клубная карта</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Статьи</Link>
							</li>
						</ul>
						<ul className={styles.footerNavContainer__navigation}>
							<li className={styles.footerNavContainer__navigationItem}>
								<span>Соглашения</span>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Политика конфиденциальности</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Политика использования Cookie</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Пользовательское соглашение</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Согласие законного представителя</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Использование сертификатов</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Реквизиты локации</Link>
							</li>
						</ul>
						<ul className={styles.footerNavContainer__navigation}>
							<li className={styles.footerNavContainer__navigationItem}>
								<span>Сотрудничество</span>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Реклама</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Вакансии</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Арендодателям</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Франшиза</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Инвестиции</Link>
							</li>
							<li className={styles.footerNavContainer__navigationItem}>
								<Link href='/'>Аренда</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.footerButtonWrapper}>
					<div className={styles.footerButtonContainer}>
						<div className={styles.footerButtonContainerStore__button}>
							<div
								className={styles.footerButtonContainerStore__buttonAppstore}
							>
								<Link href='/'>
									<Image
										style={{
											objectFit: 'fill',
											width: '100%',
											height: '100%',
											borderRadius: '8px',
											maxHeight: '52px',
										}}
										fill
										alt='store'
										src='/img/pages/contacts/appstore.png'
									/>
								</Link>
							</div>
							<div
								className={styles.footerButtonContainerStore__buttonAppstore}
							>
								<Link href='/'>
									<Image
										style={{
											objectFit: 'fill',
											width: '100%',
											height: '100%',
											borderRadius: '8px',
											maxHeight: '52px',
										}}
										fill
										alt='store'
										src='/img/pages/contacts/playmarket.png'
									/>
								</Link>
							</div>
						</div>
					</div>

					<div className={styles.footerButtonContainerLocations__button}>
						<Link
							href='/'
							className={styles.footerButtonContainerLocations__buttonBtn}
						>
							Выбрать город
						</Link>
						<Link
							href='/'
							className={styles.footerButtonContainerLocations__buttonBtn}
						>
							3D-тур по локации
						</Link>
						<Link
							href='/'
							className={styles.footerButtonContainerLocations__buttonBtn}
						>
							Проложить маршрут
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
