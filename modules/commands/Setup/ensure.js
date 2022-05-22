const Discord = require("discord.js");
const { theDB } = require("../../utilfunctions")
const { Roles } = require("../../../settings.json");
module.exports = {
    name: require("path").parse(__filename).name, 
    category: "Setup", 
    aliases: [ "savedb" ], 
    description: "", 
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            theDB(client, message.guild);
            await message.react("<:like:938142052087124008>").catch(() => {});
        } else {
            message.reply("<:no:935673265245028382> no Valid Permissions")
        }
    }
}