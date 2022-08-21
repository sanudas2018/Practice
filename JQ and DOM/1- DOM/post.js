document.getElementById('postBtn').addEventListener('click', function () {
   let textareaId = document.getElementById('post');
   let getValue = textareaId.value;
   // console.log(getValue);
   let getSection = document.getElementById('postSection');
   let createPtag = document.createElement('p');
   createPtag.innerText = getValue;
   console.log(createPtag)
   getSection.appendChild(createPtag);

   textareaId.value = '';
});