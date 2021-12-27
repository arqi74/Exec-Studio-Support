const Discord = require('discord.js');
exports.run = (client, message, args) => {
    
    var embed = new Discord.RichEmbed()
        .setTitle("UPDATE 1.3.0 | Exec Studio Actions")
        .setDescription("Exec Studio Actions został aktualizowany dodatkowo szata graficzna botów została urozmaicona o nowe awatary oraz kolory EMBEDÓW")
        .setFooter("Aktualizacja z dnia: 21.01.2018")
        .setColor("RED")
        .setThumbnail("https://i.imgur.com/aqyhN1x.png")
        .addField("Wprowadzono:", "1. Nowe komendy dostępne pod -help\n 2. Nowy wygląd menu 'help'\n 3.Dodano sygnatury zespołu Discord pod którego szyldem tworzone są boty Exec Studio\n 4. Pandzia przestała reagować na wiadomości Exec Support Actions przez co nie będzie się wykrzaczać głupia maszyna :c\n 5. Poprawiono optymalizację bocika ale to już standard")
        .setAuthor("Exec Studio Support", "https://i.imgur.com/aqyhN1x.png");

    message.channel.send(embed);
}