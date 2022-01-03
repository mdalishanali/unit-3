var itemContainer = document.querySelector(".item-container");

    async function getData(){
    try{
    // let url ="https://www.themealdb.com/api/json/v1/1/random.php";
     let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian";
        let res =await fetch(url);
        let data = await res.json();
        displayDish(data);
        console.log(data);
    }
    catch(err){
        console.log("Error:",err);
    }
  

}
getData();

    // var products = json.parse(localStorage.setItem("cartItems"))||[];

function displayDish(food){
   for(var i=0; i<food.meals.length; i++){
    
    var itemDiv = document.createElement("div");
    itemDiv.setAttribute("class","itemDiv");

var itemPoster = document.createElement("img");
var itemName = document.createElement("h2");

var price = document.createElement("h3");
price.textContent = `Price ${Math.floor( Math.random()*100+100)}`;
price.setAttribute("class","price");

var cart  = document.createElement("h2");
cart.style.color="red";
cart.innerText ="Add to Cart";
cart.setAttribute("class","cart");

cart.addEventListener("click", function(event){
       showCart(event);
   });

itemPoster.src=food.meals[i].strMealThumb;
itemName.innerText=food.meals[i].strMeal;
itemDiv.append(itemPoster,itemName,price,cart);
itemContainer.append(itemDiv);

   }
 
 

}
var count =1;
var cartCount = document.querySelector("#cartCount");
function showCart(event){
    
   console.log(count++);

   cartCount.textContent=`Cart${count++}`;
   cartCount.style.color="red";

   
}