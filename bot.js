const Discord = require('discord.js');
const cron = require('node-cron');
const archiver = require('archiver');
const axios = require('axios');
const fs = require('fs');

const config = require('./config.json');

const bot = new Discord.Client();
const token = config.token;
const channelId = config.channelId;
const folderPath = config.folderPath;

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`);
  
  // Schedule the task to run every 2 hours
  cron.schedule('0 */2 * * *', () => {
    createArchiveAndSend();
  });
});

bot.login(token);

function createArchiveAndSend() {
  const archiveName = `backup-${new Date().toISOString()}.zip`;
  const output = fs.createWriteStream(archiveName);
  const archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', () => {
    console.log(`Archive created: ${archiveName}`);
    sendArchive(archiveName);
  });

  archive.pipe(output);
  archive.directory(folderPath, false);
  archive.finalize();
}

async function sendArchive(archiveName) {
  try {
    const response = await axios.post('https://api.anonfiles.com/upload', fs.createReadStream(archiveName));
    const fileUrl = response.data.data.file.url.full;
    
    const channel = bot.channels.cache.get(channelId);
    channel.send(`Backup file: ${fileUrl}`);
    
    fs.unlinkSync(archiveName);
  } catch (error) {
    console.error('Error uploading archive:', error);
  }
}