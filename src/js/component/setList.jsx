import React, { useState } from "react";
import AudioPlayer from "./audioPlayer.jsx";

const SetList = () => {
	const soundUrl = "https://assets.breatheco.de/apis/sound/";
	const [sounds] = useState([
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: soundUrl + "files/mario/songs/castle.mp3",
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: soundUrl + "files/mario/songs/hurry-starman.mp3",
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: soundUrl + "files/mario/songs/overworld.mp3",
		},
	]);

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
			{currentSound != "" ? (
				<AudioPlayer src={currentSound} list={sounds} />
			) : (
				""
			)}
		</div>
	);
};

export default SetList;
