function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonClockElement = londonElement.querySelector(".time");
    let londonDateElement = londonElement.querySelector(".date");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
    londonClockElement.innerHTML = londonTime.format(
      "h:mm:ss  [<small>]A[</small>]"
    );
  }

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoClockElement = tokyoElement.querySelector(".time");
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
    tokyoClockElement.innerHTML = tokyoTime.format(
      "h:mm:ss  [<small>]A[</small>]"
    );
  }

  let limaElement = document.querySelector("#lima");
  if (limaElement) {
    let limaClockElement = limaElement.querySelector(".time");
    let limaDateElement = limaElement.querySelector(".date");
    let limaTime = moment().tz("America/Lima");

    limaDateElement.innerHTML = moment().format("MMMM Do YYYY");
    limaClockElement.innerHTML = limaTime.format(
      "h:mm:ss  [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<h2 id="cities">
        <div class="city" id="london">
          <div>${cityName}</div>
          <div class="time">${cityTime.format("h:mm:ss")}
          <small>${cityTime.format("A")}</small></div>
             <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    
             </div>
        </div>
        `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
