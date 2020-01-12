// query selectors
const timer = document.querySelector(".timer");

// event listener on page load
document.addEventListener("DOMContentLoaded", startTimer);

// functions
function startTimer() {
  const weddingDate = new Date("10/10/2020 4:30 pm");
  const weddingMonth = weddingDate.getMonth();
  const weddingDay = weddingDate.getDay();
  const weddingHour = weddingDate.getHours();
  const weddingMinute = weddingDate.getMinutes();
  const weddingSecond = weddingDate.getSeconds();
  const now = new Date();
  timer.textContent = now.getSeconds();

  setInterval(() => {
    const now = new Date();
    const nowMonth = now.getMonth();
    const nowDay = now.getDay();
    const nowHour = now.getHours();
    const nowMinute = now.getMinutes();
    const nowSecond = now.getSeconds();
    console.log(now)
    timer.textContent = now.getSeconds();
  }, 1000);
}
