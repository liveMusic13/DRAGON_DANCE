import React, { FC, useState } from 'react';
import music from '../../../data/music.data';
import useMusicPlayer from '../../hooks/useMusicPlayer';
import styles from './Music.module.scss';

const Music: FC = () => {
	const { audioPlayerRef, playNextSong, pauseSong, currentSongIndex } =
		useMusicPlayer();
	const [checkPlayOrPauseMusic, setCheckPlayOrPauseMusic] =
		useState<boolean>(true);
	const [viewNameMusic, setViewNameMusic] = useState<boolean>(false);

	return (
		<div className={styles.wrapperMusic}>
			<div
				className={styles.wrapperMusicButton}
				onClick={() => {
					checkPlayOrPauseMusic ? playNextSong() : pauseSong();
					setCheckPlayOrPauseMusic(!checkPlayOrPauseMusic);
				}}
			>
				<audio ref={audioPlayerRef}>
					<source src='' type='audio/mpeg' />
				</audio>
				<p className={styles.musicNote}>&#9834;</p>
			</div>
			<div className={styles.blockNameMusic}>
				{viewNameMusic ? (
					<p
						className={styles.nameMusic}
						onClick={() => setViewNameMusic(false)}
					>
						{music[currentSongIndex].name}
					</p>
				) : (
					<button onClick={() => setViewNameMusic(true)}>Название песни</button>
				)}
			</div>
		</div>
	);
};

export default Music;
