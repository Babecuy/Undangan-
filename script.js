// Countdown Timer
const countDownDate = new Date("Nov 27, 2025 10:00:00").getTime();
const timerEl = document.getElementById("timer");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance < 0) {
    timerEl.innerHTML = "Hari Pernikahan Telah Tiba!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  timerEl.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}, 1000);

// Buku Tamu Sederhana (tanpa backend)
const guestForm = document.getElementById("guestForm");
const guestMessages = document.getElementById("guestMessages");

guestForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && message) {
    const newMsg = document.createElement("div");
    newMsg.innerHTML = `<strong>${name}</strong>: ${message}`;
    newMsg.style.padding = "0.5rem";
    newMsg.style.borderBottom = "1px solid #ad1457";

    guestMessages.prepend(newMsg);

    guestForm.reset();
  }
});
