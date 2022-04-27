import React, { useState, useRef } from "react";
import SetList from "./setList.jsx";
import Controls from "./controls.jsx";

const AudioPlayer = () => {
	const [songs] = useState([
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3",
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3",
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3",
		},
	]);
	const [playFlag, setplayFlag] = useState(false);
	const [currentSong, setCurrentSong] = useState(null);
	const songUrl =
		currentSong != null
			? "https://assets.breatheco.de/apis/sound/" + songs[currentSong].url
			: "";
	const audioControl = useRef();

	const playSong = () => {
		audioControl.current.play();
		setplayFlag(true);
	};
	const pauseSong = () => {
		audioControl.current.pause();
		setplayFlag(false);
	};
	const previousSong = () => {
		currentSong === 0
			? setCurrentSong(songs.length - 1)
			: setCurrentSong(currentSong - 1);
	};
	const nextSong = () => {
		currentSong === songs.length - 1
			? setCurrentSong(0)
			: setCurrentSong(currentSong + 1);
	};
	return (
		<>
			<div className="generalPlayer">
				<div className="col header"></div>
				<audio src={songUrl} ref={audioControl} autoPlay></audio>
				<SetList
					songs={songs}
					setCurrentSong={(index) => {
						setCurrentSong(index);
						setplayFlag(true);
					}}
					setplayFlag={() => setplayFlag(true)}
				/>
				<Controls
					playFlag={playFlag}
					playSong={() => {
						playSong();
					}}
					pauseSong={() => {
						pauseSong();
					}}
					previousSong={() => {
						previousSong();
					}}
					nextSong={() => {
						nextSong();
					}}
				/>
			</div>
		</>
	);
};

export default AudioPlayer;
