const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.commands = new Collection();
//sets up route for commands folder and creates an array for these commands using fs.readdirSync()
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    //checks to see if 'data' and 'execute' property are contained with command file
    if('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else{
        console.log(`The command at ${filePath} is missing required "data" or "execute" property.`);
    }
};

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


// prints if bot is logged in
client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`);
});

client.login(token);