const Discord = require("discord.js");

module.exports = {
  name: "achievement",
  aliases: [],
  description: "Minecraft styled achivement!",
  usage: "achievement <message>",
  run: async (client, message, args) => {
    //Start

    let text = args.join(" ")
    if(!text) return message.channel.send("`Please input a message!`")
    
    return message.channel.send({files: [{attachment:  `https://api.alexflipnote.dev/achievement?text=${text}`,name: 'ment.jpg'}]})

  }
};
