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
{title : "â¨ï¸ TRX" , command : "/trx"},
{title : "ð¶ DOGE" ,command : "/doge"},
{title : "ðª BTC" ,command : "/btc"},

{title : "âï¸ LTC" , command : "/ltc"},
{title : "â¡ï¸ ZEC" ,command : "/zec"},
{title : "âï¸ BCH" , command : "/bch"},

{title : "ð« BNB" , command : "/bnb"},
{title : "ð§ ETH" , command : "/eth"},
{title : "ð BTT" , command : "/btt"},

{title : "ð¦ XRP" , command : "/xrp"},
{title : "ð¸ USDT" , command : "/usdt"},
{title : "â BSC" , command : "/bsc"},

{title : "ã°ï¸ DASH" , command : "/dash"},

{title : "BACK â©ï¸" , command : "App"}
]

Bot.sendInlineKeyboard(buttons , "ð _Welcome\nThis is Trust Wallet Deposit System, If you deposit from here, The Amount will be added in 10 Minutes_\n*1 TRX == 5rs\n1 DOGE == 4 rs\n0.000002 BTC  == 2 rs \n0.001 LTC == 2rsð\n0.0006 ZEC == 2rsð\n0.0002 BCH == 2rs  ð\n0.0003 BNB == 3rs ð\n0.00003 ETH == 2 rs ð \n10 BTT == 3 rs ð\n0.10 XRP  == 3 rs ð\n1 USDT == 40rs BP ð\n0.0003 BSC == 2rs ð\n0.0006 DASH == 2rs ð*\n\n_â ï¸ NOTE:_ ALL FUNDS WOULD BE CONVERTED TO BP ð\n\n*ð° IMPORTANT:* _SEND THE REQUIRED AMOUNT IN TRUST WALLET APP ONLY.IF YOU SEND THIS IN TRON LINK YOUR PAYMENT WILL BE IGNORED AND WE WILL REPLY YOU HERE_")
