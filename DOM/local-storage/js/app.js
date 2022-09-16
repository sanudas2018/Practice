// input-name
// input-quantity
const getInputValue = (id) => {
   const inputId = document.getElementById(id);
   const getValue = inputId.value;
   inputId.value = '';
   return getValue;
}
// shop button 
const shopNowButton = () => {
   const getProductName = getInputValue('input-name');
   const getProductQuantity = getInputValue('input-quantity');
   // console.log(getProductName, getProductQuantity);
   // set data local storage 
   // localStorage.setItem(getProductName, getProductQuantity);

   displayProduct(getProductName, getProductQuantity);
   setLocalStorage(getProductName, getProductQuantity);
};



// search cart 
const cartSearch = () => {
   const searchCart = localStorage.getItem('cart');
   cart = {};
   if (searchCart) {
      cart = JSON.parse(searchCart);
   }
   return cart;
};

// data localStorage set 
const setLocalStorage = (product, quantity) => {
   const cart = cartSearch();
   cart[product] = quantity;
   const cartStringified = JSON.stringify(cart);
   localStorage.setItem('cart', cartStringified);
};


// Display UI 
const displayProduct = (name, quantity) => {
   const getUlId = document.getElementById('display-product');
   const li = document.createElement('li');
   li.innerHTML = `
      <p>Product Name: ${name} || Quantity: ${quantity}</p>
   `;
   getUlId.appendChild(li);
};
const getLocalDataAndSetDisplayProduct = () => {
   const cart = cartSearch();
   console.log(cart);
   for (const product in cart) {
      const quantity = cart[product];
      displayProduct(product, quantity);
   }
};
getLocalDataAndSetDisplayProduct();