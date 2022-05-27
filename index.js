const Discord = require("discord.js");
const { Collection, Client } = require("discord.js");
const config = require ("./json/config.json");

const client = new Client({
    allowedMentions: {
      parse: ["roles", "users"],
      repliedUser: true,
    },
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 65535,
  });

  module.exports = client; // Exporting our Client

// Global Variables
client.aliases = new Collection();
client.SlashCommands = new Collection();
client.interactions = new Collection();

// Requiring The Handler
require('./Handler/handler')(client);
require('./Handler/Buttons')(client);

  client.on("ready", async () => {
    console.log(`${client.user.tag} logged in at Time: ${Date()}`);
  });

  client.login(config.token);