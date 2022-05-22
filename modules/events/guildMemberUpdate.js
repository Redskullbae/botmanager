//IMPORTING NPM PACKAGES
const { MessageEmbed } = require('discord.js');
/**
 * STARTING THE MODULE WHILE EXPORTING THE CLIENT INTO IT
 * @param {*} client 
 */
module.exports = async (client) => {


    client.on("guildMemberUpdate", async (oM, nM) => {
        let boostLogChannelId = "939313902766931968"
        let boostLogChannel = nM.guild.channels.cache.get(boostLogChannelId);
        if(!boostLogChannel) boostLogChannel = await nM.guild.channels.fetch(boostLogChannelId).catch(()=>{}) || false;
        if(!boostLogChannel) return;
        
        let stopBoost = new MessageEmbed()
            .setFooter("ID: " + nM.user.id)
            .setTimestamp()
            .setAuthor(nM.user.tag, nM.user.displayAvatarURL({dynamic: true}))
            .setColor("RED")
            .setDescription(`<a:Server_Boosts:939317553879195649> ${nM.user} **stopped Boosting us..** <:cat_sad:946830356051546193>`)
        let startBoost = new MessageEmbed()
            .setFooter("ID: " + nM.user.id)
            .setTimestamp()
            .setAuthor(nM.user.tag, nM.user.displayAvatarURL({dynamic: true}))
            .setColor("GREEN")
            .setDescription(`<a:Server_Boosts:939317553879195649> ${nM.user} **has boosted us!** <a:Light_Saber_Dancce:944237983912063016>`)
        //if he/she starts boosting
        if(!oM.premiumSince && nM.premiumSince) {
            boostLogChannel.send({embeds: [startBoost]}).catch(console.warn);
            //send the MEMBER a DM
            nM.send("❤️ Thank you for Boosting our Server!!\n\n❤️ ***We really appreciate it!***").catch(console.warn)
        }
        //if he/she stops boosting
        if(oM.premiumSince && !nM.premiumSince) {
            boostLogChannel.send({embeds: [stopBoost]}).catch(console.warn)
        }
    });
  
}

