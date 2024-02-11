"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
function btn({ videoKey }) {
	const router = useRouter();


	const loadVideo = () => {
		fetch("/api/load", {
			method: "POST",
			body: JSON.stringify({ id: videoKey }),
		});
		router.push(`/connect/${videoKey}`);
	}
	return (
		<div className="relative w-96 h-96 bg-slate-300">
			<div className=" p-4 bg-black bg-opacity-50 text-white">
				<h2 className="text-lg font-bold text-white">{videoKey}</h2>
				<button onClick={loadVideo}>Load</button>
			</div>
		</div>
	);
}

export default btn