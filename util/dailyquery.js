
const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql';

const DAILY_PROBLEM_QUERY = `
query questionOfToday {
    activeDailyCodingChallengeQuestion {
        date
        userStatus
        link
        question {
            acRate
            difficulty
            freqBar
            frontendQuestionId: questionFrontendId
            isFavor
            paidOnly: isPaidOnly
            status
            title
            titleSlug
            hasVideoSolution
            hasSolution
            topicTags {
                name
                id
                slug
            }
        }
    }
}
`

const fetchDailyCodingChallenge = async () => {
    console.log('Fetching daily coding challenge from LeetCode API.');

    const init = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query: DAILY_PROBLEM_QUERY })
    }

    const response = await fetch(LEETCODE_API_ENDPOINT, init)
    const jsonDATA = await response.json()
    // console.log(jsonDATA)
    return jsonDATA
    
}

module.exports= {fetchDailyCodingChallenge}