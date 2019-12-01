const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  if(message.guild.roles.find(role => role.name === "Host"))
  {
    let nick = args[0];

    let zoneEmbed = new Discord.RichEmbed()
    .setDescription("ZoneWars")
    .setColor("#e56b00")
    .addField("Nick Hosta", `<@${message.author.id}>`)
    .addField("Jak zagrać:", "1. Dodać osobę hostującą do znajomych")
    .addField(" ឵឵", "2. Wbić do lobby")
    .addField("Zasady:", "1. Zakaz używania trybu anonimowego")
    .addField(" ឵឵", "2. Zakaz teamowania z innymi drużynami")
    .addField(" ឵឵", "3. Nie trzymamy kogoś w strefie")
    .addField(" ឵឵", "4. Nie rollujemy miliona 90'tek na początku rundy, nie grajcie tylko pod hg, grasz po to, żeby ćwiczyć")
    .addField(" ឵឵", "5. Zakaz wyzywania")
    .addField(" ឵឵", "6. Zakaz trollowania")
    .addField(" ឵឵", "7. Zakaz startownia, tylko host może zacząć grę")
    .addField(" ឵឵", "8. Słuchać się osoby hostującej")

    let mxemoji = message.guild.emojis.find('name', "Mexico_Esports");

    let zoneChannel = message.guild.channels.find(`name`, "🌎zonewars");

    zoneChannel.send("@everyone")

    zoneChannel.send({embed: zoneEmbed}).then(embedMessage => {
      embedMessage.react(mxemoji);
    });

    return message.channel.send("zahostowano");
  }

}

module.exports.help = {
  name: "zonehost"
}
