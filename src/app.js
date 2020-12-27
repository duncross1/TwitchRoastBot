
const tmi = require('tmi.js');
const config = require('./config.js');
const roasts = require('./roasts.js');

roasts.getRoast();



const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {reconnect: true,secure: true},
	identity: 
	{
		username: config.botLogin.USERNAME,
		password: config.botLogin.TOKEN
	},
	channels: [ 'thescotsway']
});

//connect to twitch
client.connect().catch(console.error);

client.on('message', (channel, tags, message, self) => {
	if(self || !message.startsWith('!')) return; //if message is from the bot or message is not a command, ignore.
	console.log(tags + channel);

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