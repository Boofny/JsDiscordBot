import { Client, GatewayIntentBits, ActivityType } from 'discord.js';
import { TOKEN, TARGET_USER_ID, TARGET_USER_ID2, TARGET_USER_ID3} from './config.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('with my worm', { type: ActivityType.Playing });
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.author.id === TARGET_USER_ID) {
    message.channel.send(`Shut it hunter`);
  }

  if (message.author.id === TARGET_USER_ID2) {
    message.channel.send(`SHUT IT DEIGO NOW`);
  }
  if (message.author.id === TARGET_USER_ID3) {
    message.channel.send(`HIIIII julio :3 <3`);
  }
  const content = message.content.toLowerCase()
  if (content.includes("crack") || content.includes("Crack")){
    message.channel.send("We all craking julio and hunter")
  }
});

client.login(TOKEN);
