import React, { useState, useRef } from "react";

const AudioPlayer = (props) => {
	const [list] = useState(props.list);
	const [playFlag, setplayFlag] = useState(false);

	const audioControl = useRef();

	function playSound() {
		return (
			<button
				onClick={() => {
					audioControl.current.play();
					setplayFlag(true);
				}}>
				Play
			</button>
		);
	}
	function pauseSound() {
		return (
			<button
				onClick={() => {
					audioControl.current.pause();
					setplayFlag(false);
				}}>
				Pause
			</button>
		);
	}

	console.log(list);
	return (
		<>
			<audio src={props.src} ref={audioControl}></audio>
			{!playFlag ? playSound() : pauseSound()}
		</>
	);
};

export default AudioPlayer;
