/*CMD
  command: đĩ Deposit
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
    
      { title: "PAYTM đĩ", command: "PAYTM" },
      { title: "COINPAYMENT đĒ", command: "COINPAYMENT" },
   {title : "BACK âŠī¸" , command : "BACKPAYTM"}
  ]

  Bot.sendInlineKeyboard(buttons, "đŽââī¸*Select Deposit Method*")
