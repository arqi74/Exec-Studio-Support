const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var arg = args[0];
    var g = message.member.guild;
    if(arg == "-b") {
        g.fetchBans()
            .then(bans => {
                var embed = new Discord.RichEmbed()
                    .setAuthor("Command Executed", "https://i.imgur.com/oq9ZuS3.png")
                    .setFooter("Request send by "+message.author.username)
                    .setColor(0xc01e1e)
                    .setDescription('Ilość zbanowanych osób: '+bans.size);
                message.channel.send(embed);
            })
            .catch(console.error);
    } else if(arg == "-u") {
        var embed = new Discord.RichEmbed()
            .setAuthor("Command Executed", "https://i.imgur.com/oq9ZuS3.png")
            .setFooter("Request send by "+message.author.username)
            .setColor(0xc01e1e)
            .setDescription('Ilość osób na serwerze: '+g.members.size);
        message.channel.send(embed);
    }
}