/*CMD
  command: /onsuc
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

var id = User.getProperty("id")
HTTP.get( {
        url: "https://full2sms.in/status_order.php?order_id="+id+"",
success: "/onSuc1"
      } )
