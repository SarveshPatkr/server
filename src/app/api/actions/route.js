import { NextResponse } from "next/server";
import pusher from "@/utils/pusher";


export async function POST(request) {
	const body = await request.json();

	console.log(body)

	pusher.trigger("my-channel", "my-event", {
		action: `${body.action}:video`,
		value: body.value
	});

	return NextResponse.json({ message: "Hello, World!" });

}
