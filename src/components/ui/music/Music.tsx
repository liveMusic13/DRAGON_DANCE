import React, { FC, useState } from 'react';
import useMusicPlayer from '../../hooks/useMusicPlayer';
import styles from './Music.module.scss';

const Music: FC = () => {
	const { audioPlayerRef, playNextSong, pauseSong } = useMusicPlayer();
	const [checkPlayOrPauseMusic, setCheckPlayOrPauseMusic] =
		useState<boolean>(true);

	return (
		<div
			className={styles.wrapperMusic}
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
	);
};

export default Music;
