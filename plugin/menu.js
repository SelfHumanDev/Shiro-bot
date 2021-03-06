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
đ€ [NFQ BOT] đ€
Created Bye: @Drawl Nag

Hi, ${name} đ
Exp: ${exp}

Cara Tambah XP:
+1 Exp/pesan biasa
+10 Exp/command

đ Waktu: ${time}
đ Tanggal: ${week}, ${date}

${more.repeat(1000)}
â ââââââȘă Menu ăâȘâââ
â
â âă Xp ă â
â â„ ${_p}leaderboard [jumlah user]
â
â âă Command ă â
â â„ ${_p}menu
â â„ ${_p}help
â â„ ${_p}?
â
â âă Tutor BoT ă â
â â„ ${_p}tutorial
â
â âă Quotes ă â
â â„ ${_p}bucin
â â„ ${_p}pantun
â â„ ${_p}murothal
â â„ ${_p}quran
â
â âă Kerang ă â
â â„ ${_p}apakah
â â„ ${_p}kapankah
â â„ ${_p}kapan
â
â âă Others ă â
â â„ ${_p}qr <teks>
â â„ ${_p}stiker (caption)
â â„ ${_p}stiker <url>
â â„ ${_p}toimg (reply)
â â„ ${_p}ssweb <url>
â â„ ${_p}sswebf <url>
â â„ ${_p}google <pencarian>
â â„ ${_p}googlef <pencarian>
â â„ ${_p}readmore <teks>|<sembunyi>
â â„ ${_p}quran
â â„ ${_p}modApk
â
â âă Group ă â
â â„ ${_p}add [62xxxxxxxxx]
â â„ ${_p}promote [@tagmember]
â â„ ${_p}demote [@tagadmin]
â â„ ${_p}linkgrup
â â„ ${_p}pengumuman [text]
â â„ ${_p}hidetag [text]
â â„ ${_p}listonline
â â„ ${_p}kick @Member
â â„ ${_p}grouplist
â
â âă EXPERIMENTAL ă â
â â„ ${_p}jadibot [kode login jika ada / kosongin]
â â„ ${_p}berhenti
â â„ ${_p}getcode
â
â âă OWNER ă â
â â„ ${_p}bcgc <teks>
â â„ ${_p}setmenu <teks>
â â„ ${_p}deletechat (chat grup)
â â„ ${_p}deletechat group
â â„ ${_p}mutechat (chat grup)
â â„ ${_p}mutechat group
â
â âă IKLAN ă â
â â„ Instagram: @arpunchs
â â„ Github: https://github.com/Arya274/Arya-Bot
â
â âă Info Bot ă â
â â„ Name : NFQ BOT
â â„ Coded using *Nano* on Android \\w Termux
â â„ Request? Wa.me/6288235435804
â âââââ
â Advanced:
â  > return m
â
â âă NfQ BOT ăâ
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
