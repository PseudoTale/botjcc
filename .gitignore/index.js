const Discord = require('discord.js')
const bot = new Discord.Client()
const token = process.env.TOKEN;
var crea = '@AżЄЯρŧĪφρ';
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

var dab = ["https://tenor.com/view/squid-ward-dab-parade-gif-11976669",
	"https://tenor.com/view/dab-dancing-idgaf-gif-5661979",
	"https://tenor.com/view/luigi-dab-gif-9672617",
	"https://tenor.com/view/dab-pogba-bad-pogba-gif-7345779",
	"https://tenor.com/view/shark-dab-gif-10027244",
	"https://tenor.com/view/dab-dance-hit-or-miss-nyan-cosplay-tik-tok-gif-12988318",
	"https://tenor.com/view/markiplier-dab-dabbing-gif-8063187",
	"https://tenor.com/view/bettywhite-dab-gif-5044603",
	"https://tenor.com/view/gendut-lucu-dab-sledding-sledding-juga-nih-gif-12174790",
	"https://tenor.com/view/dab-lords-pupsuck-dabbing-gif-8108584",];

var cat = ["https://cdn.discordapp.com/attachments/465850774845390859/561861437522313226/th.png",
	"https://cdn.discordapp.com/attachments/465850774845390859/561861726132371469/https3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/465850774845390859/561861966956855296/jsxzobk8.png",
	"https://cdn.discordapp.com/attachments/465850774845390859/561862139820769281/https3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/465850774845390859/561862244095229982/https3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/465850774845390859/561862368347553793/http3A2F2Fcoxilanddu26.png",
	"https://cdn.discordapp.com/attachments/465850774845390859/561862456771739658/https3A2F2Frecherche.png",
	"https://cdn.discordapp.com/attachments/465850774845390859/561862590184292352/https3A2F2Fstatic.png",
	"https://cdn.discordapp.com/attachments/465850774845390859/561862691296378890/https3A2F2Fimages.png",
	"https://cdn.discordapp.com/attachments/465850774845390859/561862784724369408/http3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/465850774845390859/561862867146768384/http3A2F2Fcdn-doctissimo.png",
	"https://cdn.discordapp.com/attachments/467816100181311519/561893598916771863/IMG_20190323_215059_306.jpg",];

var bouffe = ["https://cdn.discordapp.com/attachments/541611576021614622/563347016802107393/http3A2F2Fstorage-cube.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563347177456533504/http3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563347328300351488/http3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563347421741187075/https3A2F2Fimg3.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563347530692296704/http3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563347626389536768/http3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563347715799515147/http3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563347823584608257/http3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563348018468749342/http3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563348123141799949/http3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563348230700531722/http3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563348655944499214/https3A2F2Fdata.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563348735124307978/https3A2F2Ftheloserswhomadeit.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563348947700285461/http3A2F2F2.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563349111433330688/http3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563349196887949340/http3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563349380535549982/http3A2F2Fwww.png",
	"https://cdn.discordapp.com/attachments/541611576021614622/563349503927779328/http3A2F2Fwww.png"];

bot.on('ready', () => {
	bot.user.setGame('vous aidez ! (.help)')
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
		
 	if(message.content === '.help') {
		console.log(`Commande .help par ${message.author.tag}`);
		var help_embed = new Discord.RichEmbed()
			.setColor('#00B131')
			.setDescription("Les commandes sont:")
			.addField(".ping /.ping		.dab / .cat \n\n .pierre / .feuille / .ciseau \n\n .pile / .face \n\n .avatar \n\n .PseudoTale		.Pewds		.Destroyer \n\n .zizi		.hatkid		.hymnejcc")
			.setFooter("Et d\'autres nouveautés vont arriver !N\'ésites pas a laisser des suggestions !")
			.setTitle("Voici le panneau d'aide")
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

	if(message.content === '.Destroyer') {
		message.channel.send("Ah oui ses le boss de enderbot !")
	}
	
	if(message.content === '.dab') {
		message.channel.send(dab[getRandomInt(dab.length)])	
	}
	
	if(message.content === '.cat') {
		message.channel.send(cat[getRandomInt(cat.length)])	
	}
	
	if(message.content === '.hymnejcc') {
		message.content.send("Voila l'hymne national de la jcc (aussi de l'URSS) https://www.youtube.com/watch?v=Rm6q_3WGy9M")
	}
	
	if(message.content === '.bouffe') {
		message.channel.send(bouffe[getRandomInt(cat.length)])
	}
	
	});




bot.login(token)
