document.addEventListener("DOMContentLoaded", function () {
  const showAddModal = document.querySelector(".addModal");
  const closeAddBtn = document.querySelector("#add--close--btn");
  const addBtn = document.querySelector("#add--btn");
  const showListModal = document.querySelector(".listModal");
  const closeListBtn = document.querySelector("#list--close--btn");

  closeAddBtn.addEventListener("click", () => {
    showAddModal.style.display = "none";
  });

  closeListBtn.addEventListener("click", () => {
    showListModal.style.display = "none";
  });

  const setList = (timeArray) => {
    const listScreen = document.querySelector(".list--screen");

    // 현재 목록 개수 확인
    const currentListCount = listScreen.childElementCount;
    if (currentListCount >= 3) {
      alert("더 이상 추가가 불가능합니다.");
      return;
    }

    timeArray.forEach((time) => {
      const newListItem = document.createElement("div");
      newListItem.classList.add("list--time");
      newListItem.textContent = time;
      listScreen.appendChild(newListItem);
    });
  };

  addBtn.addEventListener("click", () => {
    const inputText = document.querySelector("#add--input");
    const timeArray = [];

    // 입력값이 "00:00" 또는 "0:00" 형식인지 확인
    const regex = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/;
    if (!regex.test(inputText.value)) {
      alert("시간 형식은 00:00 또는 0:00으로 입력해주세요.");
      return;
    }

    timeArray.push(inputText.value);
    setList(timeArray);

    inputText.value = "";
    showAddModal.style.display = "none";
  });
});

/* 
<div class="list--screen">
  <div class="list--time">14:20</div>
  <div class="list--time">07:30</div>
  <div class="list--time">10:00</div>
</div> 
*/
