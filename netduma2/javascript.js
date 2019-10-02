




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


	       let generateRandomString = () => Math.random().toString(36).substr(2, 5);
		
	$('#List').append(`<div id='${generateRandomString()}'>`+ text +'<button class="delete">Delete</button></div>');
	$('#user').append('<li>'+ text );
	$('#user').append('<li>'+ text1 );
	$('#user').append('<li>'+ text2 );
	$('#user').append('<li>'+ text3 );
	$('#user').append('<li>'+ text4 );
	$('#user').append('<li>'+ text5 );
	$('#user').append('<li>'+ text6 );
	$('#user').append('<li>'+ text7 );


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




$ (document).ready(function(){
    if (localStorage.getItem("list") != null) {
      $('#List').html(localStorage.getItem("list")); // This reads items in our local storage
    }

	$('#add').on('click', addListItem); // This is for button to add text

	// This part enables us to add text on pressing enter key
	$( "#newText" ).keypress(function( event ) {
		if ( event.which == 13) {
			addListItem();
		}
    });
});


	
	$(document).on('click', '.delete', deleteListItem);





  















  










