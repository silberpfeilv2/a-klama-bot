const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('${client.guild.size} sunucu ${client.user.size} kullanıcı');
});

client.on("ready", () => {
  console.log("Ready");
  client.user.setActivity('svo!noldu yaz.', { type: 'WATCHING' });
});

client.on('message', msg => {
  if (msg.content === 'svo!noldu') {
    msg.reply('Taktığımız parça nedeniyle makinenin CPU Slotları hasarlanmış olup ardından SAS diskimizden dumanlar çıkarak makinemiz patlamış durumdadır. Şuan makine kullanılamaz durumdadır ve diğer 3 makineye de hasar vermiştir. Makinenin satıcısı hakkında CEZAİ işlemler başlatılmıştır. Verilerimiz gitti fakat yeniden yapacağız.');
  }
});

client.login('token');