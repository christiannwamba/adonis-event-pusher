'use strict'

const Route = use('Route')
const Event = use('Event')


Route.on('/').render('welcome')

Route.on('/home').render('home')

Route.post('/send', async ({request, session, response}) => {
	const message = request.input('message')

	Event.fire('send.message', message)

	session.flash({ status: 'Message sent' })
	return response.redirect('back')

}).as('sendMessage')
