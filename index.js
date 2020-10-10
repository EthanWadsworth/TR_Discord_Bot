const Discord = require("discord.js")
require('dotenv').config()

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

const prefix = '!'

client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    const commandBody = msg.content.slice(prefix.length);
    if (commandBody === 'ping') {
        msg.reply('pong');
    }
})