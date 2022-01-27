/*CMD
  command: /bch
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

Bot.sendInlineKeyboard(button , "⚠️ If you send less than 0.0002 BCH, your deposit would be ignored!\n\n0.0002 BCH = 1 💎BP\n\n✅ Send the amount you want to deposit to the following address:\n\nqzglft4lnjxy9apxzma6llhww4866wpj0y026tstpa")
