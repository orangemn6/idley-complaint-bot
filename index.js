require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content.includes("free1") && msg.content.includes("down")) {
    msg.reply('Free1 MAY be down!');
    msg.channel.send('https://status.idleyhost.com');
  }
});

bot.on('message', msg => {
  if (msg.content.includes("!status")) {
    msg.reply('Here is node status!');
    msg.channel.send('https://status.idleyhost.com');
  }
});
