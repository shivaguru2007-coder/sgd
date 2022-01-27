/*CMD
  command: Instagram Followers
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Seller

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var buttons = [ {title:"Buy",command:"/instafollow"},{title:"back",command:"menu"}]

Bot.sendInlineKeyboard(buttons, "Instagram Followers \n Price:₹ 20\n\n Want To Buy Click Below✓\n1000 followers for ₹16,500 followers for ₹8")
