document.addEventListener("DOMContentLoaded", function () {
  const modifyNumber = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const setClock = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // 월은 0-11(1-12)
    const day = today.getDate();
    const hour = today.getHours();
    const min = modifyNumber(today.getMinutes());
    const sec = modifyNumber(today.getSeconds());

    const ampm = document.querySelector(".AMPM");
    const date = document.querySelector(".date");
    const time = document.querySelector(".time");

    ampm.textContent = hour < 12 ? "am" : "pm";

    date.textContent = `${year} - ${month} - ${day}`;
    time.textContent =
      ampm.textContent === "am"
        ? `${hour} : ${min} : ${sec}`
        : `${hour - 12} : ${min} : ${sec}`;
  };

  window.onload = function () {
    setClock();
    setInterval(setClock, 1000); // 1초 간격으로 secClock 함수 실행.
  };

  const battery = document.querySelector(".battery");
  const screen = document.querySelector(".screen");
  const showAddModal = document.querySelector(".addModal");
  const showListModal = document.querySelector(".listModal");
  const openListBtn = document.querySelector("#list");
  const openAddBtn = document.querySelector("#add");

  let batteryLevel = 100;

  function decreaseBattery() {
    batteryLevel--;
    battery.textContent = batteryLevel + "%";

    if (batteryLevel === 0) {
      screen.style.background = "black";
    }
  }

  setInterval(decreaseBattery, 1000);

  openListBtn.addEventListener("click", () => {
    if (screen.style.background === "black") {
      return;
    }
    showListModal.style.display = "block";
  });

  openAddBtn.addEventListener("click", () => {
    if (screen.style.background === "black") {
      return;
    }
    showAddModal.style.display = "block";
  });
});
