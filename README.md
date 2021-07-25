# Coding Challenge Shopping Cart Prototyp

# Installing

install dependencies

* [npm](https://npmjs.com/): `npm install`

# Libraries Dependencies docs
* [Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [Bootswatch](https://github.com/thomaspark/bootswatch/)
* [jquery](https://github.com/jquery/jquery)
* [holderJS](https://github.com/imsky/holder) for placeholder images
* [Vanilla JS | mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript):

# Spezifikation

* [artiklel.js](./src/artikel.js): contains product data and category array (optional)
* [artiklel.js](./src/artikel.js): contains product data and category array (optional)
* 


# Features

The shopping cart covered in these vides is built with JavaScript, it also uses jQuery. 

The shopping cart, in it's finsihed form will be able to: 

*Add items to the cart
*Remove Items from the cart
*Clear all items from the cart
*Display the count of each item
*Total cost for each particular item
*Display the total number of items in the cart
*Display the total cost of all items in the cart
*Save the cart to local storage, persisting the cart between browsing sessions

# JavaScript Concepts covered

* Where to put the script tag, and why
* Varaibles and values
* Objects and Object Oriented Programming
* Funcitions, Arguments, and Parameters
* Arrays
* For loop 
* If statements
* Local Storage
* JSON
* The Module programming pattern
* The DOM (Document Object Model)
* jQuery
  * Selecting elements with jQuery
  * Using Events
  * Handling Forms
  * Writing to the DOM
  

*What the cart does not do*

This example is really focussed on frontend. The cart will not make purchases, or pull products off of existing e-commerce 
web sites. You could use this is as a starting point to building something larger, but features presented here are focussed
only on the frontend functionality of the cart. 

# API 

Creates a single variable shoppingCart and all methods are accessed from this. 

`addItemToCart(name, price, count)` 

Adds an item to the cart. If this item name already exists it increases the count that amount. 

`setCountForItem(name, count)` 

Sets the count for item of name in cart.

`removeItemFromCart(name)`

Removes 1 item of name from cart. 

`removeItemFromCartAll(name)` 

Removes all items of name from cart. 

`clearCart()`

Removes items from cart, empties the cart. 

`countCart()` 

returns the count of the cart. 

`totalCart()`

Returns the total cost of all items in the cart. 

`listCart()` 

Returns an array containing all items in the cart. Each item in the array contains the following properties: 

* name
* price
* count
* total
