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

\n\n*๐ Photo Caption = "+request.caption+"*",
parse_mode: "Markdown" })

Api.sendMessage({

   chat_id: "@",

   text: "*๐ฅณ New Deposit Through TRX\n\nFirst Name: ๐ค -  "+user.first_name+" \n๐ต๏ธUser Name - @"+user.username+"\n๐จโ๐ปUser Id - "+user.telegramid+"\n\nโ๏ธ Transaction Link - "+request.caption+"\n\nโณ Status -  Pending...\n\n๐ Bot: @"+bot.name+"\n\n๐ Payment Status: Verifying...*",parse_mode: "Markdown"

})

Bot.sendMessage("*๐ Your screenshot and Transaction Link successfully submitted.Please wait atleast 1 hour to receive 1 ๐BP*")
