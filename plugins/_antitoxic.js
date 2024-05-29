const toxicRegex = /puto|puta|estupido|imbecil|mrd|verga|vrga|maricon/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[mconn.conn.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 5)) await m.reply('𝙽𝙾 𝙳𝙸𝙶𝙰𝚂 𝙴𝚂𝙾 𝙿𝙴𝚀𝚄𝙴𝙽̃𝙰 😊', false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`🌟 𝙲𝙰𝙶𝙰𝚂𝚃𝙴𝚂 😊`);
    user.banned = true;
    await mconn.conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
