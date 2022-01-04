var itemContainer = document.querySelector(".item-container");


let arr=JSON.parse(localStorage.getItem("cart")) ||[];

    async function getData(){
    try{
    // let url ="https://www.themealdb.com/api/json/v1/1/random.php";
     let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=American";
        let res =await fetch(url);
        let data = await res.json();
        let total = data.meals;
        displayDish(total);
        console.log(total);
       
    }
    catch(err){
        console.log("Error:",err);
    }
  

}
getData();

    // var products = json.parse(localStorage.setItem("cartItems"))||[];

function displayDish(food){
    food.map(function(ele){
  
        var itemDiv = document.createElement("div");
        itemDiv.setAttribute("class","itemDiv");
    
    var itemPoster = document.createElement("img");
    var itemName = document.createElement("h2");
    
    var price = document.createElement("h2");
    var price1 = Math.floor( Math.random()*100+100);
    price.textContent = `Price-- ${price1}`;
    price.setAttribute("class","price");
    
    var cart  = document.createElement("h2");
    cart.style.color="red";
    cart.innerText ="Add to Cart";
    cart.setAttribute("class","cart");
  
    cart.addEventListener("click", function(event){
    
        let cartItem = {
                name:ele.strMeal,
                img:ele.strMealThumb,
                price: price1,
                count:count
                
        }
      

        addTocart(cartItem);
        console.log(cartItem)
       });
    
    itemPoster.src=ele.strMealThumb
    itemName.innerText=ele.strMeal;
    itemDiv.append(itemPoster,itemName,price,cart);
    itemContainer.append(itemDiv);
});


       }
     
     

  


var count =1;
var cartCount = document.querySelector("#cartCount");
function addTocart(cart){
    cartCount.textContent=`Cart ${count++}`;
    cartCount.style.color="red";
    arr.push(cart);
    localStorage.setItem("cart",JSON.stringify(arr));
}