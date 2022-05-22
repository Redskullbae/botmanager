
/**
 * STARTING THE MODULE WHILE EXPORTING THE CLIENT INTO IT
 * @param {*} client 
 */
const guessNumbers = [];
 module.exports = async (client) => {
    
    //GUESS THE NUMBER
    client.on("messageCreate", async (message) => {
        
        let channelID = "873209073225592842" //873209073225592842
        let hostID = "717416034478456925" //717416034478456925
        let accessRoleID = "873208791963951125" // 873208791963951125
        const validNumbers = [13526, 6622, 4917, 17126, 7743, 1143, 13540, 5446, 1101, 8433, 19574, 18633, 15097, 2895, 19155, 10881, 9130, 8029, 5948, 12117]
        const STILLvalidNumbers = [6622, 4917, 17126, 7743, 9130, 5948, 12117]
        
        if(message.guild && message.channel.id == channelID){
            if(STILLvalidNumbers.includes(parseInt(message.content)) && !guessNumbers.includes(parseInt(message.content))){
                guessNumbers.push(parseInt(message.content));
                await message.pin().catch(() => {});
                await message.reply(`<@&${accessRoleID}> **The \`${validNumbers.length - STILLvalidNumbers.lnegth + guessNumbers.length}.\` / \`${validNumbers.length}\` Number was found!**\n\n> ${message.author} **__${message.author.tag}__ is the Winner!**\n*DM <@${hostID}> to redeem your price!*`).catch(() => {});
                await message.react("<a:tick:927612765382782987>").catch(() => {});             
                await message.react("<a:doggy_wink:943551646422691891>").catch(() => {});
                await message.react("<a:kekboom:943551729021120613>").catch(() => {});
                await message.react("<:stonks:943551791394619442>").catch(() => {});
                await message.react("<:like:938142052087124008>").catch(() => {});
            }
        }
    })
}
