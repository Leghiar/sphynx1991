const Discord = require('discord.js');
const bot = new Discord.Client();


var prefix = "$"

var colors = require('colors');

var colors = require('colors/safe');

bot.login(process.env.TOKEN)

bot.on('ready', function ()  {
  bot.user.setActivity("Command: $help");
  console.log('Connected'.green);
});

bot.on('message', function(message) {
  if (message.content.startsWith(prefix + 'info')) {
  message.delete;
  message.channel.send("", {
      embed: {
          color : 0xE15306,
  author :{name: message.author.name},
          description : "",
          title : "Information serveur",
          fields : [
              {
   name : '**Nom du serveur**',
   value : message.guild.name,
   inline : true
            },{
   name : '**Propriétaire**',
   value : message.guild.owner.user.tag,
   inline : true
 },{
    name :'**Niveau de Vérification**',
    value : message.guild.verificationLevel,
    inline : true
 },{
    name : '**Région**',
    value : message.guild.region,
    inline : true
 },{
   name : '**Nombre de Membres**',
   value : message.guild.memberCount,
   inline : true
 },{
   name : '**Humain**',
   value : message.guild.members.filter(m => m.user).size,
   inline : true
 },{
   name : '**Bot**',
   value : message.guild.members.filter(m => m.user.bot).size,
   inline : true
 }],
},
footer : {
   text : 'Leghiar'
          }
    });
}
})

bot.on('message', msg => {
  if (msg.content === prefix + 'help') {
    msg.channel.send('__Liste des commandes :__ \n $info \n $tt \n $fabriquant \n $cri \n $deut \n $met \n $vendu \n $quizz du sphynx');
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
    msg.channel.send('@everyone **deut à vendre ! :)**');
                                 }
	                    });

bot.on('message', msg => {
  if (msg.content === prefix + 'cri') {
    msg.channel.send('@everyone **cristal à vendre ! :)**');
                                 }
                            });


bot.on('message', msg => {
  if (msg.content === prefix + 'met') {
    msg.channel.send('@everyone **métal à vendre ! :)**');
                                 }
                            });

bot.on('message', msg => {
  if (msg.content === prefix + 'vendu') {
    msg.channel.send('**Adjugé vendu !**');
                                 }
                            });

bot.on('message', function(message) {
  if (message.content === prefix + 'quizz du sphynx') {
    message.channel.send('Qu-est ce qui a 4 pattes le matin, 2 l après-midi et 3 le soir ?');
  }
	});	

bot.on('message', function(message) {
    if (message.content === prefix + 'homme') {
  message.channel.send("Bravo ! tu viens de gagner une bouteille de rhum personnelle de Pharaon !");
                                                 }
 });

bot.on('message', function(message) {
    if (message.content === 'adieu l ami') {
  message.channel.send("Adieu l'ami puisse Anubis guider tes pas, dommage on t'aimait bien que ta flotte repose en paix et tes planètes en cendres.. :(");
                                                 }

  });

bot.on('message', function(message) {
    if (message.content === prefix + 'Pharaon') {
  message.channel.send("Vive Pharaon le défenseur des BOTS !!! ");
                                                 }	
  });
