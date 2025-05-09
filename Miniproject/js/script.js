// script.js

function loadHTML(targetId, url) {
    fetch(url)
        .then(res => res.text())
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        })
        .catch(err => console.error(`Error loading ${url}:`, err));
}

window.addEventListener("DOMContentLoaded", () => {
    loadHTML("nav", "nav.html");
    loadHTML("profile", "profile.html");
    loadHTML("content", "content.html");
});
