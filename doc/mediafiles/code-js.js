// comparision and condition
var onSale = true,
    inventoryCount = 10,
    discount = 0;

if (inventoryCount > 10 && onSale) {
 console.log("We have plenty left");
}
else if (discount > 0 || onSale) { // "onSale == true" not necessary
 console.log("On Sale!");
}
else {
 console.log("Full price");
}


// circle area
function calcCircleArea(radius) {
 return radius * radius * Math.PI;
}
console.log("Area is: " + calcCircleArea(3));
