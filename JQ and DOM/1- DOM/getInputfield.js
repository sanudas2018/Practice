document.getElementById('button-submit').addEventListener('click', function () {
   let getInputId = document.getElementById('inputtag');
   let getInputValue = getInputId.value;

   let getPtag = document.getElementById('ptag');
   getPtag.innerText = getInputValue;
   getInputId.value = ' ';
})