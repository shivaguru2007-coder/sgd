/*CMD
  command: /btc
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
[{title : "✅ PAID" , command : "/paidbtc"},
{title : "BACK ↩️" , command : "TrustWallet"}]
]

Bot.sendInlineKeyboard(button , "⚠️ If you send less than 0.000002 BTC, your deposit would be ignored!\n\n0.000002 BTC  == 1 BP 💎\n\n✅ Send the amount you want to deposit to the following address:\n\nbc1q2qsuc4m9hxhy9yzkddutxtywy5h2m4dpfzpwdh")
