console.log('In main.js!')


var inputUsername = document.querySelector('#username');
var btnJoin = document.querySelector('#btn-join');

var username;
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


});