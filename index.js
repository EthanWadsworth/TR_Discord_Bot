const Discord = require("discord.js")
require('dotenv').config()

const bot = new Discord.Client();
bot.login(process.env.BOT_TOKEN);
bot.commands = new Discord.Collection()
const botCommands = require('./commands/commands')

// maps each command to an object added to the bot commands list
Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key])
})

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', msg => {
    if (msg.author.bot) return;
    const args = msg.content.split(/ +/)
    const command = args.shift().toLowerCase()

    if(!bot.commands.has(command)) return;

    try {
        bot.commands.get(command).execute(msg, args)
    } catch(e) {
        console.log(e)
        msg.reply('error executing command')
    }
})