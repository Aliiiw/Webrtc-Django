console.log('In main.js!')


var inputUsername = document.querySelector('#username');
var btnJoin = document.querySelector('#btn-join');

var username;

var webSocket;

function webSocketOnMessage(event){
    var parsedData = JSON.parse(event.data);
    var message = parsedData['message'];
    console.log('meess' , message);
}

btnJoin.addEventListener('click', () => {
    username = inputUsername.value;

    console.log('username: ', username);
    if(username == '') {
        return;
    }

    inputUsername.value = '';
    inputUsername.disabled = true;
    inputUsername.style.visibility = 'hidden';

    btnJoin.disabled = true;
    btnJoin.style.visibility = 'hidden';

    var labelUsername = document.querySelector('#label-username');

    labelUsername.innerHTML = username;

    var loc = window.location;
    var wsStart = 'ws://';

    if(loc.protocol == 'https:'){
        wsStart = 'wss://';
    }

    var endPoint = wsStart + loc.host + loc.pathname;

    console.log('endPoint:', endPoint);

    webSocket = new WebSocket(endPoint);

    webSocket.addEventListener('open', (e) => {
        console.log('connection open!');
    });

    webSocket.addEventListener('message', webSocketOnMessage);

    webSocket.addEventListener('close', (e) => {
        console.log('connection close!');
    });
    
    webSocket.addEventListener('error', (e) => {
        console.log('connection errored!');
    });

});