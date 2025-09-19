import { AttachmentBuilder, Client, GatewayIntentBits, ActivityType, GuildMember} from 'discord.js';
import { TOKEN, TARGET_USER_ID, TARGET_USER_ID2, TARGET_USER_ID3, SELF, SELFPT2} from './config.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('To hunter and deigo yaoi', { type: ActivityType.Listening});
});

client.on('messageCreate', async(message) => {

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

  if (message.author.id === SELF || message.author.id === SELFPT2) {
    // message.channel.send(`You so tuff and handsome twin!`);
    console.log(message.author.username, "Chatted")
  }
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

  const pic = "https://images.pexels.com/photos/33753958/pexels-photo-33753958.jpeg";
  if (content.includes("!pic") && message.author.id === SELFPT2){ // only those i chose
    const user = await message.guild.members.fetch(message.author.id)
    user.setNickname("LOSER")
    const file = new AttachmentBuilder(pic); 
    message.channel.send({ files: [file] });
  }

  if (content.includes("!test") && message.author.id === SELFPT2){ // only those i chose
    const user = await message.guild.members.fetch(message.author.id)
    user.setNickname(null)
  }

  const banned = "https://tenor.com/view/gorilla-monke-monkey-spin-ape-gif-25078721"
  if (message.author.id === SELFPT2 && content.includes(banned)) {
    await message.delete();
    // Check text content
    const hasBannedLink = message.content.includes(banned);

    // console.log(message.guild.members.me.permissions.has('ModerateMembers')); debug logs
    // console.log('member:', message.member);
    const hasBannedAttachment = message.attachments.some(att => att.url === banned);

    if (hasBannedLink || hasBannedAttachment) {
      try {
        const member = await message.guild.members.fetch(message.author.id);
        await member.timeout(60000, 'Posted banned GIF');
        message.channel.send(`${message.author} has been timed out for 1 minute.`);
      } catch (err) {
        console.error('Failed to timeout member:', err);
      }
    }
  }

});

client.login(TOKEN);
