// imports always go first - if we're importing anything
import chatMessage from './modules/ChatMessage.js';
const socket = io();


// a packet is any data sent thru the connect event
function setUserId({sID}){
    console.log(sID);
    vm.socketID = sID;
};

function showDisconnectMessage(){
    console.log('a user has disconnected');
};

function appendMessage(message){
    //vm.name.push(name);
    vm.messages.push(message);
};

const vm = new Vue({
    data:{
        socketID: '',
        message: '',
        nickname: '',

        messages: []
        },

        methods:{
            //emit message event
            dispatchMessage(){
                console.log('message has been sent');

                socket.emit('chat_message', {
                    content: this.message,
                    name: this.nickname || 'anonymous'
                })

                this.message = '';
            }
        },
        
        mounted: function(){
            console.log('vue has mounted');
        },
        components:{
            newmessage: chatMessage
        }
}).$mount('#app');

socket.addEventListener('connected', setUserId);
socket.addEventListener('disconnect', showDisconnectMessage);
socket.addEventListener('new_message', appendMessage);