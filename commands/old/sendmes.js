const Discord = require("discord.js");
exports.run = (client, message, args) => {
    var plik = require('./json/'+args[0]+'.json');

    var embed = new Discord.RichEmbed()
        .setTitle(plik.title)
        .setColor(plik.color);
    
    desc();
    function desc() {
        if(plik.isDescription == "1") {
            embed.setDescription(plik.description);
        }
        image();
    }

    function image() {
        if(plik.isImage == "1") {
            embed.setImage(plik.imageUrl);
        }
        field();
    }

    function field() {
        if(plik.isFields == "1") {
            for(i=0; i<plik.fieldCount; i++) {
                embed.addField(plik.fields[i].fTitle, plik.fields[i].fDesc);
            }
        }
        message.channel.send(embed);
    }

    
}