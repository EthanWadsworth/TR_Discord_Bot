const execute = (msg, args) => {
    let pollArgs = [];
    if(!args[0]) {
        msg.channel.send('Missing args!\nUsage: !poll [msg] [arg1] [arg2] [arg3] ... [arg10]')
    } else {
        if (args[args.length - 1].charAt(args[args.length - 1].length - 1) != ']') {
            // console.log('improperly formatted args')
            msg.reply('Improperly formatted arguments!')
            return
        }
        for (let i = 0; i < args.length; i++) {
            if ((args[i].charAt(0) == '[') && !(args[i].charAt(args[i].length - 1) == ']')) {
                // we are at the beginning of a multi-space command
                pollArg = args[i].slice(1, args[i].length)
                for(let j = i+1; j < args.length; j++) {
                    if (args[j].charAt(args[j].length - 1) == ']') {
                        pollArg += ' ' + args[j].slice(0, args[j].length - 1)
                        i += j
                        pollArgs.push(pollArg)
                        break;
                    }
                    pollArg += ' ' + args[j]
                }
            } else if (args[i].charAt(0) == '[' && args[i].charAt(args[i].length - 1) == ']') {
                // pollArgs.push(args[i].join(' ').slice(1, args[i].length - 1))
                pollArgs.push(args[i].slice(1, args[i].length - 1))
            }
        }

        // missing poll options
        if (pollArgs.length < 2) {
            msg.reply('poll options are missing!')
            return
        }
        for (let i = 1; i < pollArgs.length; i++) {
            pollArgs[i] = `${i - 1}: ` + pollArgs[i]
        }
        const numbers = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣']
        msg.channel.send(pollArgs).then(reactions => {
            for (let i = 1; i < pollArgs.length; i++) {
                reactions.react(numbers[i - 1])
            }
        })
    }
}

module.exports = {
    name: '!poll',
    description: 'start new poll with number of args',
    execute
}