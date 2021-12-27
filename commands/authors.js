const Discord = require('discord.js');
exports.run = (client, message, args) => {
    
    var embed = new Discord.RichEmbed()
        .setAuthor("Authors list", "https://i.imgur.com/nPApFo4.png", "")
        .setFooter("Request send by "+message.author.username)
        .setColor(0xc01e1e)
        .setThumbnail("https://i.imgur.com/aqyhN1x.png")
        .addField("Developers", "<@239008388544069633>", true)
        .addField("Function", " | Main Developer", true)
        .addBlankField(false)
        .addField("Testers", "<@220257731834019840>\n<@302014268818063360>\n<@346632344326897670>", true)
        .addField("Function", " | Bug Hunter\n | Bug Hunter\n | Bug Hunter", true)
        .addBlankField(false)
        .addField("Patreons", "<@307986172456468492>\n<@301816505304219649>", true)
        .addField("Function", " | Project Patreon\n | Project Patreon", true);

    message.channel.send(embed);
}