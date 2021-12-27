const Discord = require("discord.js");
exports.run = (client, message, args) => {
    var embed = new Discord.RichEmbed()
        .setTitle("Help Command: Exec Studio Support")
        .setColor("RED")
        .addField("debugrole", "Show Permissions ID, Users Count, HEX Color. Example: Support!debugrole @Test")
        .addField("debuguser", "Show all basic informations about user")
        .addField("sendmes", "Sending message from json files Example: sendmes 1 (this is add for tests)");
    
    message.channel.send(embed);
}