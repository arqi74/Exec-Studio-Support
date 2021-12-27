const Discord = require("discord.js");
exports.run = (client, message, args) => {
    var embed = new Discord.RichEmbed()
        .setTitle("Pilny Komunikat!")
        .setColor("RED")
        .setDescription("Poszukujemy programistów!")
        .addField("Poszukujemy programistów następujących języków:", "JavaScript, C#, MySQL, PHP(obiektowe)")
        .addField("Kontakt:", "kontakt.lukaszewski@gmail.com")
        .addField("Po więcej szegółów prosimy zgłosić się na podany email.", ".")
        .setImage("https://discordapp.com/assets/ef555bf639a11bd65ae3065263788bba.png");
    message.channel.send(embed);
}