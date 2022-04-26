import React, { useState } from "react";
import AudioPlayer from "./audioPlayer.jsx";

const SetList = () => {
	let sounds = [
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
	];

	const soundUrl = "https://assets.breatheco.de/apis/sound/";

	const [currentSound, setCurrentSound] = useState("");

	return (
		<div className="generalList">
			<div className="col header"></div>
			<div
				className="col list"
				onClick={() => {
					setCurrentSound(sounds[0].url);
				}}>
				{sounds[0].id} - {sounds[0].name}
			</div>
			<div
				className="col list"
				onClick={() => {
					setCurrentSound(sounds[1].url);
				}}>
				{sounds[1].id} - {sounds[1].name}
			</div>
			<div
				className="col list"
				onClick={() => {
					setCurrentSound(sounds[2].url);
				}}>
				{sounds[2].id} - {sounds[2].name}
			</div>

			<AudioPlayer src={soundUrl + currentSound} />
		</div>
	);
};

export default SetList;
