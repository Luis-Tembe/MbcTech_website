/* Contact Form Dynamic */
/*
$(function() {
	// Get the form.
	var form = $('#contact-form');
  
	// Get the messages div.
	var formMessages = $('.form-message');
  
	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
	  // Stop the browser from submitting the form.
	  e.preventDefault();
  
	  // Serialize the form data.
	  var formData = $(form).serialize();
  
	  // Submit the form using AJAX.
	  $.ajax({
		type: 'POST',
		url: $(form).attr('action'),
		data: formData,
		success: function() {
		  // Make sure that the formMessages div has the 'success' class.
		  $(formMessages).removeClass('error');
		  $(formMessages).addClass('success');
  
		  // Set the success message.
		  $(formMessages).text('Thank you! Your message has been sent.');
  
		  // Clear the form.
		  $(form)[0].reset();
		},
		error: function() {
		  // Make sure that the formMessages div has the 'error' class.
		  $(formMessages).removeClass('success');
		  $(formMessages).addClass('error');
  
		  // Set the message text for general error.
		  $(formMessages).text('Oops! An error occurred, and your message could not be sent.');
		}
	  });
	});
  });
  
*/
