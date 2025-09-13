let search = document.getElementById('valuesearch');
let city = document.getElementById('city');
let temp = document.getElementById('temp');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let humi = document.getElementById('humi');
let pres = document.querySelector('.p');

let main = document.querySelector('main');

let form = document.querySelector('form');
window.addEventListener('DOMContentLoaded', () => {
    if (search.value.trim() !== '') {
        searchweather(); // fetch weather for default city
    }
});
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (search.value == 'City not found') {
        search.value = '';
    }
    if (search.value != '') {
        searchweather();
    }
})

let id = '257fb2d0f1f2ef059bd2dc617ada4183';
let url = 'https://api.openweathermap.org/data/2.5/weather?appid=' + id + '&units=metric';


const searchweather = () => {
    let cityname = encodeURIComponent(search.value.trim());
    const urlWithCity = `https://api.openweathermap.org/data/2.5/weather?appid=${id}&units=metric&q=${cityname}`;
    fetch(urlWithCity)
        .then(response => response.json()) // return JSON
        .then(data => {
            console.log(data); // now you get actual weather data
            if (data.cod == 200) {
                city.querySelector('figcaption').innerText = data.name;
                city.querySelector('img').src = 'https://flagsapi.com/' + data.sys.country + '/shiny/32.png';
                if (data.weather && data.weather[0] && data.weather[0].icon) {
                    temp.querySelector('img').src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png';
                }
                description.innerText = data.weather[0].description;
                clouds.innerText = data.clouds.all;
                humi.innerText = data.main.humidity;
                pres.innerText = data.main.pressure;
            }
            else {
                main.classList.add('error');
                setTimeout(()=>{
                    main.classList.remove('error');
                },1000)
            }
            search.value='';

        })
        .catch(error => console.error(error));
}
search.addEventListener('focus', () => {
    search.value = '';
    search.style.color = '';
});

