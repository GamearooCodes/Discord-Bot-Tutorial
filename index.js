require('dotenv').config();
const { Client, GatewayIntentBits } = require("discord.js");

let client = new Client({intents: [GatewayIntentBits.Guilds]});

client.on('ready', () => {
    console.log("Bot is online")
})
client.login(process.env.TOKEN);