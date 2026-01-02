import React from 'react';
import styles from './modalvideogame.module.css'
import useMediaQuery from '@/app/hooks/useMediaQuery'


const ModalVideoGame = () => {
		const laptop1200 = useMediaQuery(1202)
	const laptop960 = useMediaQuery(962)
	const laptop780 = useMediaQuery(780)
	const laptop640 = useMediaQuery(641)
	return (
		<div className={styles.container}>
			{laptop640 ? (
				<iframe
					className={styles.video}
					width='480'
					height='270'
					src="https://rutube.ru/play/embed/17c3489c23ff376f806f92c195bdeb12/"
					allow='clipboard-write; autoplay'
					allowFullScreen
				></iframe>
			) :
			laptop780
			?(
				<iframe
					className={styles.video}

					width='600'
					height='350'
					src="https://rutube.ru/play/embed/17c3489c23ff376f806f92c195bdeb12/"
					allow='clipboard-write; autoplay'
					allowFullScreen
				></iframe>
			)
			:
			laptop960 ? (
				<iframe
					className={styles.video}

					width='700'
					height='393'
					src="https://rutube.ru/play/embed/17c3489c23ff376f806f92c195bdeb12/"
					allow='clipboard-write; autoplay'
					allowFullScreen
				></iframe>
			) : laptop1200 ? (
				<iframe
					className={styles.video}

					width='900'
					height='506'
					src="https://rutube.ru/play/embed/17c3489c23ff376f806f92c195bdeb12/"
					allow='clipboard-write; autoplay'
					allowFullScreen
				></iframe>
			) : (
				<iframe
					className={styles.video}

					width='1000'
					height='562'
					src="https://rutube.ru/play/embed/17c3489c23ff376f806f92c195bdeb12/"
					allow='clipboard-write; autoplay'
					allowFullScreen
				></iframe>
			)}
		</div>
	);
};

export default ModalVideoGame;