function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd
} = require("../command");
cmd({
  'pattern': 'nexus',
  'desc': "All About The Bot & Dev",
  'category': 'fun',
  'react': '💙',
  'filename': __filename
}, async (_0x1d77c6, _0x3bc605, _0x33505d, {
  reply: _0x149ecd
}) => {
  try {
    await _0x1d77c6.sendMessage(_0x33505d.chat, {
      'image': {
        'url': "https://i.ibb.co/W4xhtdW8/nexus-xmd.jpg"
      },
      'caption': "  *⟣────────────⟢*\n    *[ • Developer: 🔥 Nexus-xmd 🔥 ]*\n *⟣────────────•⟢*\n              \n      *⟣┈───────────────⟢*\n            🗂️ *REPOSITORY*\n       https://github.com/pkdriller/NEXUS-XMD\n      \n      *⟣┈───────────────•*\n            🔗 *PROJECT NAME*\n           NEXUS-XMD W.A BOT\n      \n      *⟣┈───────────────•*\n             👨‍💻 *DEVELOPER*\n     https://github.com/pkdriller\n       \n      *⟣┈───────────────•*\n             🧮 *RELEASE DATE*\n            20 April 2025 \n       \n      *⟣┈───────────────•*\n            📩 *SUPPORT GROUP* \n    https://chat.whatsapp.com/CP8daWdavnXF11826hxius      \n      *⟣┈───────────────•*\n           🎀 *SUPPORT CHANNEL*\n     https://whatsapp.com/channel/0029Vad7YNyJuyA77CtIPX0x * \n      *⟝┈───────────────⟞*\n        *⟣────────────•⟢*\n    ".trim()
    }, {
      'quoted': _0x3bc605
    });
  } catch (_0x175db9) {
    console.error(_0x175db9);
    _0x149ecd("❌ *An error occurred while fetching the family list. Please try again.*");
  }
});
