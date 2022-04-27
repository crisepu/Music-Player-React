import React from "react";
// revisar como ingesar funcion
const SetList = (props) => {
	const songList = props.songs.map((song, index) => {
		return (
			<div
				key={index}
				className="col list"
				onClick={() => {
					props.setCurrentSound(index);
				}}>
				{song.id} - {song.name}
			</div>
		);
	});

	return (
		<div className="generalList">
			<div className="col header"></div>
			{songList}
		</div>
	);
};

export default SetList;
