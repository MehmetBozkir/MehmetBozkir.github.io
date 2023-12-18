let countDownDate = new Date("Nov 17, 2023 21:00:00");

let x = setInterval(function () {
  let now = new Date().getTime();

  let spentTime = now - countDownDate;

  let day = Math.floor(spentTime / (1000 * 60 * 60 * 24));
  let hour = Math.floor((spentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((spentTime % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((spentTime % (1000 * 60)) / 1000);
  let millisecond = Math.floor(spentTime % 1000);

  document.getElementById("time").innerHTML =
    "Time Spent: " +
    day +
    "d " +
    hour +
    "h " +
    minute +
    "m " +
    second +
    "s " +
    millisecond +
    "ms ";
});
