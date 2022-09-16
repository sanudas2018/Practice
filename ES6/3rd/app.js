// function loadUser() {
//    const url = 'https://jsonplaceholder.typicode.com/users';
//    fetch(url)
//       .then(res => res.json())
//       .then(data => displayUser(data))

// }

// function displayUser(data) {
//    console.log(data);
//    const ul = document.getElementById('ulId');
//    for (const user of data) {
//       let li = document.createElement('li');
//       li.
//       li.innerText = user.name;
//       ul.appendChild(li);
//    }
// }

const loadData = () => {
   const url = 'https://restcountries.com/v3.1/all';
   fetch(url)
      .then(res => res.json())
      .then(data => displayCountry(data))
      .catch(error => console.log(error))
}
// const loadData2 = async () => {
//    const url = 'https://restcountries.com/v3.1/all';

//    try {
//       const res = await fetch(url);
//       const data = await res.json();
//       displayCountry(data);
//    } catch (error) {
//       console.log(error);
//    }
// }

const displayCountry = (countries) => {
   const main = document.getElementById('allCountries');
   countries.forEach(country => {
      const div = document.createElement('div');
      div.classList.add('country');
      div.innerHTML = `
         <img src=${country.flags.svg}></br>
         Name: ${country.name.common} </br>
         Capital: ${country.capital ? country.capital[0]: 'Not a Capital'} 
         <button onclick='singleCountryLoad("${country.cca2}")'>Details</button>
      `;
      main.appendChild(div)
   });
};
const singleCountryLoad = (ccId) => {
   const url = `https://restcountries.com/v3.1/alpha/${ccId}`;
   fetch(url)
      .then(res => res.json())
      .then(data => displaySIngleCountry(data[0]))
};
const displaySIngleCountry = (data) => {
   console.log(data)
   const main = document.getElementById('singleCountryDetails');
   const div = document.createElement('div');
   div.classList.add('singleCountry')
   div.innerHTML = `
   Name: ${data.name.common}
   <img src=${data.flags.svg}></br>
   `;
   main.appendChild(div);
   div.innerHTML = '';
};

loadData()