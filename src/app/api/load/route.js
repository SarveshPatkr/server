import { NextResponse } from "next/server";
import pusher from "@/utils/pusher";


export async function POST(request) {
	const body = await request.json();

	console.log(body)

	pusher.trigger("my-channel", "my-event", {
		action: "load:video",
		value: body.id
	});

	return NextResponse.json({ message: "Hello, World!" });

}
