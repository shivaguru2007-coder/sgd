/*CMD
  command: Lifafa Maker Bot Codes With Money Send Panel
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

var buttons = [ {title:"Buy",command:"/lifafabot"},{title:"back",command:"menu"}]

Bot.sendInlineKeyboard(buttons, "Lifafa Maker Bot With Money Send Panel \n Price:₹ 50\n\n Want To Buy Click Below✓\nDemo: @LifafaMakerAutopayBot")
