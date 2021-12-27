const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var arg = args[0];
    var reson = args[1];
    if(message.author.id == "239008388544069633") {
        if(arg != null) {
            arg = arg.replace('<', '').replace('@', '').replace('!', '').replace('>', '');
        }
    
        var user = message.guild.member(arg);
        user.kick(reson).then(() => {
            var embed = new Discord.RichEmbed()
                .setAuthor("Command Executed", "https://i.imgur.com/oq9ZuS3.png")
                .setFooter("Request send by "+message.author.username)
                .setColor(0xc01e1e)
                .setDescription("**"+user.user.username+"** został wyrzucony.")
                .addField("Powód", reson);
            message.channel.send(embed);
        }).catch(err => {
            var embed = new Discord.RichEmbed()
                .setAuthor("Command Executed", "https://i.imgur.com/oq9ZuS3.png")
                .setFooter("Request send by "+message.author.username)
                .setColor(0xc01e1e)
                .setDescription("**"+user.user.username+"** nie został wyrzucony.")
                .addField("Powód błędu", err.message);
            message.channel.send(embed);
        });
    } else {
        var embed = new Discord.RichEmbed()
        .setAuthor("ERROR MESSAGE REPORT", "https://i.imgur.com/nrcaCtf.png", "")
        .setFooter("Request send by "+message.author.username)
        .setColor(0xc01e1e)
        .addField("ERROR ID: 101", "No permissions");

        message.channel.send(embed);
    }
}