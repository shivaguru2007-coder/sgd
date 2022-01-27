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
Bot.sendMessage("Dont Try To Cheat 🙄")
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
      "🎊𝐓𝐑𝐀𝐍𝐒𝐀𝐂𝐓𝐈𝐎𝐍 𝐒𝐔𝐂𝐂𝐄𝐒𝐒\n\n🌺𝐀𝐌𝐎𝐔𝐍𝐓 : " +
      amount +
      
      "\n\n𝐔𝐏𝐃𝐀𝐓𝐄𝐃 𝐁𝐀𝐋𝐀𝐍𝐂𝐄: " +
      deposit.value().toFixed(2) +
      ""
  })

  Api.sendMessage({
    chat_id: "@PaymentChannel007",
    text:
      "<b>" +
      "🔋𝐍𝐄𝐖 𝐃𝐄𝐏𝐎𝐒𝐈𝐓 𝐅𝐑𝐎𝐌 𝐔𝐒𝐄𝐑!!\n\n▪️𝐒𝐓𝐀𝐓𝐔𝐒: 𝐃𝐄𝐏𝐎𝐒𝐈𝐓𝐄𝐃💳\n▪️ 𝐔𝐒𝐄𝐑 𝐈𝐃: " +
      user.telegramid +
      "\n🕵️𝐍𝐀𝐌𝐄: @" +
      user.username +
      "" +
      "\n\n▪️𝐀𝐌𝐎𝐔𝐍𝐓 : " +
      amount +
      "𝐑𝐒" +
      "\n🕒𝐁𝐀𝐋𝐀𝐍𝐂𝐄 𝐀𝐃𝐃𝐄𝐃✓" +
      "\n\n✅𝐁𝐎𝐓 @" +
      bot.name + "\n𝐓𝐑𝐀𝐍𝐒𝐀𝐂𝐓𝐈𝐎𝐍 𝐋𝐈𝐍𝐊\n https://full2sms.in/status_order.php?order_id="+id+
      "</b>",
    parse_mode: "html"
  })
  return
}
Bot.sendMessage("Unknown Error Occurred")
