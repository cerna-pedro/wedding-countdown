// query selectors
const timer = document.querySelector(".timer");
const title = document.querySelector("h1");
let originalTitle = title.textContent;

// event listener on page load
document.addEventListener("DOMContentLoaded", startTimer);
title.addEventListener("mouseenter", addSpans);
title.addEventListener("mouseleave", removeSpans);

// functions

function calcNow() {
  const weddingDate = new Date("10/10/2020 4:30 pm");
  const weddingYear = weddingDate.getFullYear();
  const weddingMonth = weddingDate.getMonth();
  const weddingDay = weddingDate.getDate();
  const weddingHour = weddingDate.getHours();
  const weddingMinute = weddingDate.getMinutes();
  const weddingSecond = weddingDate.getSeconds();
  const weddingUTC = Date.UTC(
    weddingYear,
    weddingMonth,
    weddingDay,
    weddingHour,
    weddingMinute,
    weddingSecond
  );
  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth();
  const nowDay = now.getDate();
  const nowHour = now.getHours();
  const nowMinute = now.getMinutes();
  const nowSecond = now.getSeconds();
  const nowUTC = Date.UTC(
    nowYear,
    nowMonth,
    nowDay,
    nowHour,
    nowMinute,
    nowSecond
  );
  let diff = weddingUTC - nowUTC;
  if (diff < 0) {
    timer.textContent = "Berto is now married!!!!🔥🔥🔥";
  } else {
    let diffDays = Math.floor((weddingUTC - nowUTC) / 1000 / 60 / 60 / 24);
    let diffHours = Math.floor(
      (weddingUTC - nowUTC) / 1000 / 60 / 60 - diffDays * 24
    );
    let diffMinutes = Math.floor(
      (weddingUTC - nowUTC) / 1000 / 60 - diffDays * 24 * 60 - diffHours * 60
    );
    let diffSeconds = Math.floor(
      (weddingUTC - nowUTC) / 1000 -
        diffDays * 24 * 60 * 60 -
        diffHours * 60 * 60 -
        diffMinutes * 60
    );
    diffDays = diffDays.toString();
    diffHours = diffHours.toString();
    diffMinutes = diffMinutes.toString();
    diffSeconds = diffSeconds.toString();
    diffHours = diffHours >= 10 ? diffHours : `0` + diffHours;
    diffMinutes = diffMinutes >= 10 ? diffMinutes : `0` + diffMinutes;
    diffSeconds = diffSeconds >= 10 ? diffSeconds : `0` + diffSeconds;
    timer.innerHTML = `<span class="number-block" id="block-1">${diffDays} Days</span><span class="number-block" id="block-2">${diffHours} Hours</span><span class="number-block" id="block-3">${diffMinutes} Minutes</span><span class="number-block" id="block-4">${diffSeconds} Seconds</span>`;
  }
}

function startTimer() {
  calcNow();
  setInterval(calcNow, 1000);
}

function addSpans() {
  let titleArr = Array.from(originalTitle);
  titleArr = titleArr.map(letter => {
    if (letter === " ") {
      letter = "&nbsp;";
      return `<span class="span-letter">${letter}</span>`;
    } else {
      return `<span class="span-letter">${letter}</span>`;
    }
  });
  title.innerHTML = titleArr.join("");
}

function removeSpans() {
  title.innerHTML = originalTitle;
}
