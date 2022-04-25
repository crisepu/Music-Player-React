import React, { useState } from "react";

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

	return (
		<div className="generalList">
			<div className="col header"></div>
			<div className="col list">
				{sounds[0].id} - {sounds[0].name}
			</div>
			<div className="col list">
				{sounds[1].id} - {sounds[1].name}
			</div>
			<div className="col list">
				{sounds[2].id} - {sounds[2].name}
			</div>
		</div>
	);
};

export default SetList;
