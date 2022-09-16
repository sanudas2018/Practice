// get input field
const getInputValue = (id) => {
   const getId = document.getElementById(id);
   const getValue = getId.value;
   getId.value = '';
   return getValue;
};

// Add button localStorage 
const addButton = () => {
   const cartValue = JSON.parse(localStorage.getItem('cart'));
   const value = getInputValue('todo-text');
   const quantity = getInputValue('todo-Quantity');
   // console.log(parseInt(quantity));
   // console.log(!cart);
   setDataLocalStorage(cartValue, value, quantity);
   render();
};
const setDataLocalStorage = (cartValue, value, quantity) => {


   if (!cartValue) {
      cartTitle = [{
         title: value,
         Quantity: parseInt(quantity),
         id: Math.round(Math.random() * 1000)

      }]
      localStorage.setItem('cart', JSON.stringify(cartTitle));
   } else {
      cartTitle = [
         ...cartValue, {
            title: value,
            Quantity: parseInt(quantity),
            id: Math.round(Math.random() * 1000)
         }
      ]
      localStorage.setItem('cart', JSON.stringify(cartTitle));
   }
}
// todo-list 
const render = () => {
   const cartData = JSON.parse(localStorage.getItem('cart'));
   const section = document.getElementById('all-products');
   section.innerHTML = '';
   if (cartData) {
      cartData.forEach(item => {
         const div = document.createElement("div");
         div.innerHTML = `
         <div class="shadow-sm py-2 px-4 mb-1 bg-body rounded d-flex align-content-center justify-content-between">
         <span class="fs-4">${item.title}</span>
         <span>Quantity:<small class="fw-bold">
             ${item.Quantity}
         </small></span>
         <span class=" text-danger" onclick="singleItemDelete(${item.id})">DELETE</span>
         <span class=" text-success " onclick="editQuantity(${item.id})">EDIT</span>
         </div>
         `;
         section.appendChild(div);
      })
   }
};
const removeButton = () => {
   localStorage.clear('cart');
   render();
}
const singleItemDelete = (id) => {
   // console.log(id);
   const cartValue = JSON.parse(localStorage.getItem('cart'));
   // console.log(cartValue);

   const useFind = cartValue.filter(issue => issue.id !== id);
   // localStorage.removeItem(useFind);

   localStorage.setItem('cart', JSON.stringify(useFind));
   render();
}


const editQuantity = (id) => {

   const cartValue = JSON.parse(localStorage.getItem('cart'));

   // console.log(cartValue.title);
   const value = getInputValue('todo-text');
   const newQuantity = getInputValue('todo-Quantity');

   const findData = cartValue.find(singleData => singleData.id == id);
   const useFilter = cartValue.filter(issue => issue.id !== id);
   // console.log(findData);
   // console.log(parseInt(findData.Quantity));
   // setDataLocalStorage(cartValue, value, quantity);
   let previousQuantity = parseInt(findData.Quantity);
   if (findData) {
      cartTitle = {
         title: value,
         Quantity: parseInt(newQuantity) + previousQuantity,
         id: id
      }
      console.log(cartTitle);
      // new data add to array 
      useFilter.push(cartTitle);

      console.log(useFilter);
      localStorage.setItem('cart', JSON.stringify(useFilter));
      render();
   }


};
render();