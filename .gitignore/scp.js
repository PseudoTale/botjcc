const Discord = require('discord.js')
const bot = new Discord.Client()
const token = process.env.TOKEN;
const secret = process.env.SECRET;
var crea = '@PseudoTale';
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
				
	if(message.content === '.help scp') {
		message.channel.send("ceci est un test mrc")
	}
