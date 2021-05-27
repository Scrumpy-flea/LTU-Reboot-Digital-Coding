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

// Drinks Ordering. 

function drinkOrder(drink, size) {
    // console.log(drink);
    // console.log(size);
    let strMessage = 'You have ordered a ' + size;
    blnValidated = true;
    if(size != 'large' && size != 'medium' && size != 'small'){
        blnValidated = 'false';
        strMessage = 'You have ordered a size we do not sell of';
    }
    // if(drink != 'cola' && drink != 'lemon' && drink != 'orange'){
    //     blnValidated = 'false';
    //     strMessage = 'You have ordered a drink we do not sell.';
    // }
    if(blnValidated){
    switch(drink){
    case 'cola':
        strMessage += ' Coca-Cola';
    break;
    case 'lemon':
        strMessage += ' Schweppes';
    break; 
    case 'orange': 
        strMessage += ' Tango';
    break; 
    default:
        strMessage = 'You have ordered a drink we do not sell';
        break;
    }
    console.log(strMessage);
}
}


 drinkOrder('coffee', 'big');
 drinkOrder('lemon', 'medium');
 drinkOrder('cola', 'big');
 drinkOrder('orange', 'small');
 drinkOrder('cola', 'large');
 drinkOrder('lemon', 'big');
 drinkOrder('orange', 'big');
 drinkOrder('lemon', 'large');
 drinkOrder('coffee', 'small');

// Calculator

 function calculater(num1, num2, operator){
    let sum;
    let blnValidated = true;
    if(isNaN(num1)) {
        blnValidated = false;
        sum = 'Number 1 is not a valid number.';
    }
    if(isNaN(num2)) {
        blnValidated = false;
        sum = 'Number 2 is not a valid number.';
    }
    if(blnValidated){
     switch(operator) {
         case '+': 
           sum = num1 + num2;
         break;
         case "-": 
            sum = num1 - num2;
         break;
         case '*':
            sum = num1 * num2;
         break;
         case '/':
            sum = num1 / num2;
         break;
         case '%': 
            sum = num1 % num2;
         break;
         default:
             sum = 'Operator is not valid';
         break;
     }
     }
     console.log(sum);
}

 calculater(10, 5, '*');
 calculater(10, 5, '/');
 calculater(10, 5, '%');
 calculater(10, 5, '+');
 calculater(10, 5, '-');
 calculater(10, 5, '/');
 calculater('Emma', 5, '+');
 calculater(10, 'Emma', '-');
 calculater(10, 5, 'Dobby');

// Array 
let arrItems = [
    productName, 
    price, 
    quantity, 
    inStock, 
    discountAmount
];

console.log(arrItems);

let firstItem = arrItems[1];
let lastItem = arrItems[4];

console.log(firstItem);
console.log(lastItem);

// Objects

objItems = {
    productName:"carrots",
    price:"0.30",
    quantity:100, 
    inStock:true, 
    discountAmount:0
};    
    
console.log(objItems);
// different ways of calling variables from the object. 
console.log(objItems.productName);
console.log(objItems['price']);