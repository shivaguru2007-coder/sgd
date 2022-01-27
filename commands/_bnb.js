/*CMD
  command: /bnb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.deleteMessage({ message_id: request.message.message_id })
var button = [
[{title : "✅ PAID" , command : "/paidbnb"},
{title : "BACK ↩️" , command : "TrustWallet"}]
]

Bot.sendInlineKeyboard(button , "⚠️ If you send less than 0.0003 BNB, your deposit would be ignored!\n\n0.0003 BNB = 1 💎BP\n\n✅ Send the amount you want to deposit to the following address:\n\nbnb1rg3ykv69k52ha9ynq4paxgfdcyyarfukuzcvvf")
