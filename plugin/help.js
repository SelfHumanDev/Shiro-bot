let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Arya274/Arya-Bot')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
  ┏━━━━━《 *Post-apocalypse* 》━━
  ┃
  ┣━━━━❬CREATOR❭
  ┣━❑ Name: dev city
  ┣━❑ Age: 20
  ┣━❑ Country: Indonesian
  
  ┣━━━━❬ABOUT❭
  ┣━❑ Hi kak, ${name} 😁
  ┣━❑ Exp kaka: ${exp}
  ┣━❑ Waktu: ${time}
  ┗━❑ Tanggal: ${week}, ${date}
  
  ${more.repeat(1000)}
  ┏━━━━━《 *Post-apocalypse* 》━━
  ┣━❑ ${_p}bcgc <teks>
  ┣━❑ ${_p}setmenu <teks>
  ┣━❑ ${_p}deletechat (chat grup)
  ┣━❑ ${_p}deletechat group
  ┣━❑ ${_p}mutechat (chat grup)
  ┣━❑ ${_p}mutechat group
  ┣━❑
  ┣━❑
  ┣━❑
  `.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
