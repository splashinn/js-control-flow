var data = require("./products.json")
var items = data['items'];


// Find all results that have 'kind' of 'shopping#product'

var shoppingProducts = 0;

for (i = 0; i < items.length; i += 1) {
	if (items[i]['kind'] === 'shopping#product') {
		console.log(items[i]);
		shoppingProducts += 1;
	}
}
console.log(shoppingProducts + ' items have the kind \'shopping#product\'.');


// Find all items with a 'backorder' availability in 'inventories'

var backorderedProducts = 0;

for (i = 0; i < items.length; i += 1) {
	if (items[i]['product']['inventories'][0]['availability'] === 'backorder') {
		console.log(items[i]);
		backorderedProducts += 1;
	}
}
console.log(backorderedProducts + ' items are backordered.');


// Find all items with more than one image link

var imageLinks = 0;

for (i = 0; i < items.length; i += 1) {
	if (items[i]['product']['images'].length > 1) {
		console.log(items[i]);
		imageLinks += 1;
	}
}
console.log(imageLinks + ' items have more than one image link.');


// Find all canon products in the items

var canonProducts = 0;

for (i = 0; i < items.length; i += 1) {
	if (items[i]['product']['brand'] === 'Canon') {
		console.log(items[i]);
		canonProducts += 1;
	}
}
console.log('There are ' + canonProducts + ' Canon products in the list of items.');


// Find all items that have the product author name 'eBay' and the brand 'Canon'

var ebayCanonProducts = 0;

for (i = 0; i < items.length; i += 1) {
	if (items[i]['product']['author']['name'] === 'eBay' && items[i]['product']['brand'] === 'Canon') {
		console.log(items[i]);
		ebayCanonProducts += 1;
	}
}
console.log(ebayCanonProducts + ' item has the product author name eBay and the brand Canon.');


// Print all the products with their brand, price, and an image link

for (i = 0; i < items.length; i += 1) {
	console.log((i + 1) + '.');
	console.log('Brand: '+ items[i]['product']['brand']);
	console.log('Price: $'+ items[i]['product']['inventories'][0]['price']);
	console.log('Image link: ' + items[i]['product']['images'][0]['link']);
}
