// nav.html 불러오기
fetch("nav.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("nav").innerHTML = data;
  });

// profile.html 불러오기
fetch("profile.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("profile").innerHTML = data;
  });

// content.html 불러오기
fetch("content.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("content").innerHTML = data;
  });
