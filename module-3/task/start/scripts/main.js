console.log('Hello Emma');

// Single line Comment 

/* multiple line content 

Blah 
blah 
blah 

*/

var productName ="carrots";
let price = "0.30";
const quantity = 100;
let inStock = true;
const discountAmount = 0;

console.log(productName);
console.log(price);
console.log(quantity);
console.log(inStock);
console.log(discountAmount);
console.log('It worked!');

function showProductName(){
    console.log(productName);
}

showProductName();

function totalPrice(productPrice, productQuantity){
        console.log(productPrice * productQuantity)
}

totalPrice(5, 10);

/*
function checkAvailability(productInStock){
    console.log(productInStock);
}
*/
/*
checkAvailability(productInStock){
console.log(productInStock);
}
*/ 
var checkAvailability = productInStock => console.log(productInStock);

checkAvailability(5);

function checkNumber(number){
    if (number < 10) {
        return number + ' is less than 10';
    } else if (number < 20) {
        return number + ' is less than 20';
    } else if (number < 30) {
        return number + ' is less than 30';
    } else {
        return number + ' is not less than 30';
    }
}

console.log(checkNumber(8));
console.log(checkNumber(14));
console.log(checkNumber(23));
console.log(checkNumber(31));
console.log(checkNumber(50));