# To-Do-List 만들기(1) 
## javascript
---

1. insertBefore(el, parent_tag.childNodes[0])
리스트가 생성되는 `<ul>` 태그 내 `<li>` 태그를 넣어 주는 방법 >> `insertBefore` 사용
```js
  addList.insertBefore(li, addList.childNodes[0]);
```

2. delBtn[0]
del 버튼 누르면 리스트가 삭제되는 함수 작성
```js
  const delBtn = document.querySelectorAll(".delBtn");
  // 모든 delBtn 불러온다  >> 배열로 전달됨
  
  // 복수의 태그이기 때문에 배열로 index를 설정해 주어야 한다 
  delBtn[0].addEventListener("click", (e) => {
        e.path[4].removeChild(e.path[3]);
        // console.log(e.path);
    });
  // insertBefore를 통해 가장 최근에 생성된 li는 가장 위(=index가 0번째)에 위치한다
  // 따라서 delBtn[0]을 해주면 새롭게 생성될 때마다 eventListener가 적용된다(=모두 적용)
  
  // 이벤트 리스너 타겟 객체(=e)의 path를 통해 위치를 지정한다.
  // e.path[4] = addList
  // e.path[3] = li
```
