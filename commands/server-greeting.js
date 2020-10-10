const execute = (msg, args) => {
    const channel = msg.guild.channels.cache.find(ch => ch.name === 'introductions')
    if (!channel) return;
    channel.send(`Welcome to the Triton Robotics (TR) community server, ${msg}`)
}

module.exports = {
    name: '!serverGreeting',
    description: 'Greets user when they first join the server',
    execute
}