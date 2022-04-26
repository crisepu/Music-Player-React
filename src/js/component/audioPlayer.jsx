import React from "react";
import SetList from "./setList.jsx";

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
