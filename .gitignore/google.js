module.exports = class Google {
	static match (message) {
		return message.content.startsWith('.google')
	}
	
	static action (message) {
		let args = message.content.split(' ')
		args.shift()
		return message.channel.send('https://www.google.fr/#q=' + args.join('%20'))
	}
	
}
