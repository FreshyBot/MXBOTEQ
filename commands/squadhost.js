const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  if(message.guild.roles.find(role => role.name === "Host"))
  {
    let code = args[0];

    let squadEmbed = new Discord.RichEmbed()
    .setDescription("Squad Arena Custom")
    .setColor("#e56b00")
    .addField("Kod na customa", `${code}`)
    .addField("Zasady", "1. Można bić się na miejscu lądowania")
    .addField(" ឵឵", "2. Zakaz walki przed dojściem trzeciej strefy.")
    .addField(" ឵឵", "3. Zakaz używania trybu anonimowego")
    .addField(" ឵឵", "4. Zakaz teamowania z innymi drużynami")
    .addField("Hostuje", `<@${message.author.id}>`)

    let mxemoji = message.guild.emojis.find('name', "Mexico_Esports");

    let squadChannel = message.guild.channels.find(`name`, "🗝custom squad key");

	  squadChannel.send("@everyone")

    squadChannel.send({embed: squadEmbed}).then(embedMessage => {
      embedMessage.react(mxemoji);
    });

    return message.channel.send("zahostowano");
  }

}

module.exports.help = {
  name: "squadhost"
}
