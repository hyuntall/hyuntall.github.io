const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "active"
    h1.classList.toggle(clickedClass);
    console.log(h1.classList);
}

//title.addEventListener("click", handleTitleClick);
h1.onclick = handleTitleClick;

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector('#greeting');

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

function paintGreetings(username){
    greeting.classList.remove(HIDDEN);
    greeting.innerText = `Hello ${username}`;
}

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onSubmit);
}else{
    paintGreetings(savedUsername);
}