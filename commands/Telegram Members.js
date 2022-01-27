/*CMD
  command: Telegram Members
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

var buttons = [ {title:"Buy",command:"/tgmembers"},{title:"back",command:"menu"}]

Bot.sendInlineKeyboard(buttons, "Telegram Members \n Price:₹ 30\n\n Want To Buy Click Below✓\n Demo: 1000 at ₹31 and 500 at ₹15")
