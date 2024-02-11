"use client"
import React, { useState } from 'react'

function page({ params }) {
	const [Playing, setPlaying] = useState(false)
	const sendEvent = (event, value = params.videoKey) => {
		fetch("/api/actions", {
			method: "POST",
			body: JSON.stringify({ action: event, value: value }),
		});
	}

	return (
		<div>
			<h1>Connect to {params.videoKey}</h1>
			<hr />
			{
				Playing ?
					<button onClick={() => {
						sendEvent("resume")
					}}>
						Resume
					</button> : <button onClick={() => {
						sendEvent("play")
						setPlaying(true)
					}} >
						Play
					</button>
			}
			<button onClick={() => {
				sendEvent("pause")
			}}>Pause</button>
			<hr />

			<input type="range" max={1} min={0} name="volume" id="volume" onPointerOut={(e) => {
				sendEvent("volume", e.target.value)
			}} />
		</div>
	)
}

export default page