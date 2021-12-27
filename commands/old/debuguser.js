const Discord = require("discord.js");
exports.run = (client, message, args) => {
    var user, dane, lmessage;

    user = args[0];
    if(user != null) {
        user = user.replace('<@', '');
        user = user.replace('>', '');
    }

    dane = client.users.get(user);

    var embed = new Discord.RichEmbed()
        .setTitle("Debug użytkownika: "+dane.username)
        .setColor("RED")
        .addField("ClientID", dane.id)
        .addField("AvatarID", dane.avatar)
        .addField("isBot", dane.bot);
        if(dane.lastMessage != null) {
            embed
        .addBlankField()
        .addField("LastMessageID", dane.lastMessageID)
        .addField("LastMessage", dane.lastMessage.content)
        .addField("LastMessage_Channel", dane.lastMessage.channel.name)
        .addField("LastMessage_Type", dane.lastMessage.channel.type);
    }
    
    message.channel.send(embed);
}