const Discord = require("discord.js");
exports.run = (client, message, args) => {
    var embed = new Discord.RichEmbed()
        .setTitle("Raport: Status serwerów")
        .setColor("RED")
        .setDescription("")
        .setAuthor("Exec Studio", "https://i.imgur.com/0fDMA0e.jpg")
        .addField("Serwer ID: 10001", "Status: ON, Ports: 4444, 7777, 80, 8080, 4545, Lok.: Warszawa, Ping: 16ms")
        .addField("Serwer ID: 10002", "Status: ON, Ports: 80, Lok.: Warszawa, Ping: 17ms")
        .addField("Serwer ID: 10003", "Status: ON, Ports: 80, Lok.: Berlin, Ping: 52ms")
        .addField("Serwer ID: 20001", "Status: OFF, Ports: 4444, 7777, 80, 8080 Lok.: Wrocław, Ping: n/a");
    message.channel.send(embed);
}