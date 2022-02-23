let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
m.reply(wait)
heum = await fetch(`https://xteam.xyz/randomimage/hentai?APIKEY=KurrXd`)
   if (!heum) throw json
    json = await heum.buffer()
   conn.sendFile(m.chat, json, 'Uwoghh Segss', wm, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['hentai']
handler.tags = ['hentai']

handler.command = /^(hentai)$/i
handler.premium = true

module.exports = handler
