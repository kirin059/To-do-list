"use stric";

// html 객체 가져오기
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const addList = document.querySelector(".addList");

// 버튼을 클릭했을 때, li 추가되는 함수 작성
btn.addEventListener("click", () => {
    let txt = input.value;

    if (txt.length < 1) {
        alert("내용을 입력해 주세요");
    } else {
        const li = document.createElement("li");
        const liFrame = `${txt} <div><button class="checkBtn"><img src="./images/checkBtn.png" /></button> <button class="delBtn"><img src="./images/delBtn.png" /></button></div>`;
        li.innerHTML = liFrame;
        addList.insertBefore(li, addList.childNodes[0]);
        input.value = "";
    }

    // done 버튼 누르면 취소선 생기는 함수 작성
    const checkBtn = document.querySelectorAll(".checkBtn");

    checkBtn[0].addEventListener("click", (e) => {
        e.path[3].classList.toggle("checked");
        // console.log(e.path);
    });

    // del 버튼 누르면 리스트가 삭제되는 함수 작성
    const delBtn = document.querySelectorAll(".delBtn");

    delBtn[0].addEventListener("click", (e) => {
        e.path[4].removeChild(e.path[3]);
        // console.log(e.path);
    });
});
