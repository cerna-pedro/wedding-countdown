// query selectors
const timer = document.querySelector(".timer");

// event listener on page load
document.addEventListener("DOMContentLoaded", startTimer);

// functions
function startTimer() {
  const weddingDate = new Date("10/10/2020 4:30 pm");
  const months = weddingDate.getMonth();
  const days = weddingDate.getDay();
  const hours = weddingDate.getHours();
  const minutes = weddingDate.getMinutes();
  const seconds = weddingDate.getSeconds();
  const now = new Date();
  timer.textContent = now.getMilliseconds();

  setInterval(() => {
    const now = new Date();
    timer.textContent = now.getMilliseconds();
  }, 1000);
}
