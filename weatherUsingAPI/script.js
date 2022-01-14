var btn = document.getElementById('btn');
btn.addEventListener("click", function() {
    // console.log("hello");
    var cityname = document.getElementById("input-city").value;
    var appid = '502d241edb50940a9ab9d3e75ab0c25a';
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${appid}`;
    // console.log(url);
    fetch(url)
        .then((response) => {
            return response.json();
        }).then((data) => {
            display(data);
        });
})

function display(x) {
    console.log(x);
    let temp = Math.round(x.main['temp'] - 273);
    document.getElementById('weather-temp').innerText = temp + '\xB0 C';
    document.getElementById('locationdetail').innerText = `in ${x.name}`;
    console.log(x.name);
    document.getElementById('Weather-location').innerText = (x.name);
    document.getElementById('weather-type-name').innerText = (x.weather[0].main);

    document.getElementById('cloudy').innerText = (x.clouds.all);
    document.getElementById('humidity').innerText = (x.main.humidity);
    document.getElementById('wind').innerText = "NA";
    document.getElementById('presure').innerText = (x.main.pressure);
    if (x.weather[0].main == Mist) {
        var icon = document.getElementById('icon');
        icon.classList.remove('fa-sun');
        icon.classList.add = 'fa-smog';
    }
}