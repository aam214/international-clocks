function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonClockElement = londonElement.querySelector(".time");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
  londonClockElement.innerHTML = londonTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoClockElement = tokyoElement.querySelector(".time");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
  tokyoClockElement.innerHTML = tokyoTime.format("h:mm:ss[<small>]A[</small>]");

  let limaElement = document.querySelector("#lima");
  let limaClockElement = limaElement.querySelector(".time");
  let limaDateElement = londonElement.querySelector(".date");
  let limaTime = moment().tz("America/Lima");

  limaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  limaClockElement.innerHTML = limaTime.format("h:mm:ss[<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
