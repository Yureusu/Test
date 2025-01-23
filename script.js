
document.getElementById("username").addEventListener("click", username);

function username(){
    document.getElementById('user-text').style.display = 'block';
}

document.getElementById("email").addEventListener("click", email);

function email(){
    document.getElementById('email-text').style.display = 'block';
}

document.getElementById("password").addEventListener("click", password);

function password(){
    document.getElementById('password-text').style.display = 'block';
}