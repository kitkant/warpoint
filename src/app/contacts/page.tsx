'use client'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'


const Contact = () => {


	return (
		<Wrapper>
			<Container>

			<LeftContent>
				<Title>узнайте больше</Title>
				<BoxMap>
					 {/* <YMapComponent />
					  */}
						<iframe className='map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A536a3bee8f8838252663edf852be908dc1c150fdbee9cea2e7536f84fbac4ef6&amp;source=constructor" width="550" height="440" frameBorder="0"></iframe>
						
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
			</Container>

		</Wrapper>
	)
}

const Wrapper = styled.section`
	max-width: 100vw;
	overflow: hidden;
	padding-top: 35px;
`
const Container = styled.div`
	max-width: 1160px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	@media(max-width: 1200px){
		max-width: 940px;
	}
	@media(max-width: 960px){
		max-width: 620px;
		flex-direction: column;
	}
	@media(max-width: 640px){
		max-width:460px;

	}
	@media(max-width: 480px){
		max-width:90vw;
	}
`
const LeftContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 120px;
	@media(max-width: 960px){
	gap: 80px;}
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
	position: relative;
	& .map{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	@media(max-width: 1200px){
		width: 450px;
		height: 400px;
	}
	@media(max-width: 960px){
		width: 100%;
	}
	@media(max-width: 640px){
		height: 300px;
	}
	@media(max-width: 480px){
		height: 500px;
	}
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
	@media(max-width: 1200px){
		font-size: 62px;
		padding: 5px 20px 5px 20px;
		width: fit-content;
	}
	@media(max-width: 960px){
		font-size:48px;
		margin-left: -80px;
	}
	@media(max-width: 640px){
		font-size: 32px;
		    margin-left: -60px;
	}
	@media(max-width: 480px){
		font-size: 36px;
		margin-left: -65px;
	}
	@media(max-width: 380px)
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
	@media(max-width: 1200px){
		img:first-of-type{
			width: 400px;
			height: 250px;
		}
		img:last-of-type{
			width: 400px;
			height: 250px;
		}
	}
	@media(max-width: 960px){
		display: none;
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
	@media(max-width: 960px){
		margin-top: 30px;
	}
	@media(max-width: 640px){
		& span{
			font-size: 18px;
		}
	}
	@media(max-width: 480px){
		& span{
			font-size: 20px;
		}
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
		width: fit-content;
		&:hover {
			color: #e0353f;
		}
	}
	@media(max-width: 1200px){
		& a{
			font-size: 36px;
		}
	}
		@media(max-width: 640px){
		& a{
			font-size: 28px;
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
	@media(max-width: 640px){
		& span{
			font-size: 18px;
		}
	}
		@media(max-width: 480px){
		& span{
			font-size: 20px;
		}
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
