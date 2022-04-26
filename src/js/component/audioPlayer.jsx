import React from "react";

const AudioPlayer = (props) => {
	console.log(props.src);
	return (
		<div className="container-fluid">
			<audio src={props.src} controls>
				Your browser does not support the audio element.
			</audio>
		</div>
	);
};

export default AudioPlayer;
