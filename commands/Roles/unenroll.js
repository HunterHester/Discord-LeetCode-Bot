const { SlashCommandBuilder } = require('discord.js');

//role id for leetcoders: 1281316704638468156
module.exports = {
    data: new SlashCommandBuilder()
    .setName('unenroll')
    .setDescription('Unenrolls in notifcations for the daily challenge.'),
    async execute(interaction) {
        const roleID = '1281316704638468156';
        const role = interaction.guild.roles.cache.get(roleID);
        const member = interaction.guild.members.cache.get(interaction.user.id);

        if(member.roles.cache.has(roleID)) {
            await member.roles.remove(roleID);
            return interaction.reply({ content: 'You have been unenrolled.', ephemeral: true })
        } else {
            return interaction.reply({ content: "You are currently not enrolled.", ephemeral: true })
        }
    },
};