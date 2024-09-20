# Discord LeetCode Bot

The Discord Leetcode bot queries the LeetCode GraphQL API to fetch and return the latest daily challenge directly into your Discord server. This bot is designed to help users stay consistent with their coding practice by providing them with the daily problem from LeetCode.
<img src="https://github.com/user-attachments/assets/4ccffb55-519a-4d20-84c9-9e5d82991412" width="400"/>


##



![Node.js Badge](https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=for-the-badge) ![Discord Badge](https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=fff&style=for-the-badge) ![GraphQL Badge](https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=fff&style=for-the-badge) ![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge) ![LeetCode Badge](https://img.shields.io/badge/LeetCode-FFA116?logo=leetcode&logoColor=fff&style=for-the-badge) ![Linux Badge](https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=000&style=for-the-badge)

## Requirements

* Node.js (v14.x or higher)
* A Discord bot token (create one from the [Discord Developer Portal](https://discord.com/developers/applications))
* LeetCode account (for accessing the daily challenges)

## Installation

1. Clone the repository `git clone git@github.com:HunterHester/Discord-LeetCode-Bot.git`
2. Install dependencies `npm install`
3. Setup environmental variables in a config.json file with the following (You will find these in the Discord Developer Portal):
```
"token": "TOKEN HERE",
"guildId": "GUILDID HERE",
"clientId": "CLIENTID HERE"
```
4. Run bot `node index.js`

## Usage 

The bot will post the daily challenge in whatever channel you specify automatically at Midnight UTC. You're also able to run the following commands:

* `/daily` Returns the daily challenge
* `/enroll` enrolls user into notifications
* `/unenroll` unenrolls user from notifications

## Future Implementations

I'd like to eventually add tracking for user's that are enrolled into the bots notifications so that they'll receive reminders if they haven't completed the daily and the daily is about to reset. 

I'd also like to make it so it will remind you when a new contest is about to happen and give you notifications regarding that as well.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any inquiries, please reach out to hunter.hester15@gmail.com.


