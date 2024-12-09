$(document).ready(function() {
    const botResponses = {
        "hi": "Hello! How can I help you today?,Do you want to know about Arpit Sinha...you can ask me about my name,Arpit's school,Arpit's +2 college, Arpit's Engineering College,contact detail,email address,etc",
        "what is your name": "I'm your api bot",
        "contact detail": "You can reach us at: Phone: +9779806037225",
        "email address": "You can contact us at:arpitsinha579@gmail.com",
    };

    // Make chatbot hidden and icon visible on page load
    $('#chatbot').hide();
    $('#chatbot-icon').show();

    $('#chatbot-send').on('click', function() {
        processInput();
    });

    $('#chatbot-input').on('keypress', function(event) {
        if (event.which == 13) {
            event.preventDefault();
            processInput();
        }
    });

    function processInput() {
        var userInput = $('#chatbot-input').val().toLowerCase();
        if (userInput) {
            appendMessage('User', userInput);
            $('#chatbot-input').val('');

            setTimeout(function() {
                var response = botResponses[userInput] || "Sorry, I didn't understand that. Can you ask something else?";
                appendMessage('api', response);
            }, 1000);
        }
    }

    function appendMessage(sender, message) {
        $('#chatbot-messages').append('<div><strong>' + sender + ':</strong> ' + message + '</div>');
        $('#chatbot-messages').scrollTop($('#chatbot-messages')[0].scrollHeight);
    }

    $('#chatbot-input').on('keypress', function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $('#chatbot-send').click();
        }
    });

    // Close button hides the chatbot and shows the small icon
    $('#chatbot-close').on('click', function() {
        $('#chatbot').hide();
        $('#chatbot-icon').show();
    });

    // Click to open chatbot from small icon
    $('#chatbot-icon').on('click', function() {
        $('#chatbot').show();
        $('#chatbot-icon').hide();
    });
});
