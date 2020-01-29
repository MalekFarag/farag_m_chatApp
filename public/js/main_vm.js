// imports always go first - if we're importing anything

const socket = io();


// a packet is any data sent thru the connect event
function setUserId(packet){
    console.log(packet);
};

function showDisconnectMessage(){
    console.log('a user has disconnected');

};

socket.addEventListener('connected', setUserId);
socket.addEventListener('disconnect', showDisconnectMessage);