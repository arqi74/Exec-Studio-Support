const Discord = require("discord.js");
module.exports = (app, msg) => {
    if(msg.author.bot) return;
    if(msg.member.guild.id != app.serwerID) return;
    var embed = new Discord.RichEmbed()
        .setTitle("Message Saved!")
        .setColor(0xc01e1e)
        .setDescription("")
        .addField("Parameter", "Author:\nChannel:\nType:", true)
        .addField("Value", " | <@"+msg.author.id+">\n | "+msg.channel+"\n | "+msg.type, true)
        .setAuthor(msg.author.username+"#"+msg.author.discriminator, msg.author.avatarURL)
        .setTimestamp(msg.createdAt);

    if(msg.attachments.size > 0) {
        embed.setImage(msg.attachments.array()[0].proxyURL);
    }

    if(msg.content && msg.content.length > 0) 
        embed.addField("Content", msg.content);
        embed.addBlankField(false);

    app.channels.get(app.channelIDLog).send(embed);
};