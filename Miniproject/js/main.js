// nav.html 불러오기
fetch("nav.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("nav").innerHTML = data;
    setNavEvents(); // nav를 불러온 후 클릭 이벤트 등록
  });

// profile.html 불러오기
fetch("profile.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("profile").innerHTML = data;
  });

// content.html (처음 페이지에 보여줄 내용)
fetch("content.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("content").innerHTML = data;
  });

// nav에 있는 메뉴들을 눌렀을 때 이벤트 설정하는 함수
function setNavEvents() {
  const links = document.querySelectorAll("#nav a"); // nav 안의 모든 <a> 태그 선택

  links.forEach(link => { // 각 링크마다 반복하면서
    link.addEventListener("click", e => { // 클릭 이벤트 추가
      e.preventDefault(); // 기본 링크 이동 막기 (페이지 새로고침 방지)

      const page = link.getAttribute("data-page"); // data-page 속성 값 가져오기

      // 해당하는 HTML 파일 불러오기
      fetch(`html/${page}`)
        .then(res => res.text()) // 파일을 텍스트(HTML 코드)로 읽고
        .then(data => {
          document.getElementById("content").innerHTML = data; // content에 덮어쓰기
        })
        .catch(err => { // 만약 에러가 나면
          document.getElementById("content").innerHTML = "<p>페이지를 불러올 수 없습니다.</p>";
          console.error(err); // 에러 로그 출력
        });
    });
  });
}
