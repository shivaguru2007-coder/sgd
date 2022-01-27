/*CMD
  command: Telegram Usa Account
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

var buttons = [ {title:"Buy",command:"/tgacc"},{title:"back",command:"menu"}]

Bot.sendInlineKeyboard(buttons, "Telegram USA Account  \n Price:₹ 4\n\n Want To Buy Click Below✓")
