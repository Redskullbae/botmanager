// variables
const colors = require("colors");
const Discord = require("discord.js");
ee = require("../../embed.json")


module.exports = async (client) => {
    client.on("messageCreate", async (message) => {
  
    if (!message.guild) return;
if (message.author.bot) return;


if (message.channel.id == "952581660837310484") {
     setTimeout(() => {
         message.delete().catch((e) => { console.log(String(e.stack).grey) })
     }, 1000);

     let suggestReplace = await message.channel.send({
         embeds: [
             new Discord.MessageEmbed()
                 .setAuthor({ name: `New Suggestion from ${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({dynamic: true})}`})
                 .setDescription("\n\nReact with *yes* if you like the suggestion, or with *no* if you don't like it.\n" + "\n>>> " +message.content )
                 .setFooter({ text: "Cybernetics", iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png' })
                 .setColor(ee.color)
         ]
         
     }).catch(e => { console.log(String(e.stack).grey) });
     await suggestReplace.react("<a:tick:927612765382782987>").then(() => { }).catch(e => { console.log(String(e.stack).grey) });
     await suggestReplace.react("<a:no:935038661303603210>").then(() => { }).catch(e => { console.log(String(e.stack).grey) })
    }
    })
}