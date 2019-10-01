(function() {
    var nameField = document.getElementById("name"),
      lastnameField = document.getElementById("lastname");
      emailField = document.getElementById("email");
      telephoneField = document.getElementById("telephone");
      addressField = document.getElementById("address");
      streetField = document.getElementById("street");
      countryField = document.getElementById("country");
      townField = document.getElementById("town");
  
    // On page load, get the current set or a blank array
    var list = JSON.parse(localStorage.getItem("list") || "[]");
  
    // Show the entries
    list.forEach(showItem);  //ShowItem is a function down below
  
    // "Add" button handler
    document.getElementById("btn-add").addEventListener(
      "click",
      function() {
        // Get the name and price
        var item = {
          name: nameField.value,
          lastname: lastnameField.value,
          email: emailField.value,
          telephone: telephoneField.value,
          address: addressField.value,
          street : streetField.value,
          country: countryField.value,
          town: townField.value
        };
  
        // Add to the list
        list.push(item);
  
        // Display it
        showItem(item);
  
        // Update local storage
        localStorage.setItem("list", JSON.stringify(list));
      },
      false
    );

     // Delete method
    document.getElementById("delete").addEventListener(
        "click",
        function() {
          
    // This function deletes items on our list
	// In order to delete entire list item we have to use parent method > without parent method we would only delete our delete button
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});

	// This deletes list items in our local storage
	//localStorage.removeItem("list", $('#users').html());

	
})
  
    // Function for showing an item
    function showItem(item) {
      var div = document.createElement('div');
      div.innerHTML =
        "Name: " + escapeHTML(item.name) +
        ", Lastname: " + escapeHTML(item.lastname) +
        ", Email: " + escapeHTML(item.email) +
        ", Telephone: " + escapeHTML(item.telephone) +
        ", Address: " + escapeHTML(item.address) +
        ", Street: " + escapeHTML(item.street) +
        ", Country: " + escapeHTML(item.country) +
        ", Town: " + escapeHTML(item.town) 
        var buttonDelete = document.createElement('button');
        buttonDelete.setAttribute("id", "delete");
        buttonDelete.innerHTML = 'Delete this user'
      document.getElementById("list").appendChild(div);
      document.getElementById("list").appendChild(buttonDelete);   //this will call method to delete the user
    }
  
    // Function for escaping HTML in the string
    function escapeHTML(str) {
      return str.replace(/&/g, "&amp;").replace(/</g, "&lt;");
    }
  })();
  




  















  










