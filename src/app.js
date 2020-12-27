
const tmi = require('tmi.js');
const config = require('./config.js');
const roasts = require('./roasts.js');

//Create new client object
const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {reconnect: true,secure: true},
	identity: 
	{
		username: config.botLogin.USERNAME,
		password: config.botLogin.TOKEN
	},
	channels: [ 'channel']
});

//connect to twitch
client.connect().catch(console.error);

//When a message is sent to any of the connected channels chats
client.on('message', (channel, tags, message, self) => {
	//if message is from the bot or message is not a command, ignore.
	if(self || !message.startsWith('!')) return; 

	//Roast the user sending the command
	if(message.toLowerCase() === '!roastme') {
		client.say(channel, `@${tags.username}, ${roasts.getRoast()}`);
	}

	//Roast the streamer
	if(message.toLowerCase() === '!roaststreamer') {
		var channelName = channel.replace('#', '@');
		client.say(channel, `${channelName}, ${roasts.getRoast()}`);
	}

	//Get bot help
	if(message.toLowerCase() === '!roasthelp') {
		var channelName = channel.replace('#', '@');
		client.say(channel, `Type '!roastme' to be roasted. Type !roaststreamer to roast the streamer`);
	}

});