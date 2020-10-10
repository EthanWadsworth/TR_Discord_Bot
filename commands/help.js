const execute = (msg, args) => {
    msg.reply('here is the list of available commands:')
}

module.exports = {
    name: '!help',
    description: 'lists out all available bot commands',
    execute,
}