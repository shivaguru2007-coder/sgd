/*CMD
  command: Instagram Likes/Views
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

var buttons = [ {title:"Likes",command:"/Likes"},{title:"Views",command:"/Views"}]

Bot.sendInlineKeyboard(buttons, "Instagram Like/Views \n Price:₹ 20\n\n Want To Buy Click Below✓")
