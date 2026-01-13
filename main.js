import { AttachmentBuilder, Client, GatewayIntentBits, ActivityType, GuildMember} from 'discord.js';
import { TOKEN, TARGET_USER_ID, TARGET_USER_ID2, TARGET_USER_ID3, SELF, SELFPT2} from './config.js';
import { joinVoiceChannel, getVoiceConnection } from '@discordjs/voice';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates
  ]
});

client.on('messageCreate', async (message) => {
  if (message.content === '!join') {
    const voiceChannel = message.member?.voice.channel;

    if (!voiceChannel) {
      message.reply('You must be in a voice channel first!');
      return;
    }

    // Join the channel
    joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator
    });

    message.reply(`Joined ${voiceChannel.name}!`);
  }
});

// client.login(process.env.DISCORD_TOKEN);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('others', { type: ActivityType.Listening});
});

client.on('messageCreate', async(message) => {

  if (message.author.bot) return;

  if (message.author.id === TARGET_USER_ID) {
    console.log(message.author.username, "Chatted")
  }

  if (message.author.id === TARGET_USER_ID2) {
    console.log(message.author.username, "Chatted")
  }
  
  if (message.author.id === TARGET_USER_ID3) {
    console.log(message.author.username, "Chatted")
  }

  if (message.author.id === SELF || message.author.id === SELFPT2) {
    console.log(message.author.username, "Chatted")
  }
  const content = message.content.toLowerCase()

  if (content.includes("hunt") && message.author.id === SELF){
    const user = await message.guild.members.fetch(TARGET_USER_ID)
  }

  // const pic = "https://images.pexels.com/photos/33753958/pexels-photo-33753958.jpeg";
  const pic = "https://t4.ftcdn.net/jpg/15/68/97/83/360_F_1568978321_JVKyawq58nNqd9mekQ4EEvm8MraRvVHZ.jpg"
  if (content.includes("!pic")){ // only those i chose
    const file = new AttachmentBuilder(pic); 
    message.channel.send({ files: [file] });
  }

  if (content.includes("!test") && message.author.id === SELFPT2){ // only those i chose
    const user = await message.guild.members.fetch(message.author.id)
    user.setNickname(null)
  }

  // const banned = "https://tenor.com/view/gorilla-monke-monkey-spin-ape-gif-25078721"
  const banned = "https://tenor.com/view/stank-dog-smells-gif-25356900"
  if (content.includes(banned)) { //hunter
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

//test
