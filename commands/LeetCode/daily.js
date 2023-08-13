const { SlashCommandBuilder } = require('discord.js');
const { fetchDailyCodingChallenge } = require('../../util/dailyquery.js'); 

const fetchData = async () => {
    try {
        const jsonDATA = await fetchDailyCodingChallenge();
        const dailyTitle = jsonDATA.data.activeDailyCodingChallengeQuestion.question.title;
        const dailyURL = `https://leetcode.com${jsonDATA.data.activeDailyCodingChallengeQuestion.link}`;
        return { dailyTitle, dailyURL };
    } catch (err) {
        console.error('Error fetching:', err);
        return null;
    }
};

// fetchData();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('daily')
    .setDescription('Provides daily leetcode challenge URL'),
    async execute(interaction) {
        const { dailyTitle, dailyURL } = await fetchData();

        if (dailyTitle && dailyURL) {
            await interaction.reply(`Today's daily is ${dailyTitle}, URL: ${dailyURL} `)
        } else {
            await interaction.reply("Failed to fetch daily challenge data.");
        }
        
    },
}