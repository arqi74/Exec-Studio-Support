const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var arg = args[0];
    var reson = args[1];
    var time = args[2];
    if(message.author.id == "239008388544069633") {
        if(arg != null) {
            arg = arg.replace('<', '').replace('@', '').replace('!', '').replace('>', '');
        }
        if(time == undefined) {
            var time_name = "Permamentnie";
        } else if(time == 0) {
            var time_name = "Permamentnie";
        } else {
            var time_name = time;
        }
    
        var user = message.guild.member(arg);
        user.ban(reson, time).then(() => {
            var embed = new Discord.RichEmbed()
                .setAuthor("Command Executed", "https://i.imgur.com/oq9ZuS3.png")
                .setFooter("Request send by "+message.author.username)
                .setColor(0xc01e1e)
                .setDescription("**"+user.user.username+"** został zablokowany.")
                .addField("Powód", reson)
                .addField("Na czas:", time_name);
            message.channel.send(embed);
        }).catch(err => {
            var embed = new Discord.RichEmbed()
                .setAuthor("Command Executed", "https://i.imgur.com/oq9ZuS3.png")
                .setFooter("Request send by "+message.author.username)
                .setColor(0xc01e1e)
                .setDescription("**"+user.user.username+"** nie został zablokowany.")
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