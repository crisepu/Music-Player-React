import React from "react";

//create your first component
const AudioPlayer = () => {
	return (
		<div className="container-fluid">
			<audio controls>
				<source
					src="https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
					type="audio/mp3"></source>
				Your browser does not support the audio element.
			</audio>
		</div>
	);
};

export default AudioPlayer;
