import { useEffect, useRef, useState } from 'react';
import music from '../../data/music.data';

const useMusicPlayer = () => {
	const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

	const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);

	const playNextSong = () => {
		if (currentSongIndex < music.length) {
			if (audioPlayerRef.current)
				audioPlayerRef.current.src = music[currentSongIndex].src;
			audioPlayerRef.current?.play();
			setCurrentSongIndex(currentSongIndex + 1);
		} else if (currentSongIndex >= music.length) {
			setCurrentSongIndex(0);
		}
	};

	const pauseSong = () => {
		if (currentSongIndex < music.length) {
			audioPlayerRef.current?.pause();
		}
	};

	useEffect(() => {
		const handleSongEnd = () => {
			if (currentSongIndex < music.length) {
				playNextSong();
			} else {
				setCurrentSongIndex(0);
				playNextSong();
			}
		};

		audioPlayerRef.current?.addEventListener('ended', handleSongEnd);

		return () => {
			audioPlayerRef.current?.removeEventListener('ended', handleSongEnd);
		};
	}, [currentSongIndex, music]);

	return {
		audioPlayerRef,
		playNextSong,
		pauseSong,
		currentSongIndex,
	};
};

export default useMusicPlayer;
