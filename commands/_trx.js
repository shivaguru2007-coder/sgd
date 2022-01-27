/*CMD
  command: /trx
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
[{title : "✅ PAID" , command : "/paidtrx"},
{title : "BACK ↩️" , command : "TrustWallet"}]
]

Bot.sendInlineKeyboard(button , "⚠️ If you send less than 1 TRX, your deposit would be ignored!\n\n1 TRON/TRX = 5rs\n\n✅ Send the amount you want to deposit to the following address:\n\nTXvnkaB7xhcxQGJwajZk3s5LiR49HsNssq")
