let data=JSON.parse(localStorage.getItem("cart"))

var order = document.querySelector("#order");

order.addEventListener("click", showAlert);

function showAlert(){
   alert("Your order is accepted..")
   setTimeout(function(){
       alert("thank you we got your order")
   },3000)
   setTimeout(function(){
       alert("Your order is being cooked")
   },8000)
   
   setTimeout(function(){
       alert("yor order is ready")
   },10000)
   setTimeout(function(){
       alert("out for dilivery")
   },12000)
 
   setTimeout(function(){
       alert("deliverd")
       window.location.href="index.html";
   },15000)
}