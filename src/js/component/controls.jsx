import React, { useState } from "react";

const Controls = (props) => {
	return (
		<div>
			<button onClick={() => props.previousSong()}>Back</button>
			<button
				onClick={() =>
					props.playFlag ? props.pauseSong() : props.playSong()
				}>
				{props.playFlag ? "Pause" : "Play"}
			</button>
			<button onClick={() => props.nextSong()}>Next</button>
		</div>
	);
};

export default Controls;
