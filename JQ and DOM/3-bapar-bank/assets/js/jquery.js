// deposit-btn
// deposit-input
// function amountPlus(deposit) {

// }
document.getElementById('deposit-btn').addEventListener('click', function () {
   // input button field
   let getInputId = document.getElementById('deposit-input');
   let getInputValue = getInputId.value;
   // deposit show 
   let depositAmount = document.getElementById('depositAmount');
   let depositInnerText = depositAmount.innerText;

   // total Deposit amount 
   let totalDeposit = parseFloat(getInputValue) + parseFloat(depositInnerText);
   depositAmount.innerText = totalDeposit;

   // .............. Balance .......... 
   // Get total balance show field 
   let getBalanceId = document.getElementById('balance');
   let getBalanceText = getBalanceId.innerText;

   // total Balance amount 
   let totalBalance = parseFloat(getBalanceText) + parseFloat(getInputValue);
   getBalanceId.innerText = totalBalance;


   getInputId.value = '';
});
// withdraw 
document.getElementById('withdraw-btn').addEventListener('click', function () {
   // input button field
   let getInputId = document.getElementById('withdraw-input');
   let getInputValue = getInputId.value;
   // deposit show 
   let depositAmount = document.getElementById('withdrawAmount');
   let depositInnerText = depositAmount.innerText;

   // total Deposit amount 
   let totalDeposit = parseFloat(getInputValue) + parseFloat(depositInnerText);
   depositAmount.innerText = totalDeposit;

   // .............. Balance .......... 
   // Get total balance show field 
   let getBalanceId = document.getElementById('balance');
   let getBalanceText = getBalanceId.innerText;

   // total Balance amount 
   let totalBalance = parseFloat(getBalanceText) - parseFloat(getInputValue);
   getBalanceId.innerText = totalBalance;


   getInputId.value = '';
});