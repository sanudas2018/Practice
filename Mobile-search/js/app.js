let test;

// ..... Load Data ..... 
const loadData = (phoneName, dataLimit) => {
   let url;
   if (phoneName) {
      url = `https://openapi.programming-hero.com/api/phones?search=${phoneName}`;
   } else {
      url = `https://openapi.programming-hero.com/api/phones?search=${test}`;
   }
   fetch(url)
      .then(res => res.json())
      .then(data => showAllData(data.data, dataLimit))
};

// Show All Data 
const showAllData = (allData, dataLimit) => {

   const parentsDiv = document.getElementById('cardMain');
   parentsDiv.innerHTML = '';
   // parentsDiv.textContent = '';

   // display button show 
   const btnId = document.getElementById('show-button');
   if (dataLimit && allData.length > 5) {
      allData = allData.slice(0, 5);
      btnId.classList.remove('d-none')
   } else {
      btnId.classList.add('d-none')
   }
   // error message show
   if (allData.length == 0) {

      errorMessage('NO DATA FOUND', 'd-none');
      spinner(false, 'd-none')
   } else {
      errorMessage('', 'd-none');
      spinner(false, 'd-none')
   }

   allData.forEach(singlePhone => {
      const {
         brand,
         image,
         phone_name,
         slug
      } = singlePhone;
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
      <div class="card h-75 rounded-3">
         <img src=${image} class="card-img-top h-50"  alt="...">
         <div class="card-body">
            <h5 class="card-title">${brand}</h5>
            <p class="card-text">${phone_name}</p>
            <p class="card-text">${slug}</p>
            <button class="btn btn-info p-2 px-5" onclick=phoneDetails('${slug}') data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
         </div>
      </div>
      
      `;

      parentsDiv.appendChild(div);
   });
};
// phone details
const phoneDetails = async (slugId) => {
   const url = `https://openapi.programming-hero.com/api/phone/${slugId}`;
   const res = await fetch(url);
   const data = await res.json();
   singlePhoneInfo(data.data);
};
const singlePhoneInfo = (data) => {
   const modelId = document.getElementById('modal-body-id');
   modelId.innerHTML = '';
   const createDiv = document.createElement('div');
   createDiv.classList.add('modal-content');
   createDiv.innerHTML = `
      
         <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${data.brand}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
            <h1>${data.name}</h1>
            <h3>${data.mainFeatures.storage}</h3>
            <p>${data.slug}</p>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
         </div>
      
   `;
   modelId.appendChild(createDiv);
}
// common function button serch 
const processSearch = (dataLimit) => {
   spinner(true, 'd-none')
   const inputId = document.getElementById('input-value');
   const inputValue = inputId.value;
   if (inputValue) {
      test = inputValue;
   }
   loadData(inputValue, dataLimit);
   inputId.value = '';
};
// enter to search 
document.getElementById('input-value').addEventListener('keypress', function (e) {
   if (e.key === 'Enter') {
      processSearch(10);
   }
})

// input button get and value received and limited value
document.getElementById('button-addon2').addEventListener('click', function () {
   processSearch(10)
});

// error messages 
const errorMessage = (messages, display) => {
   const getAlertId = document.getElementById('alert');
   getAlertId.innerHTML = ''
   const div = document.createElement('div');
   // div.classList.add('d-none')
   if (messages != '') {
      getAlertId.classList.remove(display);
      div.innerHTML = `
      <div class="alert alert-warning alert-dismissible fade  show " role="alert">
         <strong>${messages}</strong>
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
   `;
      getAlertId.appendChild(div);
   } else {
      div.classList.add('d-none')
      getAlertId.classList.add(display);

   }
};

// spinner add 
const spinner = (isLoading, work) => {
   const spinnerId = document.getElementById('spinner');
   if (isLoading) {
      spinnerId.classList.remove(work);
   } else {
      spinnerId.classList.add(work)

   }
};
// button show all data
document.getElementById('btn-show-all').addEventListener('click', function () {

   processSearch();
});
// Show all button 
// const showAllButton = (isTrue, displayWork) => {
//    const btnId = document.getElementById('show-button');
//    if (isTrue) {
//       btnId.classList.remove(displayWork)
//    } {
//       btnId.classList.add(displayWork)
//    }
// }
// loadData() 