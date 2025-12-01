'use client' // Обязательно!

import { useEffect, useRef } from 'react'

// Типы для ymaps3
declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		ymaps3: any
	}
}

export default function YMapComponent() {
	const mapRef = useRef<HTMLDivElement>(null)
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const mapInstance = useRef<any>(null)

	useEffect(() => {
		// Динамически загружаем скрипт
		const loadMap = async () => {
			console.log('first message')
			// Если уже загружено
			if (window.ymaps3) return

			// Создаем script тег
			const script = document.createElement('script')
			script.src = `https://api-maps.yandex.ru/v3/?apikey=df961c11-bc27-4941-86c4-0566734e05a5&lang=ru_RU`
			script.async = true

			script.onload = async () => {
				await window.ymaps3.ready

				// Импортируем нужные модули
				const { YMap, YMapDefaultSchemeLayer } = await window.ymaps3.import(
					'@yandex/ymaps3-mapkit@0.0.1'
				)

				// Создаем карту
				if (mapRef.current && !mapInstance.current) {
					mapInstance.current = new YMap(mapRef.current, {
						location: {
							center: [37.617494, 55.750446], // Москва
							zoom: 10,
						},
					})

					// Добавляем слой схемы
					mapInstance.current.addChild(new YMapDefaultSchemeLayer())
				}
			}

			document.head.appendChild(script)
		}

		loadMap()

		// Очистка
		return () => {
			if (mapInstance.current) {
				mapInstance.current.destroy()
			}
		}
	}, [])

	return (
		<div
			ref={mapRef}
			style={{
				width: '100%',
				height: '440px',
				borderRadius: '12px',
				overflow: 'hidden',
			}}
		/>
	)
}
