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

   // console.log(!cart);
   if (!cartValue) {
      cartTitle = [{
         title: value,
         completed: false
      }]
      localStorage.setItem('cart', JSON.stringify(cartTitle));
   } else {
      cartTitle = [
         ...cartValue, {
            title: value,
            completed: false
         }
      ]
      localStorage.setItem('cart', JSON.stringify(cartTitle));
   }
   render();
};
// todo-list 
const render = () => {
   const cartData = JSON.parse(localStorage.getItem('cart'));
   const UI = document.getElementById('todo-list');
   UI.innerHTML = '';
   cartData.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('py-2')
      li.innerHTML = `${item.title}`;
      UI.appendChild(li);
   })
};
const removeButton = () => {
   localStorage.removeItem('cart');
   render();
}
render();