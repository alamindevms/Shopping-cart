
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
}