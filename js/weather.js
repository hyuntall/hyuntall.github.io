const API_KEY = "b063c831fd272aa907466e14533f7fcb"

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `Today Weather: ${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you. No weater for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)