
var socket = io('http://64.227.181.196:4444', { transports : ['websocket'] });

const form = document.getElementById('send-container');
const messageinput = document.getElementById('messageinp');
const messagecontainer = document.querySelector(".messages-content");

// Audio that will play on receiving messages
const play=()=>{
    var audio = new Audio('ting.wav');
    audio.play();
}

//time
var gettime=()=>{
var date = new Date();
var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
var am_pm = date.getHours() >= 12 ? "PM" : "AM";
hours = hours < 10 ? "0" + hours : hours;
var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
return time;
}

// Function which will append event info to the contaner
const append = (name, message, position) => {
    time = gettime();
    const messageElement = document.createElement('div');
    if (position == 'left') {
        play();
        messageElement.innerHTML = `<figure class="avatar">${name}</figure><hr/>${message}<div class="timestamp">${time}</div>`;
    }else{
        messageElement.innerHTML = `${message}`;
    }
    messageElement.classList.add('message');
    messageElement.classList.add('new');
    if (position == 'right') {
        messageElement.classList.add('message-personal');
    }
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
    messagecontainer.scrollTo(0,messagecontainer.scrollHeight);
}


// Ask new user for his/her name and let the server know
const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name);

// If a new user joins, receive his/her name from the server
socket.on('user-joined', name => {
    append( `${name}`, `joined the chat`, 'left')
})

// If server sends a message, receive it
socket.on('receive', data =>{
    append(`${data.name}`,`${data.message}`, 'left')
})

// If a user leaves the chat, append the info to the container
socket.on('left', name =>{
    append(`${name}`, 'left the chat', 'left')
})

// If the form gets submitted, send server the message
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageinput.value;
    append('you',`${message}`, 'right');
    socket.emit('send', message);
    messageinput.value = ''
})