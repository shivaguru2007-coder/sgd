/*CMD
  command: Deposit and Play Game Bot Codes
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

var buttons = [ {title:"Buy",command:"/depogame"},{title:"back",command:"menu"}]

Bot.sendInlineKeyboard(buttons, "Deposit And Play Game Bot \n Price:₹ 20\n\n Want To Buy Click Below✓ \n Demo :@AdvanceGamebot ")
