/*CMD
  command: /SOLDBUY
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var amount = Bot.getProperty("amount");
let res = Libs.ResourcesLib.userRes("balance");
var bts = Bot.getProperty("hello")


if(res.value()>20){

Bot.sendMessage("You Don't have enough balance to continue ");
Bot.runCommand("menu");
}else{

var hi = Libs.Random.randomInt(9999, 99999);

res.add(-amount);
Bot.sendMessage("You Have Purchased "+bts+". Owner Will verify Payment Corrospend to Your Order ID And payment Purchase ID.\n\nYour Order ID : "+hi+".\n Within 24 hours Owner will contact You. Paymrnt Channel @payouts_worlds");


Api.sendMessage({
chat_id:"@payouts_worlds",
text:"A new Item Has been Buyed \n Order ID : "+hi+"\n UserID :user"
})

}
