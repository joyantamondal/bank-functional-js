
// getInputValue 
function getInputValue(fieldId){
  const input = document.getElementById(fieldId);
  const inputField = parseFloat(input.value);
  input.value = " ";
  return inputField;
}

// get inner text value 
function getInnerTextValue(fieldId){
  const fieldTag = document.getElementById(fieldId);
  const fieldTagText = fieldTag.innerText;
  const value = parseFloat(fieldTagText);
  return value;
}

//update input value 
function updateTotal(fieldId, amount){
  const previousTotal = getInnerTextValue(fieldId);
  const newTotal = previousTotal + amount;
  document.getElementById(fieldId).innerText = newTotal;
}
// update balance 
function updateBalance(amount,isAdding){
  const previousBalance = getInnerTextValue('balance-total');
  let newBalance;
  if(isAdding == true){
    newBalance = previousBalance + amount;
  }
  else{
    newBalance = previousBalance - amount;
  }
  
  document.getElementById('balance-total').innerText = newBalance;
}
// handle deposite 
document.getElementById('deposite-button').addEventListener('click',
function(){
  const amount= getInputValue('deposite-input');
  if(amount>0){
    updateTotal('deposit-total',amount);
    updateBalance(amount,true);
  }
});

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
  const amount= getInputValue('withdraw-input');
  const balance = getInnerTextValue('balance-total')
  if(amount>0 && amount<= balance){
    updateTotal('withdraw-total',amount);
    updateBalance(amount,false);
  }
});

