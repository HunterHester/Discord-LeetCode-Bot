const { SlashCommandBuilder } = require('discord.js');
const { fetchDailyCodingChallenge } = require('../../util/dailyquery.js'); 

const test = async () => {
    try {
        const jsonDATA = await fetchDailyCodingChallenge();
        console.log(jsonDATA.data.activeDailyCodingChallengeQuestion.question.title)
        const dailyTitle = jsonDATA.data.activeDailyCodingChallengeQuestion.question.title;
        const dailyURL = `https://leetcode.com${jsonDATA.data.activeDailyCodingChallengeQuestion.link}`;
    } catch (err) {
        console.error('Error fetching:', err)
    }
}

test();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('daily')
    .setDescription('Provides daily leetcode challenge URL'),
    async execute(interaction) {
        await interaction.reply(`Today's daily is ${dailyTitle}, URL: ${dailyURL} `)
    },
}