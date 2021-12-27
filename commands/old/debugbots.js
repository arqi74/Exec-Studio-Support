const Discord = require("discord.js");
exports.run = (client, message, args) => {
    var embed = new Discord.RichEmbed()
        .setTitle("Raport: Status botów")
        .setColor("RED")
        .setDescription("")
        .setAuthor("Exec Studio", "https://i.imgur.com/0fDMA0e.jpg")
        .addField("Panda Ola", "Status: ON, Port: 7777, SerwerID: 301829179845115905, ClientID: 502856204091916298, SerwerName: Strefa Graczy")
        .addField("Panda Ola", "Status: OFF, Port: 8001, SerwerID: 332096987904212993, ClientID: 502856204091916298, SerwerName: arwi74 Discord")
        .addField("Exec Studio | Cat Bot", "Status: OFF, Port: 8002, SerwerID: 332096987904212993, ClientID: 525340741497520132, SerwerName: arwi74 Discord")
        .addField("Martyna", "Status: OFF, Port: 8003, SerwerID: 332096987904212993, ClientID: 477100363707711521, SerwerName: arwi74 Discord")
        .addField("Martyna", "Status: ON, Port: 8004, SerwerID: 313712245173649409, ClientID: 477100363707711521, SerwerName: Noise Studio")
        .addField("Wiesław", "Status: ON, Port: 8005, SerwerID: 313712245173649409, ClientID: 418506366995660820, SerwerName: Noise Studio")
        .addField("Zbigniew", "Status: ON, Port: 8006, SerwerID: 313712245173649409, ClientID: 483319555083468800, SerwerName: Noise Studio")
        .addField("Exec Studio Helper", "Status: ON, Port: 8007, SerwerID: 362421445173649409, ClientID: 423339555083468811, SerwerName: Exec Studio")
        .addField("Exec Studio Support", "Status: ON, Port: 8008, SerwerID: 362421445173649409, ClientID: 423339555083468832, SerwerName: Exec Studio")
        .addField("Exec Studio Memer", "Status: ON, Port: 8009, SerwerID: 362421445173649409, ClientID: 423339555083468231, SerwerName: Exec Studio")
        .addField("Exec Studio Dev Tools", "Status: ON, Port: 8010, SerwerID: 362421445173649409, ClientID: 423623455083468811, SerwerName: Exec Studio");
    message.channel.send(embed);
}