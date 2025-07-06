import Image from 'next/image'
import styles from '../../styles/header.module.css'
import { useModal } from '@/context/ModalContext'
import Button from '@/app/UI/Button/Button'

interface IProps {
	scroll: number
}

const HeaderFixed = ({ scroll }: IProps) => {
		const { openModal } = useModal()
	
	return (
		<header
			className={styles.headerFixed + ' ' + (scroll >= 300 ? '' : styles.hide)}
		>
			<div className={styles.wrapper}>
				<div className={styles.headerFixedContainer}>
					<div className={styles.nav_containerLogo}>
						<a href='/pages/contacts.html'>
							<img
								className={styles.logo_navigation}
								src='/img/pages/contacts/logo.svg'
							/>
						</a>
						<div className={styles.nav_containerLogo__dropdown}>
							<div className={styles.nav_containerLogo__container}>
								<button className={styles.nav_containerLogo__textCity}>
									Москва
								</button>
								<div
									className={styles.nav_containerLogo__triangleTextCity}
								></div>
							</div>
							<div className={styles.nav_containerLogo__downList}>
								<div className={styles.nav_containerLogo__triangle}></div>
								<a href='#'>Выберите другой город</a>
							</div>
						</div>
					</div>
					<div className={styles.nav_containerButton__container}>
						<a
							className={styles.nav_containerButton__containerPhone}
							href='tel:+7 (495) 260-99-34'
						>
							+7 (495) 260-99-34
						</a>
						<a
						className={styles.nav_containerButton__containerPhoneMobile}
						href='tel:+7 (495) 260-99-34'
					>
						
							<Image src={'/img/socials/phone.webp'} alt='phone' width={25} height={25}
						style={{
							width: '60%',
							height: 'auto',
							objectFit: 'cover'
						}} />
					
					</a>
						<span className={styles.removeBtnOnMobile}>
							{/* <a
								className={styles.nav_containerButton__containerReservation}
								href='#BukzaContainer15639'
							>
								Забронировать
							</a> */}
							<Button
								primary={true}
								width={170}
								height={45}
								title={'Забронировать'}
								onClick={() => {
									openModal('RESPONSIVE')
							
								}}
								header={true}
							/>
						</span>
						<button className={styles.nav_containerButton__wrapper__burgerMenu}>
							<div className={styles.nav_containerButton__burgerMenu}></div>
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderFixed
