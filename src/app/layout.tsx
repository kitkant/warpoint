"use client"
import localFont from 'next/font/local'
import Header from '@/features/Header/Header'
import "./globals.css";
import styled from '@emotion/styled'


const gilroy = localFont({
  src: [
    {
      path: '/fonts/Gilroy-Regular.woff',
      weight: '400',
      style: 'normal',
    },

    {
      path: '/fonts/Gilroy-Bold.woff',
      weight: '700',
      style: 'normal',
    }
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
   
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Контакты VR-арены WARPOINT в Москве м. Волгоградский пр-кт</title>
    </head>
      <Body  className={gilroy.className}>
      <Header/>
        {children}
      </Body>
    </html>
  );
}

const Body = styled.body`
  background-color: rgb(27, 27, 27);
`
