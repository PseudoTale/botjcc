const Discord = require('discord.js')
const bot = new Discord.Client()
const token = process.env.TOKEN;
var crea = '@AżЄЯρŧĪφρ';
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};


bot.on('ready', () => {
	bot.setActivity('vous aidez ! (.jcc)')('vous aidez ! (.jcc)')
	console.log('Bot prêt');
})

bot.on('guildMemberAdd', member =>{
	member.guild.channels.get('534753705400991774').send('***Bienvenue*** '+ member.user + ' sur le serveur !! Nous sommes donc ' + member.guild.memberCount);
})

bot.on('guildMemberRemove', member =>{
	member.guild.channels.get('534753705400991774').send(member.user + " est partis :sob: :sob: Nous sommes donc " + member.guild.memberCount);
})



bot.on('message', async message => {
	let args = message.content.trim().split(/ +/g)
	
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
	
 if(message.content === '.puits') {
	 message.delete()
	  var resultat = getRandomInt(3);
		if(resultat === 0) {
		var resultat = 'pierre';
		return message.channel.send("```Votre choix: censured\n mon choix: pierre\n\nVous avez donc gagné```")
	} else if(resultat = 1) {
		var resultat = 'feuille';
		return message.channel.send("```Votre choix: censured\nmon choix: feuille\n\nVous avez donc gagné```")
    	} else {
		var resultat = 'ciseau';
		return message.channel.send("```Votre choix: censured\nmon choix: ciseau\n\nVous avez donc gagné```")

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
		var help_embed = new Discord.RichEmbed()
			.setColor('#00B131')
			.addField("Les commandes sont: \n\n .ping/.ping \n\n .pierre/.feuille/.ciseau \n\n .pile/.face \n\n .avatar \n\n .PseudoTale		.Pewds \n\n .zizi		.hatkid \n\n Et d\'autres nouveautés vont arriver !N\'ésites pas a laisser des suggestions !")
		message.channel.sendEmbed(help_embed)
	}

		if (args[0].toLocaleLowerCase() === ".avatar") {
			console.log(`Commande .avatar par ${message.author.tag}`);
			let member = message.mentions.users.first()
			if(!member) return message.channel.send(message.author.avatarURL)
			message.channel.send(member.displayAvatarURL)
		
		}

    if (message.content.startsWith(".kick")) {
	console.log(`Commande .kick par ${message.author.tag}`)
	if(message.mentions.users.first() !== crea) {
		if(message.member.hasPermission("ADMINISTRATOR")) {
        	var member= message.mentions.members.first();
        	member.kick().then((member) => {
			return message.channel.send(member.displayName + " a bien était kick");
        });
		} else {
			message.channel.send("Tu n'a pas les permissions pour kick quelqu'un")
			}
	} else {
		message.channel.send("Ses mon maitre.. Je ne veut pas le kick")
	}
		}
    if (message.content.startsWith(".ban")) {
	console.log(`Commande .ban par ${message.author.tag}`)
	if(message.mentions.users.first() !== crea) {
		if(message.member.hasPermission("ADMINISTRATOR")) {
        	var member= message.mentions.members.first();
        	member.ban().then((member) => {
			return message.channel.send(member.displayName + " a bien était ban");
        });
	} else {
		return message.channel.send("Tu n'a pas les permissions pour ban quelqu'un")
		}
	} else {
		message.channel.send("Ses mon maitre.. Je ne veut pas le ban")	
	}
		}		

		if(message.content === '.gif') {
			console.log(`Commande .gif par ${message.author.tag}`)
			return message.channel.send("Cette command est en cours de dévellopement !")
			//return message.channel.send("https://tenor.com/view/peace-and-tranquility-no-one-is-around-to-help-hat-kid-ahat-in-time-dancing-gif-12688052")
		}
	
			if(message.content === '.PseudoTale') {
			console.log(`Commande .gif par ${message.author.tag}`)
			return message.channel.send("https://www.youtube.com/channel/UCUspavUwM6UFeFRxmwVHiwA")
			}
	
			if(message.content === '.Pewds') {
			console.log(`Commande .Pewds par ${message.author.tag}`)
			return message.channel.send("Abbonez vous a PewDiePie !!!!!!!!!!!!!!!! https://www.youtube.com/user/PewDiePie")
			}
	
				if(args[0].toLocaleLowerCase() === '.clear'){
				if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission requis")
				let count = args[1]
				if(!count) return message.channel.send("Veuillez indiquer un nombre de message à supprimer")
				if(isNaN(count)) message.channel.send("Veuillez indiquer un nombre valide")
				if(count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
				message.channel.bulkDelete(parseInt(count) + 1)

			}

	if (args[0].toLowerCase() === ".mute") {
		
        	if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
		if(message.mentions.users.first() !== crea) {
        	let member = message.mentions.members.first()
        	if (!member) return message.channel.send("Membre introuvable")
        	if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        	if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne peux pas mute ce membre")
        	let muterole = message.guild.roles.find(role => role.name === 'Muted')
        	if (muterole) {
           	 member.addRole(muterole)
           	 message.channel.send(member + ' a été mute :white_check_mark:')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then((role) => {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' a été mute :white_check_mark:')
            })
        }
    } else {
	message.channel.send('Ses mon maitre.. Je ne veut pas le mute')    
    }
	}
	
	    if (args[0].toLocaleLowerCase() === '.question'){
			if (!args[0]) return message.channel.send("Veuillez **poser une question**")
			let rep = ["Non :x:", "J'ai envie de dormir :zzz:", "Balec :face_palm:", "Peut être... :thinking:", "Évidemment"];
			let reptaille = Math.floor((Math.random() * rep.length));
			let question = args.slice(0).join(" ");

			let embed = new Discord.RichEmbed()
					.setAuthor(message.author.tag)
					.setColor("ORANGE")
					.addField("Question:", question)
					.addField("Réponse:", rep[reptaille]);
			message.channel.send(embed)
	}
	
		if(message.content === '.zizi') {
		console.log(`Commande .zizi par ${message.author.tag}`)
		return message.channel.send("https://www.youtube.com/watch?v=vjTQqTGa3dQ :eggplant:")
		}
	
	if(message.content === '.hatkid') {
		message.channel.send("https://tenor.com/view/furry-ahat-in-time-games-dance-gif-13636284")	
	}

	
	});




bot.login(token)
