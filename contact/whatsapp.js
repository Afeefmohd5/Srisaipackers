$(function() {

    // This code will run when the button with the ID 'sendToWhatsAppBtn' is clicked
    $('#sendToWhatsAppBtn').on('click', function() {
        
        // 1. Your WhatsApp Number (without '+', spaces, or dashes)
        // CHANGE THIS TO YOUR NUMBER
        const phoneNumber = '918977420984';

        // 2. Get the user's input from the form fields using their IDs
        const userName = $('#userName').val();
        const userRequirement = $('#userRequirement').val();

        // 3. Simple validation to make sure fields are not empty
        if (userName.trim() === '' || userRequirement.trim() === '') {
            alert('Please fill in your name and requirement before sending.');
            return; // Stop the function if fields are empty
        }

        // 4. Create the pre-filled message
        // The \n\n creates a new line in the WhatsApp message for better readability.
        const message = `Hello, my name is ${userName}. \n\nMy requirement is: ${userRequirement}`;

        // 5. Encode the message so it can be used in a URL
        const encodedMessage = encodeURIComponent(message);

        // 6. Create the final WhatsApp URL
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // 7. Open the URL in a new browser tab
        window.open(whatsappURL, '_blank');
    });

});