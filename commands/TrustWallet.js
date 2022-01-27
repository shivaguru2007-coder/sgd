/*CMD
  command: TrustWallet
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: Choose The option where u want to pay

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.deleteMessage({ message_id: request.message.message_id })
var buttons = [
{title : "♨️ TRX" , command : "/trx"},
{title : "🐶 DOGE" ,command : "/doge"},
{title : "🪙 BTC" ,command : "/btc"},

{title : "⚔️ LTC" , command : "/ltc"},
{title : "⚡️ ZEC" ,command : "/zec"},
{title : "☘️ BCH" , command : "/bch"},

{title : "💫 BNB" , command : "/bnb"},
{title : "💧 ETH" , command : "/eth"},
{title : "🌀 BTT" , command : "/btt"},

{title : "💦 XRP" , command : "/xrp"},
{title : "💸 USDT" , command : "/usdt"},
{title : "⛓ BSC" , command : "/bsc"},

{title : "〰️ DASH" , command : "/dash"},

{title : "BACK ↩️" , command : "App"}
]

Bot.sendInlineKeyboard(buttons , "👋 _Welcome\nThis is Trust Wallet Deposit System, If you deposit from here, The Amount will be added in 10 Minutes_\n*1 TRX == 5rs\n1 DOGE == 4 rs\n0.000002 BTC  == 2 rs \n0.001 LTC == 2rs💎\n0.0006 ZEC == 2rs💎\n0.0002 BCH == 2rs  💎\n0.0003 BNB == 3rs 💎\n0.00003 ETH == 2 rs 💎 \n10 BTT == 3 rs 💎\n0.10 XRP  == 3 rs 💎\n1 USDT == 40rs BP 💎\n0.0003 BSC == 2rs 💎\n0.0006 DASH == 2rs 💎*\n\n_⚠️ NOTE:_ ALL FUNDS WOULD BE CONVERTED TO BP 💎\n\n*🔰 IMPORTANT:* _SEND THE REQUIRED AMOUNT IN TRUST WALLET APP ONLY.IF YOU SEND THIS IN TRON LINK YOUR PAYMENT WILL BE IGNORED AND WE WILL REPLY YOU HERE_")
