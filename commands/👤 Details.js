/*CMD
  command: 👤 Details
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

 var balance = Libs.ResourcesLib.userRes("balance")
Bot.sendMessage("*😎User             = "+user.first_name+"\n🌹 Username  = @"+user.username+"\n🥰 Balance      = "+balance.value().toFixed(2)+"₹*")
