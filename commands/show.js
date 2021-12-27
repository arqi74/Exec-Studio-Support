const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if(args[0] == "-u") {
        let arg = args[1];
        if(arg != null) {
            arg = arg.replace('<', ''); // Basic start tag remove
            arg = arg.replace('@', ''); // Classic user nickname remove
            arg = arg.replace('!', ''); // Used nametag remove
            arg = arg.replace('>', ''); // Basic end tag remove
        }

        let user = client.users.get(arg);
        let embed = new Discord.RichEmbed()
            .setAuthor("Command Executed", "https://i.imgur.com/oq9ZuS3.png")
            .setFooter("Request send by "+message.author.username)
            .setColor(0xc01e1e)
            .setThumbnail("https://cdn.discordapp.com/avatars/"+user.id+"/"+user.avatar+".png")
            .addField("Parameter", "ID:\nUsername:\nDiscriminator:\nAvatarID:\nlastMessageID:\nBot:", true)
            .addField("Value", " | "+user.id+"\n | "+user.username+"\n | "+user.discriminator+"\n | "+user.avatar+"\n | "+user.lastMessageID+"\n | "+user.bot, true);
        message.channel.send(embed);
    } else if(args[0] == "-r") {

        let rank = args[1];
        if(rank != null) {
            rank = rank.replace('<@&', '');
            rank = rank.replace('>', '');
        }
    
        let dane = message.guild.roles.get(rank);
        let embed = new Discord.RichEmbed()
            .setAuthor("Command Executed", "https://i.imgur.com/oq9ZuS3.png")
            .setFooter("Request send by "+message.author.username)
            .setColor(0xc01e1e)
            .addField("Parameter", "Name:\nHEX Color:\nPerrmisions ID:\nUsers Count:", true)
            .addField("Value"," | "+dane.name+"\n | "+dane.color+"\n | "+dane.permissions+"\n | "+dane.members.size ,true);
            
        message.channel.send(embed);
    } else if(args[0] == "-g") {
        let g = message.member.guild;
        let embed = new Discord.RichEmbed()
            .setAuthor("Command Executed", "https://i.imgur.com/oq9ZuS3.png")
            .setFooter("Request send by "+message.author.username)
            .setColor(0xc01e1e)
            .setThumbnail("https://cdn.discordapp.com/icons/"+g.id+"/"+g.icon+".png")
            .addField("Parameter", "Name:\navailable:\nID:\nsplash:\nregion:\nmemberCount:\napplicationID:\nafkTimeout:\nafkChannelID:\nsystemChannelID:\nembedEnabled:\nverificationLevel:\nexplicitCounterFilter:\nmfaLevel:\njoinedTimestamp:\nownerID:\nrolesCount:\nchannelsCount:", true)
            .addField("Value", " | "+g.name+"\n | "+g.available+"\n | "+g.id+"\n | "+g.splash+"\n | "+g.region+"\n | "+g.memberCount+"\n | "+g.applicationID+"\n | "+g.afkTimeout+"\n | "+g.afkChannelID+"\n | "+g.systemChannelID+"\n | "+g.embedEnabled+"\n | "+g.verificationLevel+"\n | "+g.explicitCounterFilter+"\n | "+g.mfaLevel+"\n | "+g.joinedTimestamp+"\n | "+g.ownerID+"\n | "+g.roles.size+"\n | "+g.channels.size, true);
        
        message.channel.send(embed);
    } else {
        let embed = new Discord.RichEmbed()
            .setAuthor("ERROR MESSAGE REPORT", "https://i.imgur.com/nrcaCtf.png", "")
            .setFooter("Request send by "+message.author.username)
            .setColor(0xc01e1e)
            .addField("ERROR ID: 101", "Invalid parameter");

        message.channel.send(embed);
    }
}