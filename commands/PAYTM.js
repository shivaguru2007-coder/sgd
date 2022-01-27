/*CMD
  command: PAYTM
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Enter Amount To Deposit*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

//code Creator @swastikcoder99 Json._!/+
var rand = Libs.Random.randomInt(100, 100000)
User.setProperty("id", rand, "integer")
User.setProperty("re", null)
var amount = User.setProperty("amount", message, "integer")
var txt =
  "*🚀User = " +
  user.first_name +
  "\n💸Amout = " +
  message +
  "*\n*Order Id🚧 *= " +
  rand +
  ""
var button = [
  [
    {
      title: "Pay",
      url:
        "https://full2sms.in/accept_payment_api.php?token=4w5XszlcMIBgAWHU&amount=" +
        message +
        "&order_id=" +
        rand +
        ""
    }
  ],
  [{ title: "Check status", command: "/onSuc" }]
]
Bot.sendInlineKeyboard(button, txt, { is_reply: true })
