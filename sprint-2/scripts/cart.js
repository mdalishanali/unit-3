var itemContainer = document.querySelector(".item-container");



    let data  = JSON.parse(localStorage.getItem("cart"));
        console.log(data)

    data.map(function(dish){

        var itemDiv = document.createElement("div");
        itemDiv.setAttribute("class","itemDiv");
    
    var itemPoster = document.createElement("img");
    var itemName = document.createElement("h2");
    
    var price = document.createElement("h2");
    var price1 = Math.floor( Math.random()*100+100);
    price.textContent = `Price-- ${price1}`;
    price.setAttribute("class","price");
    
    var cart  = document.createElement("h2");
    cart.textContent="Click Here to Order"
    cart.style.color="white";
    cart.style.background="black"
    cart.setAttribute("class","cart");
    
    cart.addEventListener("click", function(event){
           orderNow(event);
       });
    
    itemPoster.src=dish.img;
    itemName.innerText=dish.name;
    itemDiv.append(itemPoster,itemName,price,cart);
    itemContainer.append(itemDiv);
        })
       function orderNow(event){
           window.location.href="checkout.html"
       }
   

// var small = document.createElement("p");
// small.textContent=sumTotal;
// small.append(itemContainer);


 
 


var cartCount = document.querySelector("#cartCount");
cartCount.textContent=`Count${count}`;