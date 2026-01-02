import React from 'react';
import styles from './modalvideotrailergame.module.css'

const ModalVideoTrailerGame = () => {
	return (
		<div className={styles.container}>
			<iframe className={styles.iframe} src="https://player.vimeo.com/video/1001918357?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"  title="WARPOINT — командный VR-шутер | Трейлер"></iframe>
		</div>
	);
};

export default ModalVideoTrailerGame;