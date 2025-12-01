'use client'
import YMapComponent from '@/components/YMap/YMap'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'


const Contact = () => {


	return (
		<Wrapper>
			<LeftContent>
				<Title>узнайте больше</Title>
				<BoxMap>
					 <YMapComponent />
				</BoxMap>
			</LeftContent>
			<RightContent>
				<ImgContainer>
					<Image
						src={'/img/pages/contacts/2.svg'}
						width={450}
						height={330}
						alt='group'
					/>
					<Image
						src={'/img/pages/contacts/Vector_32.svg'}
						width={450}
						height={295}
						alt='red line'
					/>
				</ImgContainer>
				<ContactContainer>
					<LinkWrapper>
						<LinkContainer>
							<Link href='tel:+7 (495) 260-99-34'>+7 (495) 260-99-34</Link>
							<Link href='mailto:moscow@warpoint.ru'>moscow@warpoint.ru</Link>
						</LinkContainer>
						<span>г. Москва, Волгоградский пр-кт, 32к8</span>
					</LinkWrapper>
					<LinkSocialWrapper>
						<LinkSocialContainerTime>
							<span>ПН-ЧТ с 11:00-22:00</span>
							<span>ПТ-ВС с 11:00-23:00</span>
						</LinkSocialContainerTime>
						<LinkSocialContainerBtn>
							<LinkBtnSocial>
								<Link href={'/'}>
									<Image
										src={'/img/socials/youtube.svg'}
										width={26}
										height={20}
										alt='youtube'
									/>
								</Link>
							</LinkBtnSocial>
							<LinkBtnSocial>
								<Link href={'/'}>
									<Image
										src={'/img/socials/vk.svg'}
										width={26}
										height={20}
										alt='vk'
									/>
								</Link>
							</LinkBtnSocial>
							<LinkBtnSocial>
								<Link href={'/'}>
									<Image
										src={'/img/socials/tik-tok.svg'}
										width={26}
										height={20}
										alt='tiktok'
									/>
								</Link>
							</LinkBtnSocial>
						</LinkSocialContainerBtn>
					</LinkSocialWrapper>
				</ContactContainer>
			</RightContent>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	max-width: 1160px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
`
const LeftContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 120px;
`
const RightContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
const BoxMap = styled.div`
	width: 550px;
	height: 440px;
	background-color: #000;
`
const Title = styled.h1`
	background-color: #e23239;
	padding: 5px 35px;
	text-transform: uppercase;
	color: #fbfbfb;
	font-size: 76px;
	font-weight: 800;
	transform: scale(0.7, 1.1) skew(-20deg);
	margin-left: -95px;
`
const ImgContainer = styled.div`
	margin-top: -20px;
	display: flex;
	position: relative;
	& img:last-of-type {
		position: absolute;
		top: -15px;
		right: -80px;
		z-index: -1;
	}
`
const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
`
const LinkWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	& span {
		color: rgb(232, 233, 235);
		font-size: 20px;
		font-weight: 400;
		margin-top: 15px;
	}
`
const LinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	& a {
		color: white;
		line-height: 1.2;
		font-weight: 700;
		font-size: 40px;
		transition: all 0.3s ease;
		&:hover {
			color: #e0353f;
		}
	}
`
const LinkSocialWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`
const LinkSocialContainerTime = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding-top: 40px;
	& span {
		color: rgb(232, 233, 235);
		font-size: 20px;
		font-weight: 400;
	}
`
const LinkSocialContainerBtn = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	max-width: 190px;
`
const LinkBtnSocial = styled.button`
	background-color: rgb(224, 53, 63);
	width: 50px;
	height: 50px;
	transition: 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	& a {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	&:hover {
		background-color: #000;
		border: 1px solid rgb(224, 53, 63);
	}
`
export default Contact
