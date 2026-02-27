document.addEventListener("DOMContentLoaded", () => {
  // Simple countdown: 4h 59m 59s from page load
  const HOURS = 4;
  const MINUTES = 59;
  const SECONDS = 59;

  const hoursEl = document.getElementById("timer-hours");
  const minutesEl = document.getElementById("timer-minutes");
  const secondsEl = document.getElementById("timer-seconds");

  if (hoursEl && minutesEl && secondsEl) {
    const target = Date.now() + (HOURS * 60 * 60 + MINUTES * 60 + SECONDS) * 1000;

    const pad = (n) => String(n).padStart(2, "0");

    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        clearInterval(interval);
        return;
      }
      const totalSeconds = Math.floor(diff / 1000);
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;
      hoursEl.textContent = pad(h);
      minutesEl.textContent = pad(m);
      secondsEl.textContent = pad(s);
    };

    tick();
    const interval = setInterval(tick, 1000);
  }
});

