import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━━━━━❍𝐒𝐄𝐁𝐀𝐒 𝐁𝐎𝐓❍━━━━━┓
┃🐣𝐇𝐎𝐋𝐀 @user
┣━━━━━━━━━━━━━━━━━━
┃╭━━━━━━━━━━━━━━╮
┃┃𝐃𝐮𝐞𝐧̃𝐨 𝐃𝐞𝐥 𝐁𝐨𝐭:
┃┃wa.me/
┃┃𝐁𝐨𝐭 𝐎𝐟𝐢𝐜𝐢𝐚𝐥: 
┃┃wa.me/
┃┃𝐕𝐞𝐫𝐬𝐢𝐨𝐧: *2.1.0* 
┃┃𝐅𝐞𝐜𝐡𝐚: ${date}
┃┃𝐓𝐢𝐞𝐦𝐩𝐨 𝐀𝐜𝐭: ${uptime}
┃┃𝐏𝐚𝐢𝐬: ${nombreLugar} 
┃┃𝐂𝐢𝐮𝐝𝐚𝐝: ${ciudad}
┃┣━━━━━━━━━━━━━━╾•
┃┃🆙𝐋𝐞𝐯𝐞𝐥𝐮𝐩: ${level} 
┃┃🥇𝐄𝐱𝐩: ${exp}
┃┃⚔️𝐑𝐚𝐧𝐠𝐨: ${role}
┃┃💎𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞: ${limit} 
┃┃🐣𝐒𝐞𝐛𝐚𝐬𝐂𝐨𝐢𝐧𝐬: ${money}
┃┃🎰𝐌𝐨𝐧𝐞𝐝𝐚𝐬: ${joincount}
┃╰━━━━━━━━━━━━━━━╯
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑
┣━━━━━━━━━━━━━━━━━━━━
┣・🟢𝐞𝐧𝐚𝐛𝐥𝐞
┣・🔴𝐝𝐢𝐬𝐚𝐛𝐥𝐞
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐆𝐑𝐔𝐏𝐎𝐒
┣━━━━━━━━━━━━━━━━━━━━
┣・🍬𝐦𝐞𝐧𝐮𝐟𝐟
┣・🍬𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬𝐟𝐟
┣・🍬𝐤𝐢𝐜𝐤
┣・🍬𝐠𝐫𝐮𝐩𝐨
┣・🍬𝐩𝐫𝐨𝐦𝐨𝐭𝐞
┣・🍬𝐝𝐞𝐦𝐨𝐭𝐞
┣・🍬𝐝𝐞𝐦𝐨𝐭𝐞
┣・🍬𝐥𝐢𝐧𝐤
┣・🍬𝐭𝐨𝐝𝐨𝐬
┣・🍬𝐬𝐞𝐭𝐰𝐞𝐥𝐜𝐨𝐦𝐞
┣・🍬𝐬𝐞𝐭𝐛𝐲𝐞
┣・🍬𝐧𝐨𝐭𝐢𝐟𝐲
┣・🍬𝐟𝐚𝐧𝐭𝐚𝐬𝐦𝐚𝐬
┣・🍬𝐤𝐢𝐜𝐤𝐟𝐚𝐧𝐭𝐚𝐬𝐦𝐚𝐬
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄
┣━━━━━━━━━━━━━━━━━━━━
┣・🗺️𝐦𝐞𝐧𝐮𝐟𝐟
┣・🗺️𝐛𝐞𝐫𝐦𝐮𝐝𝐚
┣・🗺️𝐤𝐚𝐥𝐚𝐡𝐚𝐫𝐢
┣・🗺️𝐚𝐥𝐩𝐞𝐬
┣・🗺️𝐩𝐮𝐫𝐠𝐚𝐭𝐨𝐫𝐢𝐨
┣・🗺️𝐧𝐞𝐱𝐭𝐞𝐫𝐫𝐚
┣・🗺️𝐚𝐠𝐞𝐧𝐝𝐚𝐬𝐞𝐦𝐚𝐧𝐚𝐥
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐁𝐔𝐒𝐂𝐀𝐑 𝐕𝐒 𝐏𝐋𝐀𝐍𝐓𝐈𝐋𝐋𝐀𝐒
┣━━━━━━━━━━━━━━━━━━━━
┣・🔱𝐛𝐮𝐬𝐜𝐚𝐫𝐯𝐬𝐦𝐚𝐬𝐜
┣・🔱𝐛𝐬𝐦𝐬𝐚𝐜
┣・🔱𝐛𝐮𝐬𝐜𝐚𝐫𝐯𝐬𝐟𝐞𝐦
┣・🔱𝐛𝐬𝐟𝐞𝐦
┣・🔱𝐛𝐮𝐬𝐜𝐚𝐫𝐯𝐬𝐦𝐢𝐱𝐭𝐨
┣・🔱𝐛𝐬𝐦𝐢𝐱𝐭𝐨
┣・🔱𝐟𝐨𝐫𝐦𝐮𝐥𝐚𝐫𝐢𝐨
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐕𝐄𝐑𝐒𝐔𝐒 𝐅𝐄𝐌
┣━━━━━━━━━━━━━━━━━━━━
┣・💟𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟒
┣・💟𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟔
┣・💟𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟖
┣・💟𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟎
┣・💟𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟐
┣・💟𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟎𝟎
┣・💟𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝐯𝐬
┣・💟𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟒
┣・💟𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟔
┣・💟𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟖
┣・💟𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟎
┣・💟𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟐
┣・💟𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟎𝟎
┣・💟𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝐯𝐬
┣・💟𝐟𝐞𝐦𝟖𝐯𝐬𝟖
┣・💟𝐟𝐞𝐦𝟏𝟔𝐯𝐬𝟏𝟔
┣・💟𝐅𝐞𝐦𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝟒
┣・💟𝐅𝐞𝐦𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝟔
┣・💟𝐌𝐢𝐱𝐭𝐨𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝟒
┣・💟𝐌𝐢𝐱𝐭𝐨𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝟔
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐕𝐄𝐑𝐒𝐔𝐒 𝐌𝐀𝐒𝐂
┣━━━━━━━━━━━━━━━━━━━━
┣・💟𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟒
┣・💟𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟔
┣・💟𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟖
┣・💟𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟎
┣・💟𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟐
┣・💟𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟎𝟎
┣・💟𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝐯𝐬
┣・💟𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟒
┣・💟𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟔
┣・💟𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟖
┣・💟𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟎
┣・💟𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟐
┣・💟𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟎𝟎
┣・💟𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝐯𝐬
┣・💟𝐦𝐚𝐬𝐜𝟖𝐯𝐬𝟖
┣・💟𝐦𝐚𝐬𝐜𝟏𝟔𝐯𝐬𝟏𝟔
┣・💟𝐌𝐚𝐬𝐜𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝟒
┣・💟𝐌𝐚𝐬𝐜𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝟔
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐂𝐎𝐌𝐔𝐒/𝐀𝐏𝐊/𝐃𝐑𝐈𝐕𝐄𝐒/𝐃𝐙𝐍
┣━━━━━━━━━━━━━━━━━━━━
┣・🌟𝐬𝐩𝐚𝐦𝐀𝐩𝐤 / 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩
┣・🌟𝐬𝐩𝐚𝐦𝟏 /𝐜𝐨𝐦𝐮𝐧𝐢𝐝𝐚𝐝𝐞𝐬
┣・🌟𝐬𝐩𝐚𝐦𝟐 /𝐜𝐨𝐦𝐮𝐧𝐢𝐝𝐚𝐝𝐞𝐬
┣・🌟𝐫𝐜𝐮𝐫𝐬𝐨𝐬𝐝𝐳𝐧
┣・🌟𝐝𝐫𝐢𝐯𝐞𝐬𝐝𝐳𝐧
┣・🌟𝐝𝐳𝐧
┣・🌟𝐀𝐩𝐤𝐄𝐝𝐢𝐭𝐬
┣・🌟𝐃𝐫𝐢𝐯𝐞𝐄𝐝𝐢𝐭𝐬
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐗 𝐅𝐈𝐋𝐓𝐑𝐎𝐒
┣━━━━━━━━━━━━━━━━━━━━
┣・🍭𝐬𝐭𝐢𝐜𝐤𝐞𝐫 |𝐬 𝚒𝚖𝚊𝚐𝚎𝚗/𝚟𝚒𝚍𝚎𝚘
┣・🍭𝐬𝐭𝐢𝐜𝐤𝐞𝐫 |𝐬 𝚞𝚛𝚕 𝚓𝚙𝚐
┣・🍭𝐞𝐦𝐨𝐣𝐢𝐦𝐢𝐱 😍+🤗
┣・🍭𝐪𝐜 |𝚎𝚜𝚌𝚛𝚒𝚋𝚊 𝚞𝚗 𝚖𝚎𝚗𝚜𝚊𝚓𝚎
┣・🍭𝐬𝐜𝐢𝐫𝐜𝐥𝐞 |𝚌𝚒𝚛𝚌𝚞𝚕𝚘 𝚒𝚖𝚊𝚐𝚎𝚗
┣・🍭𝐬𝐞𝐦𝐨𝐣𝐢 |𝚎𝚖𝚘𝚓𝚒 𝚝𝚒𝚙𝚘 𝚎𝚖𝚘𝚓𝚒
┣・🍭𝐚𝐭𝐭𝐩 𝚝𝚎𝚡𝚝𝚘
┣・🍭𝐚𝐭𝐭𝐩𝟐 𝚝𝚎𝚡𝚝𝚘
┣・🍭𝐭𝐭𝐩 𝚝𝚎𝚡𝚝𝚘
┣・🍭𝐭𝐭𝐩𝟐 𝚝𝚎𝚡𝚝𝚘
┣・🍭𝐭𝐭𝐩𝟑 𝚝𝚎𝚡𝚝𝚘
┣・🍭𝐭𝐭𝐩𝟒 𝚝𝚎𝚡𝚝𝚘
┣・🍭𝐭𝐭𝐩𝟓 𝚝𝚎𝚡𝚝𝚘
┣・🍭𝐭𝐭𝐩𝟔 𝚝𝚎𝚡𝚝𝚘
┣・🍭𝐝𝐚𝐝𝐨
┣・🍭𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐦𝐚𝐫𝐤𝐞𝐫:𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛/𝚒𝚖𝚐
┣・🍭𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐟𝐢𝐥𝐭𝐞𝐫:𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛/𝚒𝚖𝚐
┣・🍭𝐜𝐬 : 𝐜𝐬𝟐
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐉𝐔𝐄𝐆𝐎𝐒
┣━━━━━━━━━━━━━━━━━━━━
┣・🎮𝐦𝐚𝐭𝐞𝐬
┣・🎮𝐩𝐩𝐭
┣・🎮𝐩𝐫𝐨𝐭𝐢𝐮𝐭𝐨 <@𝚃𝚊𝚐>
┣・🎮𝐩𝐫𝐨𝐬𝐭𝐢𝐭𝐮𝐭𝐚 <@𝚃𝚊𝚐>
┣・🎮𝐠𝐚𝐲𝟐 <@𝚃𝚊𝚐>
┣・🎮𝐥𝐞𝐬𝐛𝐢𝐚𝐧𝐚 <@𝚃𝚊𝚐>
┣・🎮𝐩𝐚𝐣𝐞𝐫𝐨 <@𝚃𝚊𝚐>
┣・🎮𝐩𝐚𝐣𝐞𝐫𝐚 <@𝚃𝚊𝚐>
┣・🎮𝐩𝐮𝐭𝐨 <@𝚃𝚊𝚐>
┣・🎮𝐩𝐮𝐭𝐚 <@𝚃𝚊𝚐>
┣・🎮𝐦𝐚𝐧𝐜𝐨 <@𝚃𝚊𝚐>
┣・🎮𝐦𝐚𝐧𝐜𝐚 <@𝚃𝚊𝚐>
┣・🎮𝐫𝐚𝐭𝐚 <@𝚃𝚊𝚐>
┣・🎮𝐧𝐞𝐠𝐫𝐨 <@𝚃𝚊𝚐>
┣・🎮𝐧𝐞𝐠𝐫𝐚 <@𝚃𝚊𝚐>
┣・🎮𝐟𝐞𝐚 <@𝚃𝚊𝚐>
┣・🎮𝐟𝐞𝐨 <@𝚃𝚊𝚐>
┣・🎮𝐬𝐢𝐧𝐩𝐨𝐭𝐨 <@𝚃𝚊𝚐>
┣・🎮𝐬𝐢𝐧𝐭𝐞𝐭𝐚𝐬 <@𝚃𝚊𝚐>
┣・🎮𝐬𝐢𝐧𝐩𝐢𝐭𝐨 <@𝚃𝚊𝚐>
┣・🎮𝐚𝐝𝐨𝐩𝐭𝐚𝐝𝐚 <@𝚃𝚊𝚐>
┣・🎮𝐚𝐝𝐨𝐩𝐭𝐚𝐝𝐨 <@𝚃𝚊𝚐>
┣・🎮𝐥𝐨𝐯𝐞
┣・🎮𝐥𝐨𝐬𝟏𝟎
┣・🎮𝐬𝐮𝐢𝐭𝐩𝐯𝐩
┣・🎮𝐬𝐥𝐨𝐭
┣・🎮𝐬𝐢𝐦𝐢𝐬𝐢𝐦𝐢
┣・🎮𝐩𝐫𝐞𝐠𝐮𝐧𝐭𝐚
┣・🎮𝐜𝐮𝐚𝐧𝐝𝐨
┣・🎮𝐬𝐡𝐢𝐩𝟓
┣・🎮𝐚𝐛𝐫𝐚𝐳𝐨
┣・🎮𝐬𝐡𝐢𝐩𝟐
┣・🎮𝐟𝐨𝐫𝐦𝐚𝐫𝐩𝐚𝐫𝐞𝐣𝐚
┣・🎮𝐯𝐞𝐫𝐝𝐚𝐝
┣・🎮𝐫𝐞𝐭𝐨
┣・🎮𝐜𝐚𝐧𝐜𝐢𝐨𝐧
┣・🎮𝐩𝐢𝐬𝐭𝐚
┣・🎮𝐫𝐮𝐥𝐞𝐭𝐚
┣・🎮𝐳𝐨𝐝𝐢𝐚𝐜
┣・🎮𝐨𝐝𝐢𝐨
┣・🎮𝐬𝐡𝐢𝐩
┣・🎮𝐬𝐨𝐫𝐭𝐞𝐨
┣・🎮𝐦𝐢𝐧𝐨𝐯𝐢𝐚
┣・🎮𝐦𝐢𝐧𝐨𝐯𝐢𝐨
┣・🎮𝐤𝐜𝐡𝐞𝐫𝐨
┣・🎮𝐤𝐜𝐡𝐞𝐫𝐨
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐈𝐌𝐀𝐆𝐄𝐍𝐄𝐒
┣━━━━━━━━━━━━━━━━━━━━
┣・🦋𝐠𝐨𝐤𝐮
┣・🦋𝐯𝐞𝐠𝐞𝐭𝐚
┣・🦋𝐥𝐨𝐫𝐚
┣・🦋𝐜𝐫𝟕
┣・🦋𝐬𝐩𝐢𝐝𝐞𝐫𝐦𝐚𝐧
┣・🦋𝐛𝐚𝐭𝐦𝐚𝐧
┣・🦋𝐡𝐞𝐥𝐥𝐨𝐤𝐢𝐭𝐭𝐲
┣・🦋𝐜𝐡𝐚𝐫𝐦𝐚𝐧𝐝𝐞𝐫
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒
┣━━━━━━━━━━━━━━━━━━━━
┣・🈴𝐩𝐥𝐚𝐲
┣・🈴𝐩𝐥𝐚𝐲.𝟏
┣・🈴𝐩𝐥𝐚𝐲𝟐.𝟐
┣・🈴𝐲𝐭𝐯.𝟐 
┣・🈴𝐲𝐭𝐚.𝟐 
┣・🈴𝐩𝐥𝐚𝐲𝐥𝐢𝐬𝐭 
┣・🈴𝐬𝐩𝐨𝐭𝐢𝐟𝐲 
┣・🈴𝐬𝐩𝐨𝐭𝐢𝐟𝐲𝐝𝐥
┣・🈴𝐭𝐢𝐤𝐭𝐨𝐤
┣・🈴𝐢𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦
┣・🈴𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞
┣・🈴𝐠𝐝𝐫𝐢𝐯𝐞
┣・🈴𝐭𝐰𝐢𝐭𝐭𝐞𝐫
┣・🈴𝐲𝐭𝐚
┣・🈴𝐲𝐭𝐯
┣・🈴𝐢𝐦𝐚𝐠𝐞𝐧
┣・🈴𝐢𝐚𝐢𝐦𝐚𝐠𝐞𝐧
┣・🈴𝐩𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭
┣・🈴𝐢𝐠𝐬𝐭𝐨𝐫𝐲
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒
┣━━━━━━━━━━━━━━━━━━━━
┣・⚜️𝐭𝐨𝐢𝐦𝐠
┣・⚜️𝐭𝐨𝐦𝐩𝟑
┣・⚜️𝐭𝐨𝐩𝐭𝐭
┣・⚜️𝐭𝐨𝐯𝐢𝐝𝐞𝐨
┣・⚜️𝐭𝐭𝐬
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 
┣━━━━━━━━━━━━━━━━━━━━
┣・✍️𝐦𝐞𝐧𝐬𝐚𝐣𝐞𝐟𝐚𝐥𝐬𝐨
┣・✍️𝐥𝐨𝐠𝐨𝐬
┣・✍️𝐥𝐨𝐠𝐨𝐜𝐨𝐫𝐚𝐳𝐨𝐧
┣・✍️𝐲𝐭𝐜𝐨𝐦𝐦𝐞𝐧𝐭
┣・✍️𝐡𝐨𝐫𝐧𝐲𝐜𝐚𝐫𝐝
┣・✍️𝐢𝐭𝐬𝐬𝐨𝐬𝐭𝐮𝐩𝐢𝐝
┣・✍️𝐩𝐢𝐱𝐞𝐥𝐚𝐫
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒
┣━━━━━━━━━━━━━━━━━━━━
┣・💌𝐩𝐢𝐫𝐨𝐩𝐨
┣・💌𝐜𝐨𝐧𝐬𝐞𝐣𝐨
┣・💌𝐟𝐫𝐚𝐬𝐞𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐜𝐚
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 
┣━━━━━━━━━━━━━━━━━━━━
┣・🔍𝐱𝐧𝐱𝐱𝐬𝐞𝐚𝐫𝐜𝐡
┣・🔍𝐠𝐨𝐨𝐠𝐥𝐞
┣・🔍𝐥𝐞𝐭𝐫𝐚
┣・🔍𝐰𝐢𝐤𝐢𝐩𝐞𝐝𝐢𝐚
┣・🔍𝐲𝐭𝐬𝐞𝐚𝐫𝐜𝐡
┣・🔍𝐩𝐥𝐚𝐲𝐬𝐭𝐨𝐫𝐞
┣・🔍𝐦𝐞𝐫𝐜𝐚𝐝𝐨𝐥𝐢𝐛𝐫𝐞
┣・🔍𝐩𝐨𝐫𝐧𝐡𝐮𝐛𝐬𝐞𝐚𝐫𝐜𝐡
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒
┣━━━━━━━━━━━━━━━━━━━━
┣・🛠️𝐜𝐥𝐢𝐦𝐚
┣・🛠️𝐚𝐟𝐤
┣・🛠️𝐨𝐜𝐫
┣・🛠️𝐜𝐚𝐥𝐜
┣・🛠️𝐝𝐞𝐥
┣・🛠️𝐰𝐡𝐚𝐭𝐦𝐮𝐬𝐢𝐜
┣・🛠️𝐪𝐫𝐜𝐨𝐝𝐞
┣・🛠️𝐭𝐫𝐚𝐝𝐮𝐜𝐢𝐫
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒
┣━━━━━━━━━━━━━━━━━━━━
┣・🍀𝐯𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐫
┣・🍀𝐮𝐧𝐫𝐞𝐠
┣・🍀𝐦𝐢𝐧𝐚𝐫
┣・🍀𝐛𝐮𝐲
┣・🍀𝐰𝐨𝐫𝐤
┣・🍀𝐦𝐞𝐧𝐝𝐢𝐠𝐚𝐫
┣・🍀𝐭𝐫𝐚𝐧𝐬𝐟𝐞𝐫
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐄𝐒 𝐎𝐖𝐍𝐄𝐑𝐒🤴
┣━━━━━━━━━━━━━━━━━━━━
┣・🪐𝐣𝐨𝐢𝐧 |𝚎𝚗𝚕𝚊𝚌𝚎
┣・🪐𝐮𝐧𝐞𝐭𝐞 |𝚎𝚗𝚕𝚊𝚌𝚎
┣・🪐𝐝𝐚𝐫𝐝𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬|𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┣・🪐𝐝𝐚𝐫𝐱𝐩|𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┣・🪐𝐝𝐚𝐫𝐠𝐚𝐭𝐚𝐜𝐨𝐢𝐧𝐬|𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 
┣・🪐𝐚𝐝𝐝𝐩𝐫𝐞𝐦|@𝚝𝚊𝚐/𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 
┣・🪐𝐚𝐝𝐝𝐩𝐫𝐞𝐦𝟐|@𝚝𝚊𝚐/𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┣・🪐𝐚𝐝𝐝𝐩𝐫𝐞𝐦𝟑|@𝚝𝚊𝚐/𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┣・🪐𝐚𝐝𝐝𝐩𝐫𝐞𝐦𝟒|@𝚝𝚊𝚐/𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 
┣・🪐𝐢𝐝𝐢𝐨𝐦𝐚 | 𝐥𝐚𝐧𝐠𝐮𝐚𝐠𝐞 
┣・🪐𝐜𝐚𝐣𝐚𝐟𝐮𝐞𝐫𝐭𝐞 
┣・🪐𝐜𝐨𝐦𝐮𝐧𝐢𝐜𝐚𝐫 |𝐛𝐜 𝚝𝚎𝚡𝚝𝚘
┣・🪐𝐛𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭𝐜𝐡𝐚𝐭𝐬 |𝐛𝐜𝐜 𝚝𝚎𝚡𝚝𝚘 
┣・🪐𝐜𝐨𝐦𝐮𝐧𝐢𝐜𝐚𝐫𝐩𝐯 𝚝𝚎𝚡𝚝𝚘
┣・🪐𝐛𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭𝐠𝐜 𝚝𝚎𝚡𝚝𝚘 
┣・🪐𝐜𝐨𝐦𝐮𝐧𝐢𝐜𝐚𝐫𝐠𝐫𝐮𝐩𝐨𝐬 𝚝𝚎𝚡𝚝𝚘
┣・🪐𝐛𝐨𝐫𝐫𝐚𝐫𝐭𝐦𝐩 | 𝐜𝐥𝐞𝐚𝐫𝐭𝐦𝐩 
┣・🪐𝐝𝐞𝐥𝐞𝐱𝐩 @𝚝𝚊𝚐
┣・🪐𝐝𝐞𝐥𝐨𝐩𝐭𝐢𝐦𝐮𝐬𝐜𝐨𝐢𝐧𝐬 @𝚝𝚊𝚐 
┣・🪐𝐝𝐞𝐥𝐝𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬 @𝚝𝚊𝚐
┣・🪐𝐫𝐞𝐢𝐧𝐢𝐜𝐢𝐚𝐫 | 𝐫𝐞𝐬𝐭𝐚𝐫𝐭 
┣・🪐𝐀𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐫 | 𝐮𝐩𝐝𝐚𝐭𝐞 
┣・🪐𝐚𝐝𝐝𝐩𝐫𝐞𝐦 | +𝐩𝐫𝐞𝐦 @𝚝𝚊𝚐
┣・🪐𝐝𝐞𝐥𝐩𝐫𝐞𝐦 | -𝐩𝐫𝐞𝐦 @𝚝𝚊𝚐
┣・🪐𝐥𝐢𝐬𝐭𝐚𝐩𝐫𝐞𝐦𝐢𝐮𝐦 | 𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦 
┣・🪐𝐚ñ𝐚𝐝𝐢𝐫𝐝𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬 @𝚝𝚊𝚐/𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┣・🪐𝐚ñ𝐚𝐝𝐢𝐫𝐱𝐩 @𝚝𝚊𝚐/𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┣・🪐𝐚ñ𝐚𝐝𝐢𝐫𝐜𝐨𝐢𝐧𝐬 @𝚝𝚊𝚐/𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┗━━━━━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '🧸 𝗠𝗲𝗻𝘂 𝗲𝗻𝘃𝗶𝗮𝗱𝗼 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗮𝗺𝗲𝗻𝘁𝗲, 𝘀𝗶 𝗻𝗼 𝘀𝗲 𝗲𝗻𝘃𝗶𝗼 𝗿𝗲𝗽𝗼𝗿𝘁𝗲𝗹𝗼 𝗰𝙤𝙣 𝙚𝙡 𝗰𝙧𝙚𝙖𝙙𝙤𝙧', m);
  }
};
handler.command = /^(menu|menú|menuu|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}