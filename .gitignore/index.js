const Discord = require('discord.js')
const bot = new Discord.Client()
const token = process.env.TOKEN;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};


bot.on('ready', () => {
	console.log('Bot prêt');
})



bot.on('message', async message => {
	
	if (message.content === '.ping') {
		console.log(`Commande .ping par ${message.author.tag}`);
		return message.channel.send('pong');
  }

   	if (message.content === '.pong') {
			console.log(`Commande .pong par ${message.author.tag}`);
			return message.channel.send('ping');
  }

  if(message.content === '.pierre') {
		console.log(`Commande .pierre par ${message.author.tag}`);
	  var resultat = getRandomInt(3);
		if(resultat === 0) {
		var resultat = 'pierre';
		return message.channel.send("```Votre choix: pierre\n mon choix: pierre\n\nC'est une égalité```")
	} else if(resultat = 1) {
		var resultat = 'feuille';
		return message.channel.send("```Votre choix: pierre\nmon choix: feuille\n\nVous avez donc perdu```")
    } else {
		var resultat = 'ciseau';
		return message.channel.send("```Votre choix: pierre\nmon choix: ciseau\n\nVous avez donc gagné```")
    }

	}

	
  if(message.content === '.feuille') {
		console.log(`Commande .feuille par ${message.author.tag}`);
		var resultat = getRandomInt(3);
			if(resultat === 0) {
			var resultat = 'pierre';
			return message.channel.send("```Votre choix: feuille\nmon choix: pierre\n\nVous avez donc gagné```")
    } else if(resultat = 1) {
			var resultat = 'feuille';
			return message.channel.send("```Votre choix: feuille\nmon choix: feuille\n\nC'est une égalité```")
    } else {
			var resultat = 'ciseau';
			return message.channel.send("```Votre choix: feuille\nmon choix: ciseau\n\nVous avez donc perdu```")
	}

	}

  if(message.content === '.ciseau') {
		console.log(`Commande .ciseau par ${message.author.tag}`);
		var resultat = getRandomInt(3);
			if(resultat === 0) {
			var resultat = 'pierre';
			return message.channel.send("```Votre choix: ciseau\nmon choix: pierre\n\nVous avez donc perdu```")
    } else if(resultat = 1) {
			var resultat = 'feuille';
			return message.channel.send("```Votre choix: ciseau\nmon choix: feuille\n\nVous avez donc gagné```")
    } else {
			var resultat = 'ciseau';
			return message.channel.send("```Votre choix: ciseau\nmon choix: ciseau\n\nC'est une égalité```")
	}

	}

    if(message.content === '.pile') {
			console.log(`Commande .pile par ${message.author.tag}`);
  		var pile_face = getRandomInt(2);
  		if(pile_face === 0) {
 			return message.channel.send('Tu a gagner !') 			
			} else {
				return message.channel.send('Tu a perdu');
			}

  	}

 	if(message.content === '.face') {
		console.log(`Commande .face par ${message.author.tag}`);
  	var pile_face = getRandomInt(2);
  	if(pile_face === 1) {
 			return message.channel.send('Tu a eu la bonne réponse') 			
			} else {
				return message.channel.send('Tu a eu la mauvaise réponse');
			}

		}
		
  	if(message.content === '.jcc') {
			console.log(`Commande .help par ${message.author.tag}`);
			return message.channel.send('```Les commandes sont: \n 1: .ping \n .pong \n .pierre \n .feuille \n .ciseau \n .pile \n .face \n .avatar \n Et d\'autres nouveautés vont arriver ! N\'ésites pas a laisser des suggestions !```')
  	}

		if(message.content === '.avatar') {
			console.log(`Commande .avatar par ${message.author.tag}`);
			return message.channel.send('Votre avatar: ' + message.author.displayAvatarURL)
		
		}

    if (message.content.startsWith(".kick")) {
			console.log(`Commande .kick par ${message.author.tag}`)
			if(message.member.hasPermission("ADMINISTRATOR")) {
				message.delete(100);
        var member= message.mentions.members.first();
        member.kick().then((member) => {
					return message.channel.send(member.displayName + " a bien était kick");
        });
			} else {
				message.channel.send("Tu n'a pas les permissions pour kick quelqu'un")
			}
		}
    if (message.content.startsWith(".ban")) {
			console.log(`Commande .ban par ${message.author.tag}`)
			if(message.member.hasPermission("ADMINISTRATOR")) {
				message.delete(100);
        var member= message.mentions.members.first();
        member.ban().then((member) => {
					return message.channel.send(member.displayName + " a bien était ban");
        });
			} else {
				return message.channel.send("Tu n'a pas les permissions pour ban quelqu'un")
			}
		}		

		if(message.content === '.gif') {
			console.log(`Commande .gif par ${message.author.tag}`)
			return message.channel.send("Cette command est en cours de dévellopement !")
			//return message.channel.send("https://tenor.com/view/peace-and-tranquility-no-one-is-around-to-help-hat-kid-ahat-in-time-dancing-gif-12688052")
		}

})



bot.on('message', function (message) {
	
	if(Google.match(message)) {
		Google.action(message)
		
	}

})



bot.login(token)
