// function 
function handleProductPrice(product, isIncrease) {
   let productInput = document.getElementById(product + '-count');
   let productValue = parseInt(productInput.value);

   let newValue = productValue;
   if (isIncrease == true) {
      newValue = productValue + 1;
   }
   if (isIncrease == false && productValue > 0) {
      newValue = productValue - 1;
   }
   productInput.value = newValue;
   let totalPrice = 0;
   if (product == 'phone') {
      totalPrice = newValue * 1219;
   }
   if (product == 'case') {
      totalPrice = newValue * 59;
   }
   document.getElementById(product + '-total').innerText = '$' + totalPrice;

   getTotalPrice();
}

// total price & tax & grand total
function getTotalPrice() {
   let phoneValue = getValue('phone');
   let caseValue = getValue('case');

   let totalPrice = phoneValue * 1219 + caseValue * 59;
   document.getElementById('totalPrice').innerText = '$' + totalPrice;

   let tax = Math.round(totalPrice * 0.1);
   document.getElementById('total-tax').innerText = '$' + tax;

   let grandTotal = totalPrice + tax;
   document.getElementById('grand-total').innerText = '$' + grandTotal;
}

// get dynamic input value
function getValue(product) {
   let productInput = document.getElementById(product + '-count');
   let productValue = parseInt(productInput.value);

   return productValue;
}