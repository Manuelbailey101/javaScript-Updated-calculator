function app(){
console.log("Buying...");
let description = prompt ("Add the product's name");
console.log(description);
let price = prompt ("add the product's price");
console.log(price);
let quantity = prompt ("add the product's quantity");
console.log(quantity);
let subtotal = prompt (price*quantity);
console.log(subtotal);
alert("your sub total is" + subtotal + ".");
const taxes = .09;
let total = (subtotal*taxes+subtotal);
console.log(total);
alert("Your Total is " + total);
document.write(`
<p style = "font-size : 32"> welcome to my Glorious online store </p>
<p style ="font-size : 22"> ${quantity} ${description} ${price} (ea)</p>
<p style ="font-size : 22"> Sub Total : $ ${subtotal}.00</p>
<p style ="font-size : 22"> Taxes : $ ${taxes*subtotal}.00</p>
<p style ="font-size : 22"> TOTAL : $ ${subtotal*taxes+subtotal}.00</p>
<p style ="font-size : 32"> Thank you for your purchase ! </p>`);
}