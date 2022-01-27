/*CMD
  command: /paidtrx
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

\n\n*🌁 Photo Caption = "+request.caption+"*",
parse_mode: "Markdown" })

Api.sendMessage({

   chat_id: "@",

   text: "*🥳 New Deposit Through TRX\n\nFirst Name: 👤 -  "+user.first_name+" \n🕵️User Name - @"+user.username+"\n👨‍💻User Id - "+user.telegramid+"\n\n⚙️ Transaction Link - "+request.caption+"\n\n⏳ Status -  Pending...\n\n🚀 Bot: @"+bot.name+"\n\n💈 Payment Status: Verifying...*",parse_mode: "Markdown"

})

Bot.sendMessage("*🌁 Your screenshot and Transaction Link successfully submitted.Please wait atleast 1 hour to receive 1 💎BP*")
