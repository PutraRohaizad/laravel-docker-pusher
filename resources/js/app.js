require('./bootstrap');


const username = document.getElementById('username');
const message = document.getElementById('message');
const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    axios.post('/send', { username : username.value, message: message.value })
    .then(res => console.log(res))
    .catch(e => console.error(e));
});

window.Echo.channel('chat')
.listen('.message', (e) => {
    console.log(e);
});