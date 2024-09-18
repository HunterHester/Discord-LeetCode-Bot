const { SlashCommandBuilder } = require('discord.js');

//role id for leetcoders: 1281316704638468156
module.exports = {
    data: new SlashCommandBuilder()
    .setName('enroll')
    .setDescription('Enrolls in notifcations for the daily challenge.'),
    async execute(interaction) {
        const roleID = '1281316704638468156';
        const role = interaction.guild.roles.cache.get(roleID);
        const member = interaction.guild.members.cache.get(interaction.user.id);

        if(member.roles.cache.has(roleID)) {
            return interaction.reply({ content: 'You are already enrolled.', ephemeral: true })
        }

        await member.roles.add(roleID);
        return interaction.reply({ content: "You've been enrolled to receive notifications", ephemeral: true })
    },
};

