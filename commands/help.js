const Discord = require('discord.js');
exports.run = (client, message, args) => {
    
    var embed = new Discord.RichEmbed()
        .setAuthor("Command list", "https://i.imgur.com/CGHwVEP.png", "")
        .setFooter("Request send by "+message.author.username)
        .setColor(0xc01e1e)
        .setThumbnail("https://i.imgur.com/aqyhN1x.png")
        .addField("Command", "sudo authors\nsudo show -u [user]\nsudo show -r [rank]\nsudo show -g\nsudo give -a -u [user]\nsudo give -a -g\nsudo kick [user] [reson]\nsudo ban [user] [reson / time]\nsudo list -b\nsudo list -u\nsudo website", true)
        .addField("Description", " | Show all developer staff\n | Show all user stats\n | Show all rank parameters\n | Show all guild parameters \n | Give you user avatar\n | Give you guild icon\n | Kick user by reson\n | Ban user by reson and time\n | Show bans count\n | Show users count\n | Show Studio's Website", true);

    message.channel.send(embed);
}