/*CMD
  command: 💵 Deposit
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

var buttons = [
    
      { title: "PAYTM 💵", command: "PAYTM" },
      { title: "COINPAYMENT 🪙", command: "COINPAYMENT" },
   {title : "BACK ↩️" , command : "BACKPAYTM"}
  ]

  Bot.sendInlineKeyboard(buttons, "👮‍♂️*Select Deposit Method*")
