/*CMD
  command: /lifafabot
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

let res = Libs.ResourcesLib.userRes("balance");
if(res.value() < 50){
  Bot.sendMessage("You don't have enough balance to continue.\n Back to Main Menu");
Bot.runCommand("menu");
}else{
 Bot.runCommand("/SOLDBUY");
var bts = Bot.getProperty("hello")
 Bot.setProperty("hello","Lifafa Bot", "string")

}  
