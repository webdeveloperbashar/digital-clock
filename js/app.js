function digitalClock() {
    // Time 
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let timeFormat = 'AM';

    if(hour === 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12
        timeFormat = "PM"
    }
    hour = hour < 10 ? `0${hour}` : hour
    min = min < 10 ? `0${min}` : min
    sec = sec < 10 ? `0${sec}` : sec

    document.getElementById('hrs').innerHTML = `${hour}`
    document.getElementById('mins').innerHTML = `${min}`
    document.getElementById('secs').innerHTML = `${sec}`
    document.getElementById('format').innerHTML = ` ${timeFormat}`

    // Show Day Name
    let days = ["Sunday","Monday","Tueday","Wedday","Thurday","Friday","Satday"]
    let currentDay = days[date.getDay()]
    document.getElementById('showDay').innerHTML = currentDay

    //Show Date
    document.getElementById('showDate').innerHTML = date.getDate()

    //Show Month
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    document.getElementById('showMonth').innerHTML = months[date.getMonth()]

    //Show Year
    document.getElementById('showYear').innerHTML = date.getFullYear()
    
    //Show City
    // document.getElementById('showCity')
    
    //Show Temperatur
    // document.getElementById('showTemp').innerHTML = `25 \xB0C`

}

setInterval(digitalClock, 1000);


const weather = document.getElementById('weather')
const API_KEY = 'a9c6536ac08fe59289ff270972163c40';
const proxy = 'https://cors-anywhere.herokuapp.com/'
const BASE_URL = `${proxy}api.openweathermap.org/data/2.5/weather?appid=a9c6536ac08fe59289ff270972163c40`
const DEFAULT_CITY = 'natore,bd';

window.onload = function(){
    navigator.geolocation.getCurrentPosition((s) =>{
        weatherData(null, s.coords)
    })
}

function weatherData(city = DEFAULT_CITY, coords) {
    let url = BASE_URL
    city === null ?
        url = `${url}&lat=${coords.latitude}&lang=${coords.longitude}` :
        url = `${url}&q=${city}`
    
    axios.get(url)
        .then((res) =>{
            return res.json()
        })
        .then(data =>{
            console.log(data)
        })
        .catch((e) =>{
            console.log(e)
        })
}

// function setWeather(weather){
//     document.getElementById('showCity').innerHTML = weather.city
//     document.getElementById('showTemp').innerHTML = `${weather.temp} \xB0C`


// }


// const weather = document.getElementById('weather')
// const API_KEY = 'a9c6536ac08fe59289ff270972163c40';
// // const proxy = 'https://cors-anywhere.herokuapp.com/'
// const BASE_URL = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`

// window.addEventListener('load', () =>{
//     let lat;
//     let long;
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition((position) =>{
//             lat = position.coords.latitude
//             long = position.coords.longitude
//         const API_KEY = '4a1304f57bb103a947f06b603464f08c';
//         const proxys = 'https://cors-anywhere.herokuapp.com/'
//         const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&long=${long}&appid=48ed8008442ac4558254abdf7dc80926`;
//         fetch(api)
//             .then(res =>{
//                 return res.json()
//             })
//             .then(data =>{
//                 console.log(data)
//             })
//         })
//     }
// })
