'use client'
import styled from '@emotion/styled'
import localFont from 'next/font/local'
import './globals.css'
import HeaderLayout from './layouts/HeaderLayout'
// import Footer from '@/features/Footer/Footer'

const gilroy = localFont({
	src: [
		{
			path: '../app/fonts/Gilroy-Regular.woff2',
			weight: '400',
		},
		{
			path: '../app/fonts/Gilroy-Bold.woff2',
			weight: '700',
		},
	],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
				<title>
					Контакты VR-арены WARPOINT в Москве м. Волгоградский пр-кт
				</title>
			</head>
			<Body className={gilroy.className}>
				<HeaderLayout />
				{children}
				{/* <Footer/> */}
			</Body>
		</html>
	)
}

const Body = styled.body`
	background-color: rgb(27, 27, 27);
`
