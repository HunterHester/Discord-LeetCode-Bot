// const { data } = require('../commands/LeetCode/daily.js');
const { fetchDailyCodingChallenge } = require('./dailyquery.js');


const formatData = async () => {
    const jsonData = await fetchDailyCodingChallenge();
    const dailyTitle = jsonData.data.activeDailyCodingChallengeQuestion.question.title;
    const dailyURL = `https://leetcode.com${jsonData.data.activeDailyCodingChallengeQuestion.link}`;
    const date = jsonData.data.activeDailyCodingChallengeQuestion.date;
    const difficulty = jsonData.data.activeDailyCodingChallengeQuestion.question.difficulty;

    // console.log("jsonData: ", jsonData)
    // console.log(dailyTitle, dailyURL, data, difficulty);
    
    return { dailyTitle, dailyURL, date, difficulty };

}

module.exports = { formatData };