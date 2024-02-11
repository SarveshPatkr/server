import Pusher from "pusher";


const pusher = new Pusher({
	appId: process.env.PUSHER_CHANNEL_APP_ID,
	key: process.env.PUSHER_CHANNEL_KEY,
	secret: process.env.PUSHER_CHANNEL_SECRET,
	cluster: process.env.PUSHER_CHANNEL_CLUSTER,
	
});

export default pusher;