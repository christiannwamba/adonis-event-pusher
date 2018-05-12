const Pusher = require('pusher')
const Event = use('Event')
const Env = use('Env')

Event.when('send.message', async (message) => {
	let pusher = new Pusher({
		appId: Env.get('PUSHER_APP_ID', ''),
		key: Env.get('PUSHER_KEY', ''),
		secret: Env.get('PUSHER_SECRET', ''),
		cluster: 'eu',
		encrypted: true
	});

	pusher.trigger('adonis-channel', 'send-message', {
		message
	});
})