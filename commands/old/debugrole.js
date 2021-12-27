const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var rank, dane;

    rank = args[0];
    if(rank != null) {
        rank = rank.replace('<@&', '');
        rank = rank.replace('>', '');
    }

    dane = message.guild.roles.get(rank);
    var embed = new Discord.RichEmbed()
        .setTitle("Debug rangi: "+dane.name)
        .setColor("RED")
        .addField("HEX Color", dane.color) 
        .addField("Permisions ID", dane.permissions)
        .addField("Ilość użytkowników z tą rangą", dane.members.size);

    message.channel.send(embed);
}