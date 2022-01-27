/*CMD
  command: /btt
  help: 
  need_reply: false
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
[{title : "✅ PAID" , command : "/paidbtt"},
{title : "BACK ↩️" , command : "TrustWallet"}]
]

Bot.sendInlineKeyboard(button , "⚠️ If you send less than 10 BTT, your deposit would be ignored!\n\n10 BTT = 1 💎BP\n\n✅ Send the amount you want to deposit to the following address:\n\nTXvnkaB7xhcxQGJwajZk3s5LiR49HsNssq")
