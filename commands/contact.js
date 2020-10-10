// if the user just types in !contact, will list out moderators to contact,
// if the user uses !contact <person_name> then the bot will create a dm channel
// with the two users and will send a message saying that this channel was created by the bot
const execute = (msg, args) => {
    msg.reply('Here is a list of contacts if you have questions about:')
}

module.exports = {
    name: '!contact',
    description: 'get list of contacts or start a dm channel with chosen contact',
    execute
}