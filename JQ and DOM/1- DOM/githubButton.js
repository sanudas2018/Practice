{
   /* <p id="repoName">delete</p>
         <input id="inputField" type="text" placeholder="You repo name">
         <button id="deleteBtn">Delete</butt */
}
let repoNameId = document.getElementById('repoName').innerText;
document.getElementById('deleteBtn').addEventListener('click', function () {
   document.getElementById('repoName').style.display = 'none';
});
document.getElementById('inputField').addEventListener('keyup', function (event) {
   let inputValue = event.target.value;
   console.log(inputValue)
   let button = document.getElementById('deleteBtn');
   if (inputValue === repoNameId) {
      button.removeAttribute('disabled');
   } else {
      button.setAttribute('disabled', true);
   }
});