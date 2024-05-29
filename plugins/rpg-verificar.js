import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')
if (user.registered === true) throw `😊 𝐘𝐚 𝐞𝐬𝐭𝐚𝐬 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨 𝐛𝐫𝐨𝐝𝐞𝐫 😊`
if (!Reg.test(text)) throw `*🌟 Formato incorrecto*\n\n🚩 Uso del comamdo: *${usedPrefix + command} nombre.edad*\n🍄 Ejemplo : *${usedPrefix + command}* ${name2}.18`
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw '💫 El nombre no puede estar vacío'
if (!age) throw '💫 La edad no puede estar vacía'
if (name.length >= 30) throw '⚠️ El nombre es demasiado largo' 
age = parseInt(age)
if (age > 100) throw '👴🏻 Wow el abuelo quiere jugar al bot'
if (age < 5) throw '👀 hay un bebé jsjsj'
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
global.db.data.users[m.sender].money += 600
global.db.data.users[m.sender].limit += 10
global.db.data.users[m.sender].exp += 245
global.db.data.users[m.sender].joincount += 5
let sn = createHash('md5').update(m.sender).digest('hex')
m.react('🌻') 
let botreg = `╭─⬣「 𝚄𝚂𝙸𝙰𝚁𝙸𝙾 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 」⬣
│  ≡◦ *🌟 𝙲𝙻𝙸𝙴𝙽𝚃𝙴 ∙* ${name}
│  ≡◦ *💫 𝙴𝙳𝙰𝙳 ∙* ${age} años
╰─⬣

╭─⬣「 𝚁𝙴𝙲𝙾𝙼𝙿𝙴𝙽𝚂𝙰 𝙶𝚁𝙰𝚃𝙸𝚂 」⬣
│  ≡◦ 10 𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 💎
│  ≡◦ 600 𝚂𝚊𝚔𝚞𝙲𝚘𝚒𝚗𝚜 💰
│  ≡◦ 245 𝙴𝚡𝚙 💸
│  ≡◦ 5 𝙼𝚘𝚗𝚎𝚢 🪙
╰━━━━━━━━━━━━⬣`
await m.reply(botreg)
await m.reply(`${sn}`)

//await conn.reply(m.chat, regbot, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: pp, thumbnailUrl: pp, title: 'Registrado 📩', }})

}
handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'reg', 'verificar', 'registrar'] 

export default handler