

let key = "cebcd482eda57fa9a6714c1c2ba91885"


function showOnScreen(data){
    console.log(data)
    document.querySelector(".location").innerHTML = data.name
    document.querySelector(".temp").innerHTML =  Math.floor(data.main.temp) + "°C"
    document.querySelector(".description").innerHTML = data.weather[0].description
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
}

async function searchLocation(location){
    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    location + 
    "&appid=" + 
    key + 
    "&lang=en" +
    "&units=metric"
    )
    .then(response => response.json())

    showOnScreen(data)
}


function clickSearch(){
   let location = document.querySelector(".input-location").value

   searchLocation(location)
}

