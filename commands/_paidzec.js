/*CMD
  command: /paidzec
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

Api.sendPhoto({
chat_id: 1909946400, //edit admin tgid
photo: request.photo[0].file_id,
caption: "*⁉️ New User Deposited ZEC in Trust Wallet.\n\n👤 User =* ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n■User ID: "+user.telegramid+"\n\n*🌁 Photo Caption = "+request.caption+"*",
parse_mode: "Markdown" })

Api.sendMessage({

   chat_id: "@botcodes4",

   text: "*🥳 New Deposit Through ZEC\n\nFirst Name: 👤 -  "+user.first_name+" \n🕵️User Name - @"+user.username+"\n👨‍💻User Id - "+user.telegramid+"\n\n⚙️ Transaction Link - "+request.caption+"\n\n⏳ Status -  Pending...\n\n🚀 Bot: @"+bot.name+"\n\n💈 Payment Status: Verifying...*",parse_mode: "Markdown"

})

Bot.sendMessage("*🌁 Your screenshot and Transaction Link successfully submitted.Please wait atleast 1 hour to receive 1 💎BP*")
