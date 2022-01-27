/*CMD
  command: Camp Php
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

var buttons = [ {title:"Buy",command:"/campphp"},{title:"back",command:"menu"}]

Bot.sendInlineKeyboard(buttons, "Camp PHP \n Price:₹ 20\n\n Want To Buy Click Below✓")
