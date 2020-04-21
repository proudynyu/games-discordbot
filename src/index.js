const Discord = require('discord.js');
const botWiki = require('./cmd.json');
const { prefix } = require('./config.json')

const client = new Discord.Client();

require('dotenv').config();

client.on('ready', () => {
  console.log(`Logged as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === `${prefix}cmd`) {
    msg.channel.send(`Usar ${prefix} antes dos comandos`);

    const cmds = Object.keys(botWiki).join(', ');

    msg.channel.send(cmds);
  }
});

client.on('message', msg => {
  if (msg.content === `${prefix}quest`){
    msg.channel.send(`${botWiki.quest}`);
  }
});

client.on('message', msg => {
  if (msg.content === `${prefix}poetics`){
    msg.channel.send(`${botWiki.poetics}`);
  }
});

client.on('message', msg => {
  if (msg.content === `${prefix}class`){
    msg.channel.send(`${botWiki.class}`);
  }
});

client.on('message', msg => {
  if (msg.content === `${prefix}dungeons`){
    msg.channel.send(`${botWiki.dungeons}`);
  }
});

client.on('message', msg => {
  if (msg.content === `${prefix}raids`){
    msg.channel.send(`${botWiki.raids}`);
  }
});

client.on('message', msg => {
  if (msg.content === `${prefix}trials`){
    msg.channel.send(`${botWiki.trials}`);
  }
});


client.login(process.env.BOT_SECRET);