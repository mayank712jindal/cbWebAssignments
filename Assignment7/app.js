let name = document.getElementById("name");
let date = document.getElementById("date");
let temperature = document.getElementById("temperature");
let minMax = document.getElementById("minMax");
let wind = document.getElementById("wind");
let description = document.getElementById("description");


$("#location").on("keypress", function (event) {
    if (event.which === 13) {
        getWeatherDetails(event.target.value);
        event.target.value = "";
    }
});
$("#getWeather").click(() => {
    getWeatherDetails($("#location").val());
    $("#location").val("");
})

function getWeatherDetails(input) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=9d3dc907e0744c7713da7596fa1a09b8`)
        .then((result) => {
            return result.json()
        })
        .then((data) => {
            console.log(data)
            let text = data.name;
            name.innerHTML = text;

            text = new Date();
            date.innerHTML = text.toDateString();

            text = parseInt(data.main.temp - 273);
            temperature.innerHTML = text + "&#176C";

            txt = parseInt(data.main.temp_min - 273);
            let txt2 = parseInt(data.main.temp_max - 273);
            minMax.innerHTML = txt + "&#176C (Min) / " + txt2 + "&#176C (Max)";

            text = data.wind.speed;
            wind.innerHTML = text + " kms";

            text = data.weather[0].description;
            description.innerHTML = text;

            background(data.weather[0].main);

        })
        .catch((err) => {
            alert("Enter Valid Name");
            console.log(err.message);
        });
}

function background(input) {
    if (input === "Clear")
        $("body").css("background-image", "url('https://images.unsplash.com/photo-1627405413079-750105e9ff78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')");
    else if (input === "Rain")
        $("body").css("background-image", "url('https://images.unsplash.com/photo-1613488329064-aafbeb1e4db1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80')");
    else if (input === "Clouds")
        $("body").css("background-image", "url('https://images.unsplash.com/photo-1523297428500-14eaf71c6840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')");
    else if (input === "Snow")
        $("body").css("background-image", "url('https://images.unsplash.com/photo-1522885147691-06d859633fb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')");
    else if (input === "Extreme")
        $("body").css("background-image", "url('https://images.unsplash.com/photo-1607806694927-f634be06a474?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')");
    else if (input === "Mist" || input === "Haze")
        $("body").css("background-image", "url('https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1042&q=80')");
}