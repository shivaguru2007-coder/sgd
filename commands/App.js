/*CMD
  command: App
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
[{title : "☘️ TronLink Pro" , command : "TronLink"}],

[{title : "♨️ Trust Wallet" , command : "TrustWallet"}],

[{title : "Back ↩", command : "/deposit"}]
]

Bot.sendInlineKeyboard(button, "_Select the app in which you want to pay your payment_")
