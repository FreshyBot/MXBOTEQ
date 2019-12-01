const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  if(message.guild.roles.find(role => role.name === "Host"))
  {
    let code = args[0];

    let soloEmbed = new Discord.RichEmbed()
    .setDescription("Solo Arena Custom")
    .setColor("#e56b00")
    .addField("Kod na customa", `${code}`)
    .addField("Zasady", "1. Można bić się na miejscu lądowania")
    .addField(" ឵឵", "2. Zakaz walki przed dojściem trzeciej strefy.")
    .addField(" ឵឵", "3. Zakaz używania trybu anonimowego")
    .addField(" ឵឵", "4. Zakaz teamowania")
    .addField("Hostuje", `<@${message.author.id}>`)

    let mxemoji = message.guild.emojis.find('name', "Mexico_Esports");

    let soloChannel = message.guild.channels.find(`name`, "🗝custom-solo-key");

    soloChannel.send("@everyone")

    soloChannel.send({embed: soloEmbed}).then(embedMessage => {
      embedMessage.react(mxemoji);
    });


    return message.channel.send("zahostowano");
  }

}

module.exports.help = {
  name: "solohost"
}
