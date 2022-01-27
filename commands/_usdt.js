/*CMD
  command: /usdt
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
[{title : "✅ PAID" , command : "/paidusdt"},
{title : "BACK ↩️" , command : "TrustWallet"}]
]

Bot.sendInlineKeyboard(button , "⚠️ If you send less than 1 USDT, your deposit would be ignored!\n\n1 USDT = 4 💎BP\n\n✅ Send the amount you want to deposit to the following address:\n\nTWSTgYVPbx6tULeNFGsZibqvSUASMCtYSx")
