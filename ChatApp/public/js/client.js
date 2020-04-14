console.log('Client is running');

document.getElementById('mesForm').addEventListener('submit', function(event) {
    event.preventDefault();
})

socket = io.connect('http://localhost:3000');
socket.on('mes', newMessage);

function newMessage(data) {
    if(chatBox.scrollTop + chatBox.clientHeight == chatBox.scrollHeight){
        addMessage(data.author, data.date, data.text);
        moveToBottom();
    } else {
        addMessage(data.author, data.date, data.text);
    }
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function writeMessage() {
    var date = new Date();
    var messageText = document.getElementById('textInput').value;
    var messageDate = addZero(date.getHours()) + ":" + addZero(date.getMinutes());

    //show message in chatbox
    if(messageText.length > 0){

        var data = {
            author: "Johnny",
            date: messageDate,
            text: messageText
        }
    
        socket.emit('mes', data);

        addMessage("Johnny", messageDate, messageText);
        moveToBottom();
    }    
    document.getElementById('textInput').value = "";

}

function moveToBottom() {
    document.getElementById('chatBox').scrollTop = document.getElementById('chatBox').scrollHeight;
}

var chatbox = document.getElementById('chatBox');



function addMessage(auth, when, txt) {
    //create new message
    let newMes = document.createElement('div');
    newMes.classList.add('message');
    
    //create header of a message
    let topMes = document.createElement('div');
    topMes.classList.add('top');

    //adding author to a header of a message
    let authorMes = document.createElement('div');
    authorMes.classList.add('author');
    let authorText = document.createTextNode(auth);
    authorMes.appendChild(authorText);
    topMes.appendChild(authorMes);

    //adding date to a header of a message
    let dateMes = document.createElement('div');
    dateMes.classList.add('date');
    let dateText = document.createTextNode(when);
    dateMes.appendChild(dateText);
    topMes.appendChild(dateMes);

    //adding header to a message
    newMes.appendChild(topMes);

    //adding text to a message
    let newTextMes = document.createElement('div');
    newTextMes.classList.add('text');
    let newTextText = document.createTextNode(txt);
    newTextMes.appendChild(newTextText);
    newMes.appendChild(newTextMes);

    //adding message to chatbox
    chatbox.appendChild(newMes);
}