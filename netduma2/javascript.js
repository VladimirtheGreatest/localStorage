//console.log(localStorage);
//localStorage.setItem("name", "Vladimir");     //add item
//localStorage.removeItem("name");               //remove item
//localStorage.setItem("Other name", "Putin");
//console.log(localStorage.getItem("Other name"));
//console.log(localStorage.key(0));
//localStorage.removeItem("aaaaaaa");
//localStorage.removeItem("asdfasf");



const name = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const telephone = document.getElementById("telephone");
const email = document.getElementById("email");
const address = document.getElementById("address");
const street = document.getElementById("street");
const town = document.getElementById("town");
const country = document.getElementById("country");

const create = document.getElementById("create");
const Delete = document.getElementById("delete");
const search = document.getElementById("search");



const output = document.getElementById("output");

document.getElementById("create").addEventListener("click", function(){
    const inputName = name.value;
    const inputLastName = lastName.value;
    const inputEmail = email.value;
    const inputTelephone = telephone.value;
    const inputAddress = address.value;
    const inputStreet = street.value;
    const inputTown = town.value;
    const inputCountry = country.value;
    
    var users =  {
        name : inputName,
        email : inputEmail,
        lastname : inputLastName,
        telephone : inputTelephone,
        address : inputAddress,
        street : inputStreet,
        town : inputTown,
        country : inputCountry
    }
    var local;
    
    localStorage.setItem('users', JSON.stringify(users))
    local = JSON.parse(localStorage.getItem('users'))

document.getElementsByTagName('h1')[0].innerHTML = local.name;
document.getElementsByTagName('h1')[1].innerHTML = local.lastname;
document.getElementsByTagName('h1')[2].innerHTML = local.telephone;
document.getElementsByTagName('h1')[3].innerHTML = local.address;
document.getElementsByTagName('h1')[4].innerHTML = local.street;
document.getElementsByTagName('h1')[5].innerHTML = local.town;
document.getElementsByTagName('h1')[6].innerHTML = local.country;
document.getElementsByTagName('h1')[7].innerHTML = local.name;
  });

  document.getElementById("clear").addEventListener("click", function(){
    let Delete = document.getElementById("delete");
        localStorage.removeItem(Delete)
  });

  document.getElementById("search").addEventListener("click", function(){
    var json = JSON.parse(localStorage);
    for(obj in json) {
        console.log(json[obj].name);
    }
    
    let search = document.getElementById("searchIt").value;
         localStorage.getItem(search);
      
  });

  document.getElementById('name').textContent = JSON.parse(localStorage.getItem('users')).name
  document.getElementById('lastname').textContent = JSON.parse(localStorage.getItem('users')).lastname
  document.getElementById('telephone').textContent = JSON.parse(localStorage.getItem('users')).telephone
  document.getElementById('address').textContent = JSON.parse(localStorage.getItem('users')).address
  document.getElementById('street').textContent = JSON.parse(localStorage.getItem('users')).street
  document.getElementById('email').textContent = JSON.parse(localStorage.getItem('users')).email
  document.getElementById('town').textContent = JSON.parse(localStorage.getItem('users')).town
  document.getElementById('country').textContent = JSON.parse(localStorage.getItem('users')).country




  










