const execute = (msg, args) => {
    msg.reply('Hello my name is <Bot Name>, a bot for the Triton Robotics server created by Ethan Wadsworth')
}

module.exports = {
    name: '!info',
    description: 'get information on the bot',
    execute
}