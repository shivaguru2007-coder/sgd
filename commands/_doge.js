/*CMD
  command: /doge
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
[{title : "✅ PAID" , command : "/paiddoge"},
{title : "BACK ↩️" , command : "TrustWallet"}]
]

Bot.sendInlineKeyboard(button , "⚠️ If you send less than 1 DOGE, your deposit would be ignored!\n\n1 DOGE = 3 💎BP\n\n✅ Send the amount you want to deposit to the following address:\n\nDBab5ksZdgJeYhzA82ww37S3gYr9GXFjxC")
