
//return a random roast
function getRoast()
{
	return roasts[Math.floor(Math.random() * roasts.length)];
}

//An array containing all roasts
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
'You are the human equivelant of a wet sleeve',
'I was wondering how you comb your hair so the horns don’t show',
'The fall from your ego to your IQ would be fatal',
'your head stepped in something, oh wait thats your face',
'I can\'t roast you, never kick someone when they are down'
]

module.exports.getRoast = getRoast;