const { SlashCommandBuilder } = require('discord.js');
const { formatData } = require('../../util/dailyreturn.js');
// const { fetchDailyCodingChallenge } = require('../../util/dailyquery.js');

// const fetchData = async () => {
//     try {
//         const jsonDATA = await fetchDailyCodingChallenge();
//         const dailyTitle = jsonDATA.data.activeDailyCodingChallengeQuestion.question.title;
//         const dailyURL = `https://leetcode.com${jsonDATA.data.activeDailyCodingChallengeQuestion.link}`;
//         const date = jsonDATA.data.activeDailyCodingChallengeQuestion.date;
//         const difficulty = jsonDATA.data.activeDailyCodingChallengeQuestion.question.difficulty;
//         // return { dailyTitle, dailyURL, date, difficulty };
        
//         //test for refactor, comment out later
//         console.log(dailyTitle, dailyURL, date, difficulty)
//     } catch (err) {
//         console.error('Error fetching:', err);
//         return null;
//     }
// };

// //test for refactor, comment out later
// fetchData();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('daily')
    .setDescription('Provides daily leetcode challenge URL'),
    async execute(interaction) {
        const { dailyTitle, dailyURL, date, difficulty } = await formatData();
        const roleID = '1281316704638468156';
        if (dailyTitle && dailyURL && date) {
            await interaction.reply(`<@&${roleID}> Here's the daily for ${date}:\n\n**${dailyTitle}**\n${difficulty}\n\n${dailyURL}`)
        } else {
            await interaction.reply("Failed to fetch daily challenge data.");
        }
        
    },
}