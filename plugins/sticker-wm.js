import {addExif} from '../lib/sticker.js';
const handler = async (m, {conn, text}) => {
  if (!m.quoted) throw '🌟 𝚀𝚄𝙴𝚁𝙸𝙳𝙾 𝙷𝚄𝙼𝙰𝙽𝙾 𝚃𝙴 𝙵𝙰𝙻𝚃𝙾 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁';
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) throw '🌟 𝚀𝚄𝙴𝚁𝙸𝙳𝙾 𝙷𝚄𝙼𝙰𝙽𝙾 𝚃𝙴 𝙵𝙰𝙻𝚃𝙾 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁';
    const img = await m.quoted.download();
    if (!img) throw '🌟 𝚀𝚄𝙴𝚁𝙸𝙳𝙾 𝙷𝚄𝙼𝙰𝙽𝙾 𝚃𝙴 𝙵𝙰𝙻𝚃𝙾 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁';
    stiker = await addExif(img, packname || global.packname, author || global.author);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {asSticker: true});
    else throw '*🥀 Ocurrió Un Error*';
  }
};
handler.help = ['wm <packname>|<author>'];
handler.tags = ['sticker'];
handler.command = /^take|robar|wm$/i;
export default handler;
