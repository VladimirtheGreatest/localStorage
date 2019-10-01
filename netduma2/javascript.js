//console.log(localStorage);
//localStorage.setItem("name", "Vladimir");     //add item
//localStorage.removeItem("name");               //remove item
//localStorage.setItem("Other name", "Putin");
//console.log(localStorage.getItem("Other name"));
//console.log(localStorage.key(0));
//localStorage.removeItem("aaaaaaa");
//localStorage.removeItem("asdfasf");



const output = document.getElementById("output");

document.getElementById("create").addEventListener("click", function(){
    const name = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const telephone = document.getElementById("Telephone");
    const email = document.getElementById("Email");
    const address = document.getElementById("Address");
    const street = document.getElementById("Street");
    const town = document.getElementById("Town");
    const country = document.getElementById("Country");

    

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
   // var local;
    
    localStorage.setItem('users', JSON.stringify(users))
    //local = JSON.parse(localStorage.getItem('users'))

   
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
   
  var local;
  local = JSON.parse(localStorage.getItem('users'))
  document.getElementById("name").textContent = local.name;
  document.getElementById("lastname").textContent = local.lastname;
  document.getElementById("email").textContent = local.email;
  document.getElementById("telephone").textContent = local.telephone;
  document.getElementById("address").textContent = local.address;
  document.getElementById("street").textContent = local.street;
  document.getElementById("town").textContent = local.town;
  document.getElementById("country").textContent = local.country;
  console.log(local);

  
  
  document.getElementById('output').textContent = (localStorage.getItem('users'))
  




  















  










