let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return conn.reply(m.chat, `🌟 𝙲𝙾𝙼𝙾 𝙴𝚁𝙴𝚂 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁 𝙽𝙾 𝚃𝙴 𝙿𝚄𝙴𝙳𝙾 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 😊`, m, fake, )
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}
await conn.reply(m.chat, `📎 *¡Enlace detectado!*\n\n*${await this.getName(m.sender)} 𝙲𝙰𝙶𝙰𝚂𝚃𝙴𝚂`, m, fake, )
if (!isBotAdmin) return conn.reply(m.chat, `🌼 𝙻𝙰 𝙱𝙾𝚃 𝙽𝙾 𝙴𝚂 𝙰𝙳𝙼 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝙰 𝙻𝙾𝚂 𝙸𝙽𝚃𝚁𝚄𝚂𝙾𝚂 😊`, m, fake, )
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return conn.reply(m.chat, `*¡Esta característica esta desactivada!*`, m, fake, )
}
return !0

}