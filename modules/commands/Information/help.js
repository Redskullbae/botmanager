const Discord = require("discord.js");
const { swap_pages2 } = require("../../utilfunctions")
const { Roles } = require("../../../settings.json");
module.exports = {
    name: "help", 
    category: "Information", 
    aliases: ["h", "commandinfo", "cmds", "cmd", "halp"],
    description: "Returns all Commmands, or one specific command", 
    run: async (client, message, args, prefix) => {
        
        var embed1 = new Discord.MessageEmbed()
        .setColor("#90EE90")
        .setAuthor({ name: 'Cybernetics Development | #GENERAL', iconURL: message.guild.iconURL({dynamic: true}), url: 'https://cyberdev.tk' })
        .setDescription('\`,help\` | \`,invite @BOT\` | \`,ping\` | \`,uptime\` | \`,howtopay\` | \`,howtoorder\` |\n\`,owner @Bot\` | \`,bots @USER\` | \`,botdetails @BOT\` | \`,paymentinfo @BOT\` |\n\`,translate\` | \`,modifybot\` | \`,sendmessage\`')
        .setFooter({ text: 'Edited with ❤️ by Radiant#1106'});

    var embed2 = new Discord.MessageEmbed()
        .setColor("#90EE90")
        .setAuthor({ name: 'Cybernetics Development | #STAFF', iconURL: message.guild.iconURL({dynamic: true}), url: 'https://cyberdev.tk' })
        .setDescription('\`,rank @User\` | \`,leaderboard [Days]\` | \`,close\` | \`,setradiant\` | \`,howtopay\` | \`,setmod\` |\n\`,setimportant\` | \`,setfinished\` | \`,setbot\` | \`,addticket @User\` |\n\`,removeticket @User\` | \`,createbot\` | \`,cancelcreation\`')
        .setFooter({ text: 'Edited with ❤️ by Radiant#1106'});

    var embed3 = new Discord.MessageEmbed()
        .setColor("#90EE90")
        .setAuthor({ name: 'Cybernetics Development | #MANAGEMENT', iconURL: message.guild.iconURL({dynamic: true}), url: 'https://cyberdev.tk' })
        .setDescription('\`,addbot <@USER> <@Bot <BOTTYPE>\` | \`,removebot <@USER> <@Bot>\` | \`,changebot <@USER> <@Bot> <BOTTYPE>\` | \`,setneworiginalbot\` | \`,payment <Time> <@User> <@Bot>\` | \`,invitepayment <Time> <@User> <@Bot>\` |\n\`,boostpayment <Time> <@User> <@Bot>\` | \`,removepayment <Time> <@Bot>\` | \`,closeall\` | \`,bm\` |\n\`,removeticket @User\` | \`,startbot <@Bot>\` | \`,restartbot <@Bot>\` | \`,stopbot <@Bot>\` | \`,removebothost <@Bot>\` | \`,recoverbothost <@Bot>\` | \`,forcestartbot <@Bot>\` | \`,forcerestartbot <@Bot>\` | \`,forcestopbot <@Bot>\` | \`,noguildremovebothost\`')
        .setFooter({ text: 'Edited with ❤️ by Radiant#1106'});
        
    swap_pages2(client, message, [
        embed1,
        embed2,
        embed3
    ]);
    }
}