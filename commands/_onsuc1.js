/*CMD
  command: /onsuc1
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

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

if (content == "Invalid Order id!") {
  Bot.sendMessage("*No Transaction Found!*")
  return
}
var res = JSON.parse(content)
var id = User.getProperty("id")
var balance = Libs.ResourcesLib.userRes("balance")
var amount = User.getProperty("amount")
var done = User.getProperty(id)
if (done == "ok"){
Bot.sendMessage("Dont Try To Cheat π")
return}
var suc = res.status
if (suc == "success") {
  deposit.add(+amount)
User.setProperty(id,"ok")
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "upload_photo"
})
  Api.sendPhoto({
    photo: "https://t.me/EMOJICHANNEL07/5",
    caption:
      "ππππππππππππ πππππππ\n\nπΊππππππ : " +
      amount +
      
      "\n\nπππππππ πππππππ: " +
      deposit.value().toFixed(2) +
      ""
  })

  Api.sendMessage({
    chat_id: "@PaymentChannel007",
    text:
      "<b>" +
      "ππππ πππππππ ππππ ππππ!!\n\nβͺοΈππππππ: ππππππππππ³\nβͺοΈ ππππ ππ: " +
      user.telegramid +
      "\nπ΅οΈππππ: @" +
      user.username +
      "" +
      "\n\nβͺοΈππππππ : " +
      amount +
      "ππ" +
      "\nππππππππ πππππβ" +
      "\n\nβπππ @" +
      bot.name + "\nπππππππππππ ππππ\n https://full2sms.in/status_order.php?order_id="+id+
      "</b>",
    parse_mode: "html"
  })
  return
}
Bot.sendMessage("Unknown Error Occurred")
