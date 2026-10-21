
var chatBox = document.getElementById('chat');
var messageInput = document.getElementById('message');
var sendButton = document.getElementById('send-btn');

function addMessage(text, who) {
    var newMessage = document.createElement('div');

    newMessage.className = 'message ' + who;
    newMessage.textContent = text;

    chatBox.appendChild(newMessage);
}

function sendMessage() {
    var text = messageInput.value.trim();

    if (text === '') {
        return;
    }
    
    addMessage(text, 'user');

    messageInput.value = '';

    fetch('/chat',{
        method: 'POST',
        headers: {
            'content-Type':'application/json'
        },
        body: JSON.stringify({message:text})
    }).then(function(response){
        return response.json();
    }).then(function(data){
        addMessage(data.reply,"bot");
    });
}

sendButton.onclick = sendMessage;

messageInput.onkeydown = function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
};
