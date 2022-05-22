

/**
 * STARTING THE MODULE WHILE EXPORTING THE CLIENT INTO IT
 * @param {*} client 
 */
 module.exports = async (client) => {

    //GUESS THE NUMBER
    client.on("messageCreate", async (msg) => {
        if (msg.channel.id == "952581650666115082") {
            let emojis = ["<:Cybernetics:960770246577373204>", "🥰", "🤩", "😎", "😇", "😍", "🙃", "💝", "❤️", "👀", "🟢", "✅", "🔥", "🌊", "✨", "💫", "💯", "<:rainbowplanetvtg:936931809806147614>", "<:blob_xD:966312566433390633>", "👑", "💓", "💞", "🙏"];
            let emoji1 = emojis[Math.floor(Math.random() * emojis.length)];
            const index = emojis.indexOf(emoji1);
            if (index > -1) {
                emojis.splice(index, 1);
            }
            let emoji2 = emojis[Math.floor(Math.random() * emojis.length)];
            let emoji3 = emojis[Math.floor(Math.random() * emojis.length)];
            let emoji4 = emojis[Math.floor(Math.random() * emojis.length)];
            msg.react(emoji1).catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});
            msg.react(emoji2).catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});
            msg.react(emoji3).catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});
            msg.react(emoji4).catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});
        }
    })
}
