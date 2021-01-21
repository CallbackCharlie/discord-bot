const Discord = require('discord.js');
const database = require('/app/managers/database.js');

module.exports = {
    name: 'connect',
    description: 'Forces the bot to join a voice channel.',
    category: 'music',
    run: async (client, message, args, prefix) => {
        if (message.member.voice.channel) return await message.member.voice.channel.join();

        const invalidChannel = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle('Failed to Join')
                    .setDescription(`You need to join a voice channel before running this command.`)

        return await message.channel.send(invalidChannel);
    }
}