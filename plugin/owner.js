let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
  ┍─────《 *Post-apocalype* 》─────
    ┃
    ┣━❍ Dibuat dengan  Bahasa Javascript
    ┣━❍ IG: https://Instagram.com/ray_anggaa
    ┣━❍ My GitHub Private
    ┣━❍ YT Angga Dwhiqy
    ┣━❍ request wa.me/6287836332838
    ┃
  ├─────《 *Donasi* 》─────
    ┃
    ┣━❍ *DANA/OVO*
    ┣━❍ 807836332838
    ┣━❍ *Pulsa*
    ┣━❍ 087836332838
    ┃
 └─────《 *Post-apocalypse* 》─────
 `.trim(), m)
}
handler.command = /^(owner)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

