
function getRoast()
{
	return roasts[Math.floor(Math.random() * roasts.length)];
}

var roasts = [
'you\'re lame',
'twitch banned all the words I would use to describe you',
'You are not poggers',
'You\'re ok actually...sike',
'Chat talks about you when you aren\'t here',
'Don\'t you have anything better to do?',
'Your mum eats cat poop',
'The longest book you\'ve read was a flip book',
'You were the worst part of 2020',
'You\'re pretty cool...whoops I spelt boring wrong',
'You aren\'t worth my time',
'If I was the streamer I\'d ban you',
'You remind me of Brad Pitt, except without the good looks, talent, or personality',
'Do us all a favour and click the \'X\' at the top of your browser',
'You are the human equivelant of a wet sleeve'
]

module.exports.getRoast = getRoast;