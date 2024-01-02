function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonClockElement = londonElement.querySelector(".time");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
  londonClockElement.innerHTML = londonTime.format(
    "h:mm:ss  [<small>]A[</small>]"
  );

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoClockElement = tokyoElement.querySelector(".time");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
  tokyoClockElement.innerHTML = tokyoTime.format(
    "h:mm:ss  [<small>]A[</small>]"
  );

  let limaElement = document.querySelector("#lima");
  let limaClockElement = limaElement.querySelector(".time");
  let limaDateElement = limaElement.querySelector(".date");
  let limaTime = moment().tz("America/Lima");

  limaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  limaClockElement.innerHTML = limaTime.format("h:mm:ss  [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let chooseTimeZone = event.target.value;
  let chooseTime = moment().tz(chooseTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = chooseTimeZone;
  citiesElement = `<h2 class="cities">
        <div class="box-city" id="london">
          <div class="current-city">${chooseTimeZone}</div>
          <div class="time">${chooseTime.format(
            "h:mm:ss"
          )}</div><div class="am-pm"></div>
             <div class="date">${chooseTime.format("MMMM Do YYYY")}</div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#choose");
citiesSelectElement.addEventListener("change", updateCity);
