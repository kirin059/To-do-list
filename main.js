'use stric';

// html 객체 가져오기
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const list = document.querySelector('.addList');
// const el = document.getElementsByTagName('li');

// 버튼을 클릭했을 때, el 추가되는 함수 작성
btn.addEventListener('click', () => {
    // input에 값이 들어온다
    let txt = input.value;

    // input에 아무것도 쓰지 않고 버튼을 클릭한 경우(if)
    // input에 txt를 쓰고 버튼을 클릭한 경우(else)  >>> el 생성
    if (txt==="") {
        alert("내용을 입력해 주세요");
    }
    else {
        // 새로 만들어줄 요소 생성
        let li = document.createElement('li');
        
        // 새로 만들어준 요소에 txt값 넣어주기
        li.innerHTML = `${txt} <div><button class="checkBtn"><img src="./images/checkBtn.png" /></button> <button class="delBtn"><img src="./images/delBtn.png" /></button></div>`;
        
        // list에 li 추가  >>> insertBefore() : 부모노드 기준점 노드 앞에 삽입할 노드를 삽입
        list.insertBefore(li, list.childNodes[0]);
  
        // input 초기화
        input.value = '';
    }
});


// done 버튼을 누르면 선그어지는 함수(toggle)
const checkBtn = document.querySelector('.checkBtn')
checkBtn.addEventListener('click', (e) => {
    if(e.target.className === 'checkBtn') {
        e.target.classList.toggle('.checked');
    }
});




// delete 버튼 누르면 el 삭제되는 함수
