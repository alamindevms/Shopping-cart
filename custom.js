// get add button
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');

// eventListener
addBtn.addEventListener('click', addPrice);
removeBtn.addEventListener('click', removeBtnPrice);
// function 
function addPrice() {
   handleProductPrice(true);
}

function removeBtnPrice() {
   handleProductPrice(false);
}

function handleProductPrice(isIncrease) {
   let price = document.getElementById('price');
   let priceValue = parseInt(price.value);

   let newValue = priceValue;
   if (isIncrease == true) {
      newValue = priceValue + 1;
   }
   if (isIncrease == false && priceValue > 0) {
      newValue = priceValue - 1;
   }
   price.value = newValue;
   let totalPrice = newValue * 1219;
   document.getElementById('totalPrice').innerText = '$' + totalPrice;
}

// Case 
let caseRemove = document.getElementById('case-remove');
let caseAdd = document.getElementById('case-add');

caseAdd.addEventListener('click', caseAddFunc);
caseRemove.addEventListener('click', caseRemoveFunc);

function caseAddFunc() {
   let caseInput = document.getElementById('case-input');
   let caseValue = parseInt(caseInput.value);
   let updateValue = caseValue + 1;
   caseInput.value = updateValue;

   let caseTotal = updateValue * 59;
   document.getElementById('case-total').innerText = '$' + caseTotal;

}

function caseRemoveFunc() {
   let caseInput = document.getElementById('case-input');
   let caseValue = parseInt(caseInput.value);
   let updateValue = caseValue - 1;
   caseInput.value = updateValue;

   let caseTotal = updateValue * 59;
   document.getElementById('case-total').innerText = '$' + caseTotal;

}
