const Discord = require('discord.js');
exports.run = (client, message, args) => {
    
    var embed = new Discord.RichEmbed()
        .setAuthor("Authors list", "https://i.imgur.com/nPApFo4.png", "")
        .setFooter("Request send by "+message.author.username)
        .setColor(0xc01e1e)
        .setDescription("http://exec.cf");

    message.channel.send(embed);
}