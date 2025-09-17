import { Client, GatewayIntentBits, ActivityType} from 'discord.js';
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
    console.log(message.author.username, "Chatted")
  }

  if (message.author.id === TARGET_USER_ID2) {
    message.channel.send(`SHUT IT DEIGO NOW`);
    console.log(message.author.username, "Chatted")
  }
  
  if (message.author.id === TARGET_USER_ID3) {
    message.channel.send(`HIIIII julio :3 <3`);
    console.log(message.author.username, "Chatted")
  }

  // if (message.author.id === SELF) {
  //   message.channel.send(`You so tuff and handsome twin!`);
  //   console.log(message.author.username, "Chatted")
  // }
  const content = message.content.toLowerCase()
  if (content.includes("crack") || content.includes("Crack")){
    message.channel.send("We all craking julio and hunter")
  }

  if (content.includes("hunt")){
    if (message.author.id === TARGET_USER_ID){
      message.channel.send("Not you hunter");
    }
    message.channel.send(`${message.author}, Is in love with hunter for his money.`);
  }

});

client.login(TOKEN);
