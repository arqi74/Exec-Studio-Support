const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if(args[0] == "-a") {
        if(args[1] == "-u") {
            let arg = args[2];
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
                .setImage("https://cdn.discordapp.com/avatars/"+user.id+"/"+user.avatar+".png");

            message.channel.send(embed);
        } else if(args[1] == "-g") {
            let g = message.member.guild;
            let embed = new Discord.RichEmbed()
                .setAuthor("Command Executed", "https://i.imgur.com/oq9ZuS3.png")
                .setFooter("Request send by "+message.author.username)
                .setColor(0xc01e1e)
                .setImage("https://cdn.discordapp.com/icons/"+g.id+"/"+g.icon+".png");
                
            message.channel.send(embed);
        } else {
            let embed = new Discord.RichEmbed()
                .setAuthor("ERROR MESSAGE REPORT", "https://i.imgur.com/nrcaCtf.png", "")
                .setFooter("Request send by "+message.author.username)
                .setColor(0xc01e1e)
                .addField("ERROR ID: 102", "Invalid parameter");

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