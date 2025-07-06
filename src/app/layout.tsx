'use client'
import Modal from '@/components/Modal'
import Footer from '@/features/Footer/Footer'
import styled from '@emotion/styled'
import localFont from 'next/font/local'
import { ModalProvider } from '../context/ModalContext'
import './globals.css'
import HeaderLayout from './layouts/HeaderLayout'
import LayoutWrapper from './layouts/LayoutWrapper'

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
				<title>WARPOINT</title>
			</head>
			<Body className={gilroy.className}>
				<ModalProvider>
					<LayoutWrapper>
						<HeaderLayout />
						{children}
						<Footer />
					</LayoutWrapper>
					<Modal />
				</ModalProvider>
			</Body>
		</html>
	)
}

const Body = styled.body`
	background-color: rgb(27, 27, 27);
`
