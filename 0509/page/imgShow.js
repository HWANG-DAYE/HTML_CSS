let imgs = document.querySelectorAll("#slides img");
let prev = document.querySelector("#prev");
let nex = document.querySelector("#next");
let img_num = 0;
showing(img_num);

function showing(n) {
    for(let i=0; i<imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
}

prev.onclick = function() {
    img_num--;
    if(img_num<0) img_num = imgs.length-1;
    showing(img_num);
}

next.onclick = function() {
    img_num++;
    if(img_num>imgs.length-1) img_num = 0;
    showing(img_num);
}