const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = class GitHubCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'github',
      aliases: ['gh', 'repo'],
      usage: 'github',
      description: 'Displays the link to shadow\'s GitHub repository.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('GitHub Link')
      .setThumbnail('https://raw.githubusercontent.com/sabattle/shadowBot/develop/data/images/shadow.png')
      .setDescription(oneLine`
        Click [here](https://github.com/sabattle/shadowBot) to to visit my GitHub repository!
        Please support me by starring ⭐ the repo, and feel free to comment about issues or suggestions!
      `)
      .addField('Other Links',
        'https://discord.gg/djs' +
        '[Support Server](https://discord.gg/AXMWU7A3j2)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
