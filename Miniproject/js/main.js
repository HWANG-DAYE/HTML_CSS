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

function setNavEvents() {
  const links = document.querySelectorAll("#nav a");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const page = link.getAttribute("data-page");

      // ✅ 모든 링크에서 active 클래스 제거
      links.forEach(l => l.classList.remove("active"));

      // ✅ 클릭한 링크에 active 클래스 추가
      link.classList.add("active");

      // ✅ 해당 HTML 로드
      fetch(`html/${page}`)
        .then(res => res.text())
        .then(data => {
          document.getElementById("content").innerHTML = data;
        })
        .catch(err => {
          document.getElementById("content").innerHTML = "<p>페이지를 불러올 수 없습니다.</p>";
          console.error(err);
        });
    });
  });
}


// 페이지 내 다른 data-page 링크들(글쓰기 버튼 등)에도 클릭 이벤트 적용
document.addEventListener("click", function (e) {
  const target = e.target.closest("a[data-page]"); // 가장 가까운 <a data-page> 요소 찾기
  if (target) {
    e.preventDefault(); // 기본 링크 이동 막기
    const page = target.getAttribute("data-page");

    fetch(`html/${page}`)
      .then(res => res.text())
      .then(data => {
        document.getElementById("content").innerHTML = data;
      })
      .catch(err => {
        document.getElementById("content").innerHTML = "<p>페이지를 불러올 수 없습니다.</p>";
        console.error(err);
      });
  }
});

// 별점
document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const ratingInput = document.getElementById("rating");

  stars.forEach(star => {
    star.addEventListener("click", function () {
      const value = this.getAttribute("data-value");
      ratingInput.value = value;

      stars.forEach(s => s.classList.remove("selected"));
      this.classList.add("selected");
      let prev = this.previousElementSibling;
      while (prev) {
        prev.classList.add("selected");
        prev = prev.previousElementSibling;
      }
    });
  });
});


