function weekly() {
    var chosenhighlight = document.getElementById("chosen")
    var dailybtn = document.getElementById("dailybtn")
    var weeklybtn = document.getElementById("weeklybtn")
    var dailydiv = document.getElementById("dailydiv")
    var weeklydiv = document.getElementById("weeklydiv")

    if (weeklydiv.style.display === "none") {
        chosenhighlight.style.left="76px"
        dailydiv.style.opacity = "0%"
        weeklydiv.style.opacity = "0%"
        setTimeout(function(){ 
            dailydiv.style.display = "none"
            weeklydiv.style.display = "flex"
            weeklydiv.style.opacity = "100%"
        }, 200);
        dailybtn.style.fontWeight = "500"
        weeklybtn.style.fontWeight = "600"  
    } else {
        chosenhighlight.style.transition = ".1s"
        chosenhighlight.style.width = "68px"
        chosenhighlight.style.left = "78.5px"
        chosenhighlight.style.height = "24px"
        chosenhighlight.style.top = "3.5px"
        setTimeout(function(){ 
            chosenhighlight.style.width = "73px"
            chosenhighlight.style.height = "27px"
            chosenhighlight.style.left = "76px"
            chosenhighlight.style.top = "2px"
            chosenhighlight.style.transition = ".3s"
        }, 100);
    }
}

function daily() {
    var chosenhighlight = document.getElementById("chosen")
    var dailybtn = document.getElementById("dailybtn")
    var weeklybtn = document.getElementById("weeklybtn")
    var dailydiv = document.getElementById("dailydiv")
    var weeklydiv = document.getElementById("weeklydiv")

    if (dailydiv.style.display === "none") {
        chosenhighlight.style.left="2px"
        dailydiv.style.opacity = "0%"
        weeklydiv.style.opacity = "0%"
        setTimeout(function(){ 
            weeklydiv.style.display = "none"
            dailydiv.style.display = "flex"
            dailydiv.style.opacity = "100%"
        }, 200);
        dailybtn.style.fontWeight = "600"
        weeklybtn.style.fontWeight = "500"  
    } else {
        chosenhighlight.style.transition = ".1s"
        chosenhighlight.style.width = "68px"
        chosenhighlight.style.left = "4.5px"
        chosenhighlight.style.height = "24px"
        chosenhighlight.style.top = "3.5px"
        setTimeout(function(){ 
            chosenhighlight.style.width = "73px"
            chosenhighlight.style.height = "27px"
            chosenhighlight.style.left = "2px"
            chosenhighlight.style.top = "2px"
            dailybtn.style.fontSize = "13px"
            chosenhighlight.style.transition = ".3s"
        }, 100);
    }
}

function parseDay(day) {
    if (day > 6) {
        day = day - 7
    }

    var weekday = new Array(7);
    weekday[0] = "Pazar";
    weekday[1] = "Pazartesi";
    weekday[2] = "Salı";
    weekday[3] = "Çarşamba";
    weekday[4] = "Perşembe";
    weekday[5] = "Cuma";
    weekday[6] = "Cumartesi";
    
    var day = weekday[day];
    return day
}

function parseMonth(m) {
    var month = new Array();
    month[0] = "Ocak";
    month[1] = "Şubat";
    month[2] = "Mart";
    month[3] = "Nisan";
    month[4] = "Mayıs";
    month[5] = "Haziran";
    month[6] = "Temmuz";
    month[7] = "Ağustos";
    month[8] = "Eylül";
    month[9] = "Ekim";
    month[10] = "Kasım";
    month[11] = "Aralık";
    var month = month[m];
    return month
}

function getweather() {
        var d = new Date();
        let proxy = 'https://cors-anywhere.herokuapp.com/'
		fetch(`${proxy}https://www.metaweather.com/api/location/2344116/`)
		.then(result => {
			return result.json();
		})
		.then(data =>{
            document.getElementById("secondarytext").innerHTML = data.title
            document.getElementById("bigdegree").innerHTML = parseInt(data.consolidated_weather[0].the_temp) + "º"
            document.getElementById("mintemp").innerHTML = parseInt(data.consolidated_weather[0].min_temp) + "º"
            document.getElementById("maxtemp").innerHTML = parseInt(data.consolidated_weather[0].max_temp) + "º"
            document.getElementById("winddirection").innerHTML = parseInt(data.consolidated_weather[0].wind_direction) + "º"
            document.getElementById("windspeed").innerHTML = parseInt(data.consolidated_weather[0].wind_speed) + " km/sa"
            document.getElementById("airpressure").innerHTML = parseInt(data.consolidated_weather[0].air_pressure) + " hPa"
            document.getElementById("humidity").innerHTML = parseInt(data.consolidated_weather[0].humidity)
            document.getElementById("lowest0").innerHTML = parseInt(data.consolidated_weather[0].min_temp)
            document.getElementById("highest0").innerHTML = parseInt(data.consolidated_weather[0].max_temp)
            document.getElementById("day0").innerHTML = parseDay(d.getDay())
            document.getElementById("lowest1").innerHTML = parseInt(data.consolidated_weather[1].min_temp)
            document.getElementById("highest1").innerHTML = parseInt(data.consolidated_weather[1].max_temp)
            document.getElementById("day1").innerHTML = parseDay(d.getDay() + 1)
            document.getElementById("lowest2").innerHTML = parseInt(data.consolidated_weather[2].min_temp)
            document.getElementById("highest2").innerHTML = parseInt(data.consolidated_weather[2].max_temp)
            document.getElementById("day2").innerHTML = parseDay(d.getDay() + 2)
            document.getElementById("lowest3").innerHTML = parseInt(data.consolidated_weather[3].min_temp)
            document.getElementById("highest3").innerHTML = parseInt(data.consolidated_weather[3].max_temp)
            document.getElementById("day3").innerHTML = parseDay(d.getDay() + 3)
            document.getElementById("lowest4").innerHTML = parseInt(data.consolidated_weather[4].min_temp)
            document.getElementById("highest4").innerHTML = parseInt(data.consolidated_weather[4].max_temp)
            document.getElementById("day4").innerHTML = parseDay(d.getDay() + 4)
            document.getElementById("lowest5").innerHTML = parseInt(data.consolidated_weather[5].min_temp)
            document.getElementById("highest5").innerHTML = parseInt(data.consolidated_weather[5].max_temp)
            document.getElementById("day5").innerHTML = parseDay(d.getDay() + 5)
            document.getElementById("todaydate").innerHTML = d.getDate().toString() + " " + parseMonth(d.getMonth()).toString() + ", " + parseDay(d.getDay()).toString()
		})
		.catch(error => {
            console.log(error)
            alert("Hava durumu bilgisi alınamadı")
		});
}