const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const cron = require('node-cron');
const { formatData } = require('./util/dailyreturn.js');



client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

//listener for interaction

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});


// connects bot and runs scheduled time events
client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`);

	//posts daily at midnight UTC
	try {
		cron.schedule('0 0 * * *', async () => {
		const { dailyTitle, dailyURL, date, difficulty } = await formatData();
		const channel = client.channels.cache.get('1136475268513538050');
		const roleID = '1281316704638468156';

		channel.send(`<@&${roleID}> Here's the daily for ${date}:\n\n**${dailyTitle}**\n${difficulty}\n\n${dailyURL}`)
	}, {
		timezone: "UTC"
	});
} catch (error) {
		console.error(error);
	}

});

client.login(token);