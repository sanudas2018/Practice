function getInputFieldValue(inputFiled) {
   let inputFieldId = document.getElementById(inputFiled);
   let inputFieldValue = inputFieldId.value;
   let stringToFloat = parseFloat(inputFieldValue);
   inputFieldId.value = '';
   return stringToFloat;
};

function getTextFieldValue(textField) {
   let getTextId = document.getElementById(textField);
   let getTextValue = getTextId.innerText;
   let stringToFloat = parseFloat(getTextValue);
   return stringToFloat;
};

function setTextFieldAmount(setLocationId, totalAmount) {
   let getTextId = document.getElementById(setLocationId);
   getTextId.innerText = totalAmount;

};
// deposit-input
// depositAmount

// deposit site 
document.getElementById('btn-deposit').addEventListener('click', function () {
   let newDepositAmount = getInputFieldValue('deposit-input');
   let priviesDepositAmount = getTextFieldValue('depositAmount');

   let totalDeposit = newDepositAmount + priviesDepositAmount;

   setTextFieldAmount('depositAmount', totalDeposit);
   // ........... 
   let priviesBalance = getTextFieldValue('balance');
   let totalBalance = priviesBalance + newDepositAmount;
   setTextFieldAmount('balance', totalBalance);

});

// withdraw site 
document.getElementById('btn-withdraw').addEventListener('click', function () {
   let newWithdrawAmount = getInputFieldValue('withdraw-input');
   let priviesWithdrawAmount = getTextFieldValue('withdrawAmount');
   let totalWithdraw = newWithdrawAmount + priviesWithdrawAmount;

   setTextFieldAmount('withdrawAmount', totalWithdraw);
   // ........... 
   let priviesBalance = getTextFieldValue('balance');
   let totalBalance = priviesBalance - newWithdrawAmount;
   setTextFieldAmount('balance', totalBalance);

});