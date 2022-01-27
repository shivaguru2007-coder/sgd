/*CMD
  command: /instafollow
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

let res = Libs.ResourcesLib.userRes("balance");
if(res.value() < 16){
  Bot.sendMessage("You don't have enough balance to continue.\n Back to Main Menu");
Bot.runCommand("menu");
}else{
 Bot.runCommand("/instaf");
var bts = Bot.getProperty("hello")
 Bot.setProperty("hello","Instagram Followers", "string")

}
