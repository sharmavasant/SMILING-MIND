// const http = require('http').createServer(app);
// const io = require('socket.io')(http)
const socket = io()
let nam ;
let messageArea = document.querySelector('.message_area'); 
let textarea = document.querySelector('.textarea')

do{
    nam = prompt('Please enter your good name:')
}
while(!nam)

textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        sendMessage(e.target.value)
    }
})

function sendMessage(message){

     let msg={
        user: nam,
        message: message.trim()
     }

     //Append
     appendMessage(msg, 'outgoing');
     textarea.value = ' '; 
     scrolToBottom(); 

     //send to server
     socket.emit('message', msg)
}

function appendMessage(msg, type){
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `

    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}

//Recieve message

socket.on('message', (msg) => {
    appendMessage(msg, 'incoming') 
    scrolToBottom(); 
})

function scrolToBottom(){
    messageArea.scrollTop = messageArea.scrollHeight
}