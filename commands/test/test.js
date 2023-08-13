const { SlashCommandBuilder } = require('discord.js');

module.exports = { 
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Replies with "test Received"'),
    async execute(interaction) {
        await interaction.reply(`Test received: ${interaction.user.username}`)
    },
};