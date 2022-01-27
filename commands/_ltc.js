/*CMD
  command: /ltc
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
[{title : "✅ PAID" , command : "/paidltc"},
{title : "BACK ↩️" , command : "TrustWallet"}]
]

Bot.sendInlineKeyboard(button , "⚠️ If you send less than 0.001 LTC, your deposit would be ignored!\n\n0.001 LTC = 1 💎BP\n\n✅ Send the amount you want to deposit to the following address:\n\nltc1qhs0f48czcyrvet9w5p87x3r8ds7ks3ynq34d67")
