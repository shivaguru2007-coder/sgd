/*CMD
  command: /eth
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
[{title : "✅ PAID" , command : "/paideth"},
{title : "BACK ↩️" , command : "TrustWallet"}]
]

Bot.sendInlineKeyboard(button , "⚠️ If you send less than 0.00003 ETH, your deposit would be ignored!\n\n0.00003 ETH = 1 💎BP\n\n✅ Send the amount you want to deposit to the following address:\n\n0xaB0846b684fB035B3E72a1723971568ED9B8A2Ee")
