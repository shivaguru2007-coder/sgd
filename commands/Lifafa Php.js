/*CMD
  command: Lifafa Php
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

var buttons = [ {title:"Buy",command:"/lifafaphp"},{title:"back",command:"menu"}]

Bot.sendInlineKeyboard(buttons, "Lifafa PHP \n Price:₹ 35\n\n Want To Buy Click Below✓\n Demo: http://Legend-Tech.xyz")
