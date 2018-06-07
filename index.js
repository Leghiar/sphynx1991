const Discord = require('discord.js');
const bot = new Discord.Client();


var prefix = "$"

var colors = require('colors');

var colors = require('colors/safe');

bot.login(process.env.TOKEN)

bot.on('ready', function ()  {
  bot.user.setGame("Command: $help");
  console.log('Connected'.green);
});

bot.on('message', msg => {
  if (msg.content === prefix + 'help') {
    msg.channel.sendMessage('__Liste des commandes :__ \n \n $tt \n $fabriquant \n $cri \n $deut \n $met');
                                 }
	                    });

bot.on('message', msg => {
  if (msg.content === prefix + 'tt') {
  msg.channel.sendMessage('Création du bot le __07/06/2018__');
  console.log('Commande effectuée'.cyan);
                                       }
                     });

bot.on('message', msg => {
 if (msg.content === prefix + 'fabriquant') {
 msg.reply('__Ce bot a été créé par Leghiar (Karnak)__');
 console.log('Commande effectuée'.america);
                                                            }
                                          });


bot.on('message', msg => {
  if (msg.content === prefix + 'deut') {
    msg.channel.sendMessage('@everyone **deut à vendre ! :)**');
                                 }
	                    });

bot.on('message', msg => {
  if (msg.content === prefix + 'cri') {
    msg.channel.sendMessage('@everyone **cristal à vendre ! :)**');
                                 }
                            });


bot.on('message', msg => {
  if (msg.content === prefix + 'met') {
    msg.channel.sendMessage('@everyone **métal à vendre ! :)**');
                                 }
                            });

bot.on('message', msg => {
  if (msg.content === '$$vendu') {
    msg.channel.sendMessage('**Adjugé vendu !**');
                                 }
                            });

bot.on('message', msg => {
  if (msg.content === 'Quizz du Sphynx') {
    msg.channel.sendMessage('Qu-est ce qui a 4 pattes le matin, 2 l après-midi et 3 le soir ?')     }
                            });
