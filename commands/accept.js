const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if(args[0] == "-r") {
        var embed = new Discord.RichEmbed()
            .setAuthor("Regulamin serwera **Strefa Graczy**", "https://images-ext-1.discordapp.net/external/UKLe7hD3NHfrohtutocKCuxGxNoPCZ5voK7EWy2DXoY/https/cdn.discordapp.com/icons/301829179845115905/d4fcedcb2e5d2b2b4060abae3e70c620.png")
            .setColor(0xc01e1e)
            .addField("Postępowanie wstępne", "1. Dołączając na serwer użytkownik (odbiorca usług) ma obowiązek zaakceptować regulamin poprzez wpisanie odpowiedniego polecenia dozwolonego jedynie na kanale #regulamin.\n2. Otrzymanie rangi Marchew jest równoznaczna z zaakceptowaniem obecnego regulaminu.")
            .addField("Zasady obowiązyjące na serwerze", "1. Zamieszczania wiadomości oraz innych załączników dozwolone jest jedynie na kanałach przystosowanych do tego. Jeśli kategori naszych wiadomości nie odpowiada żaden z dostępnych kanałów można w ostateczności posłużyć się kanałem #polski-czat lub w razie wątpliwości prosimy o kontakt z personelem.\n2. Wszelkie pytania w szeroko pojętym znaczeniu proszenia o rangi będą skutkowały stosownymi karami nadawanymi przez personel.\n3. Wszelka mowa nienawiści oraz nadmierne wulgaryzmy nie będą tolerowane wiążą się z nimi bardzo konsekwentne kary.\n4. Zabrania się nadmiernego wysyłania wiadomości potencjalnie uważanych za spam na kanałach nieprzystosowanych do tego.\n5. Wszelkie reklamy niebędące zweryfikowane i zatwierdzone przez personel będą karane.\n6. Osoby wchodzące w skład personelu inaczej osób upoważnionych mają kategoryczny zakaz nadużywania swoich praw.\n7. Personel ma zakaz jakiejkolwiek faworyzacji użytkowników na serwerze.")
            .addBlankField()
            .addField("Pełny regulamin zamiesznony jest w linku poniżej", "https://goo.gl/iVwrCF")
            .addField("Aby akceptować regulamin wystarczy wpisać komendę podaną poniżej:", "sudo accept");
        message.channel.send(embed);
        message.delete(1000);
    }
    if(message.channel.id != "537307462206881802") { 
        var embed = new Discord.RichEmbed()
            .setAuthor("ERROR MESSAGE REPORT", "https://i.imgur.com/nrcaCtf.png", "")
            .setFooter("Request send by "+message.author.username)
            .setColor(0xc01e1e)
            .addField("ERROR ID: 101", "Invalid parameter")
            .addField("How to fix?", "Komenda **accept** służy tylko do akceptowania regulaminu i nie można jej używać na innych kanałach.");
        message.author.send(embed);
        return;   
    }
    var role = message.guild.roles.find(role => role.name === "Test");
    message.member.addRole(role);
    message.delete(1000);
}