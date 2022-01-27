/*CMD
  command: /paiddoge
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

Api.sendPhoto({
chat_id: 1909946400, //edit admin tgid
photo: request.photo[0].file_id,
caption: "*⁉️ New User Deposited DOGE in Trust Wallet.\n\n👤 User =* ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n■User ID: "+user.telegramid+"\n\n*🌁 Photo Caption = "+request.caption+"*",
parse_mode: "Markdown" })

Api.sendMessage({

   chat_id: "@b",

   text: "*🥳 New Deposit Through DOGE\n\nFirst Name: 👤 -  "+user.first_name+" \n🕵️User Name - @"+user.username+"\n👨‍💻User Id - "+user.telegramid+"\n\n⚙️ Transaction Link - "+request.caption+"\n\n⏳ Status -  Pending...\n\n🚀 Bot: @"+bot.name+"\n\n💈 Payment Status: Verifying...*",parse_mode: "Markdown"

})

Bot.sendMessage("*🌁 Your screenshot and Transaction Link successfully submitted.Please wait atleast 1 hour to receive 3 💎BP*")
