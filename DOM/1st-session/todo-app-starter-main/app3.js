const getInputValue = (id) => {
   const inputId = document.getElementById(id);
   const value = inputId.value;
   inputId.value = '';
   return value;
};

const addButton = () => {
   const productName = getInputValue('todo-text');
   const productQuantity = getInputValue('todo-Quantity');
   // console.log(productName, productQuantity);
   
};
const removeButton = () => {

};