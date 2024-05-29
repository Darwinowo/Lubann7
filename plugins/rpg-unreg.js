import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw '👑 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴, 𝚂𝙸 𝙽𝙾 𝚂𝙴 𝙻𝙾 𝚂𝙰𝙱𝙴 𝚄𝚂𝙴: #myns';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw '🌺 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙴𝚂 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 ❗';
  user.registered = false;
  m.reply(`🌟 𝚈𝙰 𝙽𝙾 𝙴𝚂𝚃𝙰𝚂 𝙴𝙽 𝙼𝙸 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂 💫`);
};
handler.help = ['', 'ister'].map((v) => 'unreg' + v + ' <numero de serie>');
handler.tags = ['xp'];
handler.command = /^unreg(ister)?$/i;
handler.register = true;
export default handler;

