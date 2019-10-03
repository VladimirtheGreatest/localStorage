// This function adds items on our list
function addListItem() {
	var text=$('#name').val();  
	var text1=$('#lastname').val();  
	var text2=$('#email').val();  
	var text3=$('#telephone').val();  
	var text4=$('#address').val();  
	var text5=$('#street').val();  
	var text6=$('#country').val();  
	var text7=$('#town').val();  


		  // let generateRandomString = () => Math.random().toString(36).substr(2, 5);
		  // let newId = generateRandomString()
		
	$('#List').append(`<ul id='${text}'>`+ text +
	'<button class="delete">Delete</button>' + '<li>' + text1 + '</li>' + '<li>' + text2 + '</li>'
	+ '<li>' + text3 + '</li>' + '<li>' + text4 + '</li>' + '<li>' + text5 + '</li>' + '<li>' + text6 + '</li>' + '<li>' + text7 + '</li>' );

	// This adds list items to our local storage
	localStorage.setItem("list", $('#List').html());


	$('#newText').val(''); 
	
};

// This function deletes items on our list
function deleteListItem() {
	// In order to delete entire list item we have to use parent method > without parent method we would only delete our delete button
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});

	// This deletes list items in our local storage
	localStorage.removeItem("list", $('#List').html());
};


// This function searches items on our list
function searchListItem() {
	var search =$('#search').val();  
	var x = document.getElementById(search);
	$('#search-list').append(x);
}




$ (document).ready(function(){
    if (localStorage.getItem("list") != null) {
      $('#List').html(localStorage.getItem("list")); // This reads items in our local storage
    }

	$('#add').on('click', addListItem); // This is for button to add text
	$('#search-btn').on('click', searchListItem); // This is for button to add text

	// This part enables us to add text on pressing enter key
	$( "#newText" ).keypress(function( event ) {
		if ( event.which == 13) {
			addListItem();
		}
    });
});


	
	$(document).on('click', '.delete', deleteListItem);
