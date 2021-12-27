const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if(args[0] == "-u") {
        if(args[1] == "-id") {
            if(args[2] == "1") {
                let embed = new Discord.RichEmbed()
                    .setAuthor("ChangeLog Exec Studio Support 2.0", "https://i.imgur.com/0qActXW.png", "")
                    .setFooter("Request send by "+message.author.username)
                    .setColor(0xc01e1e)
                    .setThumbnail("https://i.imgur.com/aqyhN1x.png")
                    .addField("Wprowadzone zmiany", "1. Wprowadzono nowy prefix\n2. Zmieniono wygląd embedów\n3. Ujednolicono szatę graficzną całego bota\n4. Wprowadzono zapisywanie usuniętych wiadomości z serwera\n5. Dodano strukturę komęd taką jak w linuxsie\n6. Dodano możliwość pobierania avatarów za pomocą komendy\n**7. Usunięto Pandę Olę**\n8. Dodano miniaturki avatarów podczas sprawdzania informacji o użytkowniku i serwerze\n9. Stworzono serwer dla testerów i developerów jeśli ktoś jest zainteresowany pomocą przy projekcie to zapraszam do rozmowy z <@239008388544069633>\n10. Ustawiono zabezpieczenie aby usunięte wiadomości były zczytywane tylko z danego serwera");

                message.channel.send(embed);
            } else {
                let embed = new Discord.RichEmbed()
                    .setAuthor("ERROR MESSAGE REPORT", "https://i.imgur.com/nrcaCtf.png", "")
                    .setFooter("Request send by "+message.author.username)
                    .setColor(0xc01e1e)
                    .addField("ERROR ID: 102", "Invalid parameter");

                message.channel.send(embed);
            }
        }  else {
            let embed = new Discord.RichEmbed()
                .setAuthor("ERROR MESSAGE REPORT", "https://i.imgur.com/nrcaCtf.png", "")
                .setFooter("Request send by "+message.author.username)
                .setColor(0xc01e1e)
                .addField("ERROR ID: 103", "Invalid parameter");
    
            message.channel.send(embed);
        }
    } else {
        let embed = new Discord.RichEmbed()
            .setAuthor("ERROR MESSAGE REPORT", "https://i.imgur.com/nrcaCtf.png", "")
            .setFooter("Request send by "+message.author.username)
            .setColor(0xc01e1e)
            .addField("ERROR ID: 101", "Invalid parameter");

        message.channel.send(embed);
    }
}