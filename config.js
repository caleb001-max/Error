//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "Africa,lagos";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/lagos";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "2349065265516";
global.sudo = process.env.SUDO_NUMBERS || "2349065265516";
global.sudo = process.env.SUDO || "2349065265516";
global.owner = process.env.OWNER_NUMBER || "2349065265516";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349065265516";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349065265516";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUtQZ0M1Q1l4aFh2NEhsemd3ZktQQzl5Y2wzL2RYNkVpeVpFdFZHY21XTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSm9kelNVbFRqK0U3eHJ6RTdvRWVXaDIzaWc5ckxXdlpJOXNDRkROVEQwYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRU40UnllR2xzSnNKQzdmYm9iNVV4anBPUmRrQ3Y5alZMaElVMVdXc0U0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkdExUT0o0SG1iUWI3RWNDd3Z2WmtpZ2NvK1VGeWJhbEZwNld2b3ozSG40PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZNK1Evb1R6cFJQTG1hZkI3NEkwbG0wa2FTNnVMbTFPa2w4ajVLZkFSMUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikg4aVB1YTJuL1BPUkV1Z1pJUy9CVG5tbVJsNjhlNEQrQ3B5T2NvcnpaazQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NoYjZnUlhJS1hCMzVNdTFYZ3NmKzJzN1pSSDdCTUY4TmR3UXJTMkFYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnN2eGJpNWhuaEdIMm5kUldIcHB5MjRaL0VRWWRTQnZTNFRWdkRHQlkyOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPOExxWEhabTg1L2FYSlI3K0xHdzN6Ulc2cDN5c0lSV2NzL1BCYThWbE9CV2Z3SXRBUHdsQ0NKcFkxb0dDQnRTeGduZWcyeVNrc002RFpBcWNMSmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6IjRzRzhSVGxnT2ZIM3lhM2FnNEpyRTFEeEFwdENoNGVLQ1FxcUE2VFUxNXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA3ODkzNzA5N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMjFCMjFBRDNEOUZBMTE4OEIwMTU2MEIxNzhGREUxQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxMDQ0NDMwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MDc4OTM3MDk3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlGQjgyQ0U3QTA1ODhDMEVFMTYzRUEzMTc0ODhGQTA5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjEwNDQ0MzJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5NbkN6QWdpVGVtN3l6QUFUN0dtX1EiLCJwaG9uZUlkIjoiMTJhNzczZGYtZTFmMi00YjdlLWI0MTItYTQ3MWNjMDc0NTk5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVMZFZWWU83NDVZcERvaFk5V1htKzVqMGI4Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJueVR1QXFVSm5ZekVaL3RYa3FkcEZrV1gvK0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFdBNVc0WDIiLCJtZSI6eyJpZCI6IjIzNDgwNzg5MzcwOTc6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiT01FR0EgNDkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0piOGl0b0hFTDJiMUxRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBqek9PWXljL0RFVno1L3FRSmx0dG9hWmo1dVVsL3picHFjWjJyK3JRUUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlNM1h6b0xmSTlmSDd4MUJPYWZvaGFlclMwMlJEZEpoYjVVV01Rcm5TZktiNHhCSlFXem1RUmVJdjVjcm82elk3QWV4KzJkbnp0QVA5MENxcFFDOUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHK2gyNklYcmNyeURRazJObDNTVUJjVWlTcGhzS2V6NjV6WHNCNENEcUlFQU50Y0JGVlRUWmZodkRyTlZMME1uZkhIZndBQzNEZmZ0ZjJzeE9wc3hpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNzg5MzcwOTc6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVDQ4emptTW5Qd3hGYytmNmtDWmJiYUdtWStibEpmODI2YW5HZHEvcTBFQiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTA0NDQyN30===="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});


