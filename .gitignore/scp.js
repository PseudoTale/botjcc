const Discord = require('discord.js')
const bot = new Discord.Client()
const token = process.env.TOKEN;
const secret = process.env.SECRET;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
				
	if(message.content === '.help scp') {
		let Destroyer_embed = new Discord.RichEmbed()
			.setColor('#00ECFF')
			.setTitle("commande :")
			.setFooter("Commande .help scp")
      .addField(".scp173")
		message.channel.sendEmbed(scphelp_embed)
}
if(message.content === '.scp173') {
		let Destroyer_embed = new Discord.RichEmbed()
			.setColor('#c763c4')
			.setTitle("SCP 173:")
      .addField("Description : Transféré au Site-19 en 1993. Origine inconnue jusqu'à présent. Il est constitué de barres d'armature et de béton comportant des traces de peinture aérosol de marque Krylon. SCP-173 est animé et extrêmement hostile. L'objet ne peut pas bouger tant qu'il se trouve dans un champ visuel direct. Il est impératif que le contact visuel avec SCP-173 ne soit pas interrompu. Les membres du personnel assignés à entrer dans le conteneur sont chargés de s'alerter mutuellement avant de cligner des yeux. L'objet attaque en brisant le cou de la victime à la base du crâne, ou par strangulation. Dans le cas d'une attaque, le personnel doit respecter les procédures de confinement de Classe 4 concernant les objets dangereux.Le personnel a rapporté avoir entendu des bruits de grattements provenant de l'intérieur du conteneur lorsque personne n'est présent à l'intérieur. Ceci est considéré comme normal, et toute modification de ce comportement doit être signalé au Superviseur en service.")
			.setFooter("Commande .scp173")
		message.channel.sendEmbed(scp173_embed)
