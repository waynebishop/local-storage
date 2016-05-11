// If a shopping cart does not exist in localstorage

if( localStorage.getItem('cart') == null ) {
	//Create the cart with empty array if cart is null 
	localStorage.setItem('cart', JSON.stringify( [] )); 
}
// Extract the cart and convert it back into an Object
var cart = JSON.parse( localStorage.getItem('cart') );

// Show the contents of the cart
console.log( cart );

//               Find All the .add-to-cart buttons
var addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add click event listeners to them all
for(var i=0; i<addToCartButtons.length; i++) {

	addToCartButtons[i].onclick = addToCart;
}

function addToCart()	{

	var productName = this.dataset.name;
	var productPrice = this.dataset.price;

	var product = {
		name: productName,
		price: productPrice
	} 

	cart.push(product);

	localStorage.setItem('cart', JSON.stringify(cart) );

}





